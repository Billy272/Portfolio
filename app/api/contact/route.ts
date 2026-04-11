import { neon } from '@neondatabase/serverless';

type ContactSubmission = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
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

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

async function ensureContactMessagesTable() {
  if (!sql) {
    throw new Error('DATABASE_URL is not configured.');
  }

  bootstrapPromise ??= sql`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `.then(() => undefined);

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

  const name = getTrimmedString(payload.name);
  const email = getTrimmedString(payload.email);
  const subject = getTrimmedString(payload.subject);
  const message = getTrimmedString(payload.message);

  if (!name || !email || !subject || !message) {
    return Response.json(
      { error: 'All contact fields are required.' },
      { status: 400 },
    );
  }

  if (
    name.length > MAX_FIELD_LENGTHS.name ||
    email.length > MAX_FIELD_LENGTHS.email ||
    subject.length > MAX_FIELD_LENGTHS.subject ||
    message.length > MAX_FIELD_LENGTHS.message
  ) {
    return Response.json(
      { error: 'One or more fields exceed allowed length.' },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return Response.json(
      { error: 'Please provide a valid email address.' },
      { status: 400 },
    );
  }

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

    return Response.json(
      { error: 'Unable to save your message right now.' },
      { status: 500 },
    );
  }
}