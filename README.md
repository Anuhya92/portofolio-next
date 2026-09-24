# Anuhya Talamanchi — Portfolio

A one-page portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS, with a Node.js API route behind the contact form and a Vitest test suite.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Node.js route handler (`app/api/contact/route.ts`) — swap in Express or any email provider later
- Vitest + Testing Library (unit + integration tests)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All the copy — bio, skills, education, contact details — lives in one place:
`app/data.ts`. Edit that file and every section updates.

## Running tests

```bash
npm test        # run once
npm run test:watch
```

- `tests/unit/Journey.test.tsx` — unit test for the timeline component
- `tests/integration/contact-form.test.tsx` — integration test covering the form → API call → confirmation flow

## Wiring up the contact form for real

Right now `POST /api/contact` validates the input and logs it to the server console. To actually deliver messages, plug an email provider (e.g. Resend, SendGrid, or Nodemailer with SMTP) into `app/api/contact/route.ts`, or point it at a separate Express service.

## Deploying

The fastest path is [Vercel](https://vercel.com/new): push this project to a GitHub repo and import it — no extra configuration needed. Any other Node.js host works too (`npm run build && npm start`).
