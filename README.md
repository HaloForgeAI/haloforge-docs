# HaloForge Docs

Official documentation site for HaloForge.

- Production: https://docs.haloforge.link
- Framework: Astro Starlight
- Deployment target: Cloudflare Pages

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run check
npm run build
```

## Deploy

Cloudflare Pages build settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22.12.0` or newer

Manual deployment:

```bash
npx wrangler pages deploy dist --project-name haloforge-docs
```
