This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact Form Email Setup (Gmail)

The contact flow is split for safety:

- Public endpoint `app/api/contact/route.ts` only saves the message in your database.
- Protected endpoint `app/api/contact/dispatch/route.ts` sends emails for rows where `email_notified_at IS NULL`.

Set these environment variables in your local `.env.local` and production environment:

```bash
# Existing DB connection
DATABASE_URL=...

# SMTP config (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-gmail-address@gmail.com
SMTP_PASS=your-gmail-app-password

# Optional overrides
CONTACT_TO_EMAIL=billbitok977@gmail.com
CONTACT_FROM_EMAIL=your-gmail-address@gmail.com

# Secret used to authorize dispatch endpoint
CONTACT_DISPATCH_SECRET=strong-random-secret-value
```

Notes:

- `SMTP_PASS` must be a Gmail App Password (not your normal Gmail password).
- Enable 2-Step Verification on the Gmail account first, then generate an App Password.
- If `CONTACT_TO_EMAIL` is not set, messages are sent to `billbitok977@gmail.com` by default.
- `CONTACT_DISPATCH_SECRET` should be long and random.

### Triggering Email Dispatch

Call the protected endpoint from a server-side cron job (every minute is typical):

```bash
curl -X POST https://your-domain.com/api/contact/dispatch \
	-H "Authorization: Bearer $CONTACT_DISPATCH_SECRET"
```

This design keeps SMTP work off the public form request and only sends email from a protected route.
