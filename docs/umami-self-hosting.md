# Self-hosted Umami on Vercel + Neon

Free, unlimited events, full history. Umami runs as its own Vercel project and
stores data in a free Neon Postgres. The portfolio only needs a URL, a website
id and an API key.

## 1. Database (Neon, free)

1. Sign up at https://console.neon.tech/signup and create a project. Pick a
   region close to Vercel's default, e.g. **AWS Europe Central (Frankfurt)**.
2. On the project dashboard click **Connect**. Copy two strings:
   - with **Connection pooling ON** (host contains `-pooler`) → `DATABASE_URL`
   - with **Connection pooling OFF** → `DIRECT_DATABASE_URL`

   Umami serves requests over the pooled URL and runs its migrations over the
   direct one during the build.

## 2. Deploy Umami on Vercel

1. Fork https://github.com/umami-software/umami/fork to your GitHub account.
2. Go to https://vercel.com/new and import the fork. Framework is detected as
   Next.js; keep the defaults (the repo ships a `vercel.json` with the pnpm
   install command).
3. Before the first deploy, add environment variables:

   | Name | Value |
   |------|-------|
   | `DATABASE_URL` | Neon pooled connection string |
   | `DIRECT_DATABASE_URL` | Neon direct connection string |
   | `APP_SECRET` | random string, e.g. output of `openssl rand -hex 32` |

4. Deploy. The build runs the database migrations; first build takes a few
   minutes. You get `https://<name>.vercel.app`.
5. Optional: attach a custom domain such as `umami.yourdomain.com` under the
   project's **Domains**. Use whichever URL you keep as the base URL below.

## 3. First login and setup

1. Open the deployment and log in with **admin / umami**.
2. **Settings → Profile → Change password** right away.
3. **Settings → Websites → Add website**: name `Pukakiii`, domain
   `pukaki.vercel.app` (or your custom domain). Copy the **Website ID**.
4. **Settings → API keys → Create**: copy the key. This is what the Insights
   panel uses to read stats.

## 4. Configure the portfolio

Add these to `.env.local` and to the portfolio's Vercel project
(**Settings → Environment Variables**), then redeploy:

```bash
NEXT_PUBLIC_UMAMI_URL=https://<your-umami>.vercel.app
NEXT_PUBLIC_UMAMI_WEBSITE_ID=<website id>
UMAMI_API_KEY=<api key>
```

If your Umami build predates API keys, use `UMAMI_USERNAME` + `UMAMI_PASSWORD`
instead of `UMAMI_API_KEY`.

Page views and custom events start flowing on the next load. The Insights
panel is cached for an hour and charts the last 30 days; the full history is
in the Umami dashboard.

## Keeping it updated

On GitHub open your fork and click **Sync fork** whenever you want the latest
Umami. Vercel redeploys automatically and migrations run during the build.

## Notes

- Neon's free compute pauses after inactivity; the first request after a
  pause takes about a second. Harmless for analytics.
- Everything degrades gracefully: with the variables unset, tracking is a
  no-op and the Insights panel shows a placeholder.
- Ad blockers may block `script.js` from a third-party host. If that matters
  later, proxy it through the portfolio with a rewrite in `next.config.ts`.
