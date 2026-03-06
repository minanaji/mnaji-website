# MNAJI Portfolio

A Next.js portfolio site for [mnaji.com](https://www.mnaji.com).

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Requirements

- Node.js 18.17 or later (use `nvm use` if you have [nvm](https://github.com/nvm-sh/nvm); an `.nvmrc` file is included)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** If `npm install` fails with postinstall errors, try `npm install --ignore-scripts`. If `npm run dev` or `npm run build` fails, ensure you're using Node 18+ (e.g. `nvm install 18 && nvm use 18`).

## Build & Deploy

```bash
npm run build
npm start
```

### Vercel (recommended)

1. Push to GitHub and connect the repo at [vercel.com](https://vercel.com).
2. Add your custom domain `www.mnaji.com` in Vercel project settings.
3. Vercel will handle SSL and DNS.

### GitHub Pages (static export)

1. Add `output: 'export'` to `next.config.js`.
2. Run `npm run build` — output goes to `out/`.
3. Deploy the `out/` folder to the `gh-pages` branch or GitHub Pages source.
4. `public/CNAME` is included in the build for custom domain.

## Editing Content

Update [`data/content.ts`](data/content.ts) to change headlines, projects, contact info, and other copy without touching layout code.
