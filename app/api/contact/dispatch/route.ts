import { neon } from '@neondatabase/serverless';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const databaseUrl =
  process.env.DATABASE_URL ??
  process.env.DATABASE_URL_UNPOOLED ??
  process.env.POSTGRES_URL_NON_POOLING ??
  process.env.POSTGRES_URL;

const sql = databaseUrl ? neon(databaseUrl) : null;
const recipientEmail = process.env.CONTACT_TO_EMAIL ?? 'billbitok977@gmail.com';
const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number.parseInt(process.env.SMTP_PORT ?? '465', 10);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFrom = process.env.CONTACT_FROM_EMAIL ?? smtpUser;
const dispatchSecret = process.env.CONTACT_DISPATCH_SECRET ?? process.env.CRON_SECRET;
const DISPATCH_BATCH_SIZE = 20;

let bootstrapPromise: Promise<void> | null = null;
let transporter: nodemailer.Transporter | null = null;

type ContactMessageRow = {
  id: string | number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
};

async function ensureContactMessagesTable() {
  if (!sql) {
    throw new Error('DATABASE_URL is not configured.');
  }

  if (!bootstrapPromise) {
    bootstrapPromise = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id BIGSERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          subject TEXT NOT NULL,
          message TEXT NOT NULL,
          email_notified_at TIMESTAMPTZ,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;

      await sql`ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS email_notified_at TIMESTAMPTZ`;
    })().catch((error) => {
      bootstrapPromise = null;
      throw error;
    });
  }

  await bootstrapPromise;
}

function getMailTransporter() {
  if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
    return null;
  }

  transporter ??= nodemailer.createTransport({
    host: smtpHost,
    port: Number.isFinite(smtpPort) ? smtpPort : 465,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  return transporter;
}

function isAuthorized(request: Request) {
  if (!dispatchSecret) {
    return false;
  }

  const authHeader = request.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.slice('Bearer '.length).trim() === dispatchSecret;
  }

  const fallbackHeader = request.headers.get('x-cron-secret');
  return fallbackHeader === dispatchSecret;
}

function formatMailHtml(row: ContactMessageRow) {
  return `
    <h2>New portfolio contact submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(row.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(row.email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(row.subject)}</p>
    <p><strong>Submitted At:</strong> ${escapeHtml(row.created_at)}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(row.message).replaceAll('\n', '<br />')}</p>
  `;
}

async function dispatchPendingMessages() {
  if (!sql) {
    return Response.json(
      { error: 'Database connection is not configured.' },
      { status: 500 },
    );
  }

  const mailTransporter = getMailTransporter();
  if (!mailTransporter) {
    return Response.json(
      { error: 'Email service is not configured.' },
      { status: 500 },
    );
  }

  await ensureContactMessagesTable();

  const rows = (await sql`
    SELECT id, name, email, subject, message, created_at
    FROM contact_messages
    WHERE email_notified_at IS NULL
    ORDER BY created_at ASC
    LIMIT ${DISPATCH_BATCH_SIZE}
  `) as ContactMessageRow[];

  if (rows.length === 0) {
    return Response.json({ success: true, scanned: 0, sent: 0, pending: 0 });
  }

  const sentIds: Array<string | number> = [];
  const failedIds: Array<string | number> = [];

  for (const row of rows) {
    try {
      await mailTransporter.sendMail({
        from: smtpFrom,
        to: recipientEmail,
        replyTo: row.email,
        subject: `Portfolio Contact: ${row.subject}`,
        text: [
          'New portfolio contact submission',
          '',
          `Name: ${row.name}`,
          `Email: ${row.email}`,
          `Subject: ${row.subject}`,
          `Submitted At: ${row.created_at}`,
          '',
          'Message:',
          row.message,
        ].join('\n'),
        html: formatMailHtml(row),
      });

      await sql`
        UPDATE contact_messages
        SET email_notified_at = NOW()
        WHERE id = ${row.id}
      `;

      sentIds.push(row.id);
    } catch (error) {
      console.error('Contact dispatch error:', { id: row.id, error });
      failedIds.push(row.id);
    }
  }

  return Response.json({
    success: true,
    scanned: rows.length,
    sent: sentIds.length,
    failed: failedIds.length,
    sentIds,
    failedIds,
  });
}

export async function GET(request: Request) {
  return handleDispatchRequest(request);
}

export async function POST(request: Request) {
  return handleDispatchRequest(request);
}

async function handleDispatchRequest(request: Request) {
  if (!isAuthorized(request)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return dispatchPendingMessages();
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
