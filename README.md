# I CAN — course landing pages

A responsive marketing site for three beginner courses: I CAN CODE, I CAN EDIT and I CAN ANALYSE DATA.

## Pages

- `/ican-code` — introductory Python coding
- `/ican-edit` — introductory video editing
- `/ican-data` — introductory data analytics

Each page has course-specific metadata, structured data, a project outcome, and an enquiry form. Enquiries are stored in Cloudflare D1. The Sites deployment is currently private and configured with `noindex` and a disallowing `robots.txt`; change those only when public launch is approved.

## Local development

Requires Node.js 22 or newer. Install dependencies with `pnpm install`, then run `pnpm dev`. The D1 schema is in `db/schema.ts` and the generated migration in `drizzle/`. See the project scripts for build and deployment.

Course content and imagery were adapted from the I CAN Flask v4.4 marketing routes.
