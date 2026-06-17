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

## Environment variables (`.env.local`)

Create `.env.local` at the project root with:

- Server-only (preferred for contact):
  - `FORMSPREE_ENDPOINT` — Formspree form POST URL (used by `/api/contact`)
  - `SANITY_API_VERSION` (optional)
- Public (contact fallback if server-only var is unset):
  - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — same Formspree URL (exposed to client bundle; prefer `FORMSPREE_ENDPOINT` in production)
- Public (safe for client exposure; project metadata only):
  - `NEXT_PUBLIC_SANITY_PROJECT_ID` (`88xnx54a`)
  - `NEXT_PUBLIC_SANITY_DATASET` (`production`)

Notes:
- Contact form: if neither Formspree env var is set, `POST /api/contact` returns **503** `unavailable` and the UI shows a call-to-fallback message.
- The professionals pages merge Sanity content with `src/data/professionals.ts` by slug (CMS wins per slug; file data fills gaps when Sanity env is missing or fetch fails).
- No Sanity token is required for published content reads in the current implementation.

## Sanity Studio

- Studio route is mounted at `/studio`.
- Start app with `npm run dev`, then open [http://localhost:3000/studio](http://localhost:3000/studio).
- Professionals schema is defined in `sanity/schemaTypes/professional.ts`.

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
