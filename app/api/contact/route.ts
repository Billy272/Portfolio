import { neon } from '@neondatabase/serverless';

type ContactSubmission = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
  formStartedAt?: unknown;
};

const databaseUrl =
  process.env.DATABASE_URL ??
  process.env.DATABASE_URL_UNPOOLED ??
  process.env.POSTGRES_URL_NON_POOLING ??
  process.env.POSTGRES_URL;

const sql = databaseUrl ? neon(databaseUrl) : null;

let bootstrapPromise: Promise<void> | null = null;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTHS = {
  name: 120,
  email: 254,
  subject: 180,
  message: 5000,
} as const;
const MAX_BODY_BYTES = 12_000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FORM_FILL_MS = 1200;

const SPAM_PHRASE_REGEX =
  /(viagra|cialis|casino|crypto investment|loan approval|work from home|telegram|whatsapp\s*me|seo service|backlinks?)/i;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

type ParsedContactSubmission = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

async function ensureContactMessagesTable() {
  if (!sql) {
    throw new Error('DATABASE_URL is not configured.');
  }

  bootstrapPromise ??= (async () => {
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

  await bootstrapPromise;
}

function getTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function getClientAddress(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }

  return request.headers.get('x-real-ip') ?? 'unknown';
}

function isRateLimited(clientAddress: string) {
  const now = Date.now();
  const existing = rateLimitStore.get(clientAddress);

  if (!existing || now > existing.resetAt) {
    rateLimitStore.set(clientAddress, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  existing.count += 1;
  return false;
}

function getOptionalNumber(value: unknown) {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

function countUrls(value: string) {
  const matches = value.match(/https?:\/\/|www\./gi);
  return matches?.length ?? 0;
}

function looksLikeSpam(name: string, subject: string, message: string) {
  const combined = `${name} ${subject} ${message}`.toLowerCase();

  if (countUrls(combined) > 2) {
    return true;
  }

  if (SPAM_PHRASE_REGEX.test(combined)) {
    return true;
  }

  if (/(.)\1{8,}/.test(combined)) {
    return true;
  }

  return false;
}

function validateSubmission(payload: ContactSubmission):
  | { ok: true; data: ParsedContactSubmission }
  | { ok: false; response: Response } {
  const name = getTrimmedString(payload.name);
  const email = getTrimmedString(payload.email);
  const subject = getTrimmedString(payload.subject);
  const message = getTrimmedString(payload.message);
  const website = getTrimmedString(payload.website);
  const formStartedAt = getOptionalNumber(payload.formStartedAt);

  if (website) {
    // Honeypot field should remain empty for real users.
    return { ok: false, response: Response.json({ success: true }, { status: 202 }) };
  }

  if (formStartedAt && Date.now() - formStartedAt < MIN_FORM_FILL_MS) {
    return {
      ok: false,
      response: Response.json(
        { error: 'Submission was flagged as suspicious.' },
        { status: 400 },
      ),
    };
  }

  if (!name || !email || !subject || !message) {
    return {
      ok: false,
      response: Response.json(
        { error: 'All contact fields are required.' },
        { status: 400 },
      ),
    };
  }

  if (
    name.length > MAX_FIELD_LENGTHS.name ||
    email.length > MAX_FIELD_LENGTHS.email ||
    subject.length > MAX_FIELD_LENGTHS.subject ||
    message.length > MAX_FIELD_LENGTHS.message
  ) {
    return {
      ok: false,
      response: Response.json(
        { error: 'One or more fields exceed allowed length.' },
        { status: 400 },
      ),
    };
  }

  if (!EMAIL_REGEX.test(email)) {
    return {
      ok: false,
      response: Response.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 },
      ),
    };
  }

  if (looksLikeSpam(name, subject, message)) {
    return {
      ok: false,
      response: Response.json(
        { error: 'Message was flagged as spam. Please revise and try again.' },
        { status: 400 },
      ),
    };
  }

  return {
    ok: true,
    data: { name, email, subject, message },
  };
}

export async function POST(request: Request) {
  if (!sql) {
    return Response.json(
      { error: 'Database connection is not configured.' },
      { status: 500 },
    );
  }

  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.toLowerCase().includes('application/json')) {
    return Response.json(
      { error: 'Content-Type must be application/json.' },
      { status: 415 },
    );
  }

  const contentLengthHeader = request.headers.get('content-length');
  if (contentLengthHeader) {
    const contentLength = Number.parseInt(contentLengthHeader, 10);
    if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
      return Response.json(
        { error: 'Request body is too large.' },
        { status: 413 },
      );
    }
  }

  const clientAddress = getClientAddress(request);
  if (isRateLimited(clientAddress)) {
    return Response.json(
      { error: 'Too many requests. Please try again shortly.' },
      { status: 429 },
    );
  }

  let payload: ContactSubmission;

  try {
    payload = (await request.json()) as ContactSubmission;
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const validated = validateSubmission(payload);
  if (!validated.ok) {
    return validated.response;
  }

  const { name, email, subject, message } = validated.data;

  try {
    await ensureContactMessagesTable();

    const inserted = await sql`
      INSERT INTO contact_messages (name, email, subject, message)
      VALUES (${name}, ${email}, ${subject}, ${message})
      RETURNING id
    `;

    return Response.json(
      { success: true, id: inserted[0]?.id },
      { status: 201 },
    );
  } catch (error) {
    console.error('Contact submission error:', error);

    const message =
      error instanceof Error ? error.message : 'Unable to save your message right now.';

    return Response.json(
      {
        error:
          process.env.NODE_ENV === 'production'
            ? 'Unable to save your message right now.'
            : `Unable to save your message right now. (${message})`,
      },
      { status: 500 },
    );
  }
}