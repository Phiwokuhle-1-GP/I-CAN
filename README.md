# I CAN — course landing pages

A responsive marketing site for three beginner courses: I CAN CODE, I CAN EDIT and I CAN ANALYSE DATA, with an owner dashboard.

## Pages

- `/ican-code` — introductory Python coding
- `/ican-edit` — introductory video editing
- `/ican-data` — introductory data analytics
- `/locations` — learning options for Johannesburg, Randburg, Sandton, Rosebank, Cape Town and online across South Africa
- `/owner` — owner-only enquiry inbox and analytics

Course pages include unique metadata, Course structured data, project outcomes and enquiry forms. Enquiries are stored in Cloudflare D1. The owner can search the latest 100 enquiries, change their follow-up status and reply by email. Browser page views, sources and UTM campaigns provide basic 30-day analytics; they are not unique visitor counts. Email notifications are not configured.

The Sites deployment remains private and configured with `noindex` and a disallowing `robots.txt`. Search indexing will only become possible after a separately approved public launch and removal of those restrictions. City copy offers online learning and asks visitors to confirm any in-person format; it does not claim fixed local venues or dates.

## Local development

Requires Node.js 22 or newer. Install dependencies with `pnpm install`, then run `pnpm dev`. The D1 schema is in `db/schema.ts` and generated migrations in `drizzle/`. Set `OWNER_EMAIL` to the authenticated ChatGPT account email for the dashboard, using `.env.example` as a placeholder reference. The production value belongs in Sites runtime environment variables, not GitHub. See project scripts for build and deployment.

Course content and imagery were adapted from the I CAN Flask v4.4 marketing routes.
