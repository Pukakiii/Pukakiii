# Igor Pukalski — Portfolio

Personal portfolio of Igor Pukalski (Pukakiii) — fullstack developer based in Warsaw, Poland.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- TypeScript 5.8
- shadcn/ui + Radix + Base UI primitives
- MDX blog with RSS feed
- OpenPanel analytics

## Pages

| Route | Content |
|-------|---------|
| `/` | Profile, overview, explore teasers, stack, blog, insights |
| `/about` | Bio and background |
| `/experience` | Work history |
| `/projects` | Open-source and personal projects |
| `/skills` | Tech stack and certifications |
| `/education` | Studies |
| `/blog` | MDX posts (+ `/rss.xml`) |
| `/analytics` | Site insights and GitHub contribution graph |
| `/contact` | Email, phone, socials, vCard and CV downloads |

## Development

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` and fill in what you need — everything degrades gracefully when unset.

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_APP_URL` | Canonical site URL |
| `GITHUB_API_TOKEN` | GitHub stars in the header |
| `GITHUB_CONTRIBUTIONS_API_URL` | Contribution graph on `/analytics` |
| `NEXT_PUBLIC_OPENPANEL_CLIENT_ID` + `OPENPANEL_*` | Analytics + insights chart |

## Scripts

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Dev server |
| `pnpm build` | Production build |
| `pnpm lint` | ESLint |
| `pnpm check-types` | TypeScript |
| `npm run resume:link` | Re-link local resume data folder (not committed) |
