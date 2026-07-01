# Igor Pukalski — Creative Resume

Lightweight single-page resume + portfolio gallery for creative and multimedia work.

## Stack

- Next.js 15 · React 19 · Tailwind CSS v4
- Deploy branch: **`creative-resume`**

## Development

```bash
pnpm install
pnpm dev
```

## Vercel deploy (fix DEPLOYMENT_NOT_FOUND)

If `pukakiii.vercel.app` shows **DEPLOYMENT_NOT_FOUND**, production has no successful build to serve.

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → your **Pukakiii** project
2. **Settings → Git → Production Branch** → set to **`creative-resume`**
   - `main` is an incomplete auto-ship scaffold and **does not build**
3. **Settings → General → Root Directory** → leave empty (repo root)
4. **Framework**: Next.js · **Build**: `pnpm build` · **Install**: `pnpm install`
5. **Deployments → Redeploy** the latest `creative-resume` commit

After a green deployment, assign `pukakiii.vercel.app` to that deployment (automatic when production branch is set).

Preview URL pattern: `pukakiii-git-creative-resume-<team>.vercel.app`

## Branch

This branch is separate from `main` (dev portfolio auto-ship). Content synced from local `resume collection/` into `src/data/`.
