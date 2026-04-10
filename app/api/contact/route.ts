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

export async function POST(request: Request) {
  if (!sql) {
    return Response.json(
      { error: 'Database connection is not configured.' },
      { status: 500 },
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