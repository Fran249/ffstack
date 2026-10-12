# FFSTACK — Portfolio

Personal portfolio of Francisco Lopez (FFSTACK), freelance fullstack developer.

Static site built with Astro. Spanish at `/`, English under `/en/`.

## Stack

- **Astro 7** — static output, View Transitions, native i18n routing
- **Tailwind CSS v4** — via the Vite plugin
- **Zero runtime JS dependencies** — animations and interactions are dependency-free

## Development

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # preview the production build
```

## Structure

- `src/pages/` — Spanish routes (`/`, `/hire-me`, `/hire-me/<slug>`); `src/pages/en/` holds the English equivalents
- `src/i18n/` — hand-authored dictionaries (`ui.ts`) and experience content (`content.ts`), both locales
- `src/components/` — home sections, experience gallery, project detail, header/footer
- `public/projects/<prefix>-<n>.webp` — project screenshots, numbered from 1 (the first one is the `/hire-me` gallery thumbnail); prefixes and counts live in `src/utils/media.ts`
- `odd/tasks/` — feature working documents (specs, tasks, verification log)

## Deploy

Configured for Vercel (`ffstack.vercel.app`): `vercel.json` enforces trailing-slash URLs, and `site` in `astro.config.mjs` drives the sitemap, canonical URLs, and absolute Open Graph images. Build with `npm run build` and serve `dist/`.