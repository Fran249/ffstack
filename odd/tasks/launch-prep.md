# Launch prep — problems bridge, FFS favicon, FFSTACK title + SEO

**Objective**: (1) close the home "¿En qué punto estás?" section with a reassurance line + down-arrow that hands the reader to the process below (so they understand how we work before seeing the case/example cards); (2) design an "FFS" SVG favicon and use it; (3) retitle the site to FFSTACK and add the SEO metadata; (4) prepare the site for deployment.

**Branch**: N/A — not a git repo.

**Delivery**: N/A (no git). Static output (`dist/`) ready to upload; sitemap/canonical need a `site` URL which is still unset.

**Test runner**: none. Proportional checks: `npm run build` + built-HTML assertions + a headless-Chrome render for the OG image.

---

## Specs

### S1 — Home "¿En qué punto estás?" bridge line
`HomeProblems.astro` (home, section right after the hero) asks the visitor's stage with 3 pain→solution cards. Below the cards, add the reassurance line quoting the user's intent — **"No importa cuál, para todas hay una solución"** (es) / equivalent in en — with a **down-arrow icon at the end** signalling that the solution sits below.

- The whole line is a link to the process section (`#process`), which gets the matching `id`.
- New dictionary key `home.problemsBridge` (es + en); arrow is an inline SVG (`aria-hidden`), accent, disabled motion not applicable (static).
- Reading order stays: problems → process (cómo trabajamos juntos) → services/case-study cards.

**Acceptance**: built `/` and `/en/` show the bridge text below the cards, containing the arrow SVG, linking to `#process`; HomeProcess carries `id="process"`.

### S2 — "FFS" favicon
Replace the default Astro flame `public/favicon.svg` with an "FFS" mark on the site palette (night square, accent letters).

- Keep the SVG favicon link in `Layout.astro`; drop the stale default `.ico` link and remove `public/favicon.ico`.

**Acceptance**: `dist/favicon.svg` is the FFS mark; no `favicon.ico` reference remains.

### S3 — Title "FFSTACK" and per-page descriptions
- `site.title` → brand-first with a short descriptor: es `FFSTACK — Desarrollo Fullstack Freelance`, en `FFSTACK — Freelance Fullstack Development`.
- `hire.pageTitle` → `FFSTACK — Contratame` / `FFSTACK — Hire me`.
- Project detail `<title>` → `${company} — ${role} · FFSTACK` (brand via a new `brand.name` key, no literal outside i18n).
- `site.description` + `hire.pageDescription` rewritten as SEO descriptions; per-page `description` already flows through `Layout` props.

**Acceptance**: built pages carry the FFSTACK-led titles and a non-empty, locale-correct meta description.

### S4 — Head SEO + deploy prep
`Layout.astro` head gains: `theme-color`, Open Graph (`og:type`, `og:site_name`, `og:title`, `og:description`, `og:locale`, `og:image`), and Twitter card (`summary_large_image`).

- New `public/og.png` (es) + `public/og-en.png` (en), both 1200×630, rendered from locally authored OG SVGs via headless Chrome.
- New `public/robots.txt` (`Allow: /` + `Sitemap:` line).
- New `.gitignore` (node_modules, dist, .astro, logs, env) so the upload stays clean.

**Acceptance**: built head has the OG + Twitter + theme-color tags; `dist/og.png`, `dist/og-en.png` and `dist/robots.txt` exist; `.gitignore` present; build green.

### S5 — Domain wiring (`ffstack.vercel.app`)
The deploy origin is `https://ffstack.vercel.app` (Vercel-generated domain).

- `astro.config.mjs`: `site` set; `trailingSlash: "always"` (the directory build format and the locale URLs already use trailing slashes); `@astrojs/sitemap` integration with `i18n` locales (`es-ES` / `en-US`).
- `Layout.astro`: `<link rel="canonical">`, `og:url`, and absolute `og:image` / `twitter:image` built from `Astro.site`.
- `public/robots.txt`: `Sitemap: https://ffstack.vercel.app/sitemap-index.xml`.
- `vercel.json`: `trailingSlash: true` so the served URL matches the trailing-slash canonical (avoids a redirect → canonical mismatch).

**Acceptance**: `dist/sitemap-index.xml` + `sitemap-0.xml` with all 16 URLs and hreflang alternates; absolute canonical + OG URLs per page; every route serves 200 from a static preview.

---

## Tasks

| ID | Spec | Route | Status | Evidence |
|----|------|-------|--------|----------|
| T1 | S1 | inline | ✅ done | `ui.ts` `home.problemsBridge` (es/en) + `HomeProblems` bridge link (`#process`, arrow SVG) + `HomeProcess` `id="process"` — HTML assertion pass |
| T2 | S2 | inline | ✅ done | `public/favicon.svg` = FFS mark; Layout `.ico` link removed; `favicon.ico` deleted (verified absent in `dist/`) |
| T3 | S3 | inline | ✅ done | `ui.ts` titles/descriptions + `brand.name`; `ProjectDetail` title suffix — assertions pass |
| T4 | S4 | inline | ✅ done | Layout OG/theme-color/Twitter; `og.png`+`og-en.png` (1200×630) + `robots.txt`; `.gitignore` |
| T5 | all | inline | ✅ done | build 16 pages green; 26 HTML assertions pass |
| T6 | S5 | inline | ✅ done | `site` + sitemap + canonical/absolute OG + `vercel.json`; 13 assertions + preview smoke (13 routes 200) |

Route note: all inline — focused edits across a handful of files, no Writer trigger reason.

---

## Log

**L1** (2026-10-11, user request, verbatim): "Ahora, debajo de las cards en \"En que punto estas? \" luego de preguntarle visualmente al cliente en que etapa se encuentra , hay que indicarle \"No importa cual , para todas hay una solucion\" o algo asi en un texto debajo, con una flecha como icono al final , indicando que debajo de eso estaria la solucion , para que asi al leer como trabajamos juntos entienda primero como trabajamos y luego que vea las cards de los ejemplos. Por ultimo, diseña un svg que tenga las letras \"FFS\" para el favicon, y utilizalo, cambia el titulo de la pagina a \"FFSTACK\" y agrega descripciones correspondientes para el SEO y demas ,prepara toda la web para subirla."

**L2** — "¿En qué punto estás?" = `HomeProblems` (home). The bridge goes below its 3 cards, with the arrow pointing to the sections below (`HomeProcess` "Cómo trabajamos juntos" → `HomeServices` case-study cards). No section reordering needed: that order already holds.

**L3** — Title decision: brand-first "FFSTACK — …" instead of a bare "FFSTACK", to keep SEO value while honoring the request; easy to trim.

**L4** — `site` is unset → no sitemap/canonical/absolute OG yet; og:image stays relative (resolves after deploy). Everything else does not need the domain.

**L5** — Pre-existing assets: default Astro `favicon.svg`/`.ico` were still the template's flame icon; `HomeServices` already links to `hire-me/<caseStudy>` (kic-market, lagom-philosophy, rentive-capital — all valid detail slugs). No dev leftover (localhost/port/TODO) found in `src`.

**Evidence**: T5 — `npm run build` → 16 pages, green. 26 built-HTML assertions pass:
- es home `<title>FFSTACK — Desarrollo Fullstack Freelance</title>`, non-empty meta description, `og:site_name=FFSTACK`, `og:image=/og.png`, `og:locale=es_ES`, twitter summary_large_image, `theme-color=#131313`, only the SVG favicon link (no `.ico`).
- es home bridge: text "No importa cuál, para todas hay una solución", `href="#process"`, arrow path `m6 13 6 6 6-6`, `<section id="process">`.
- en home `<title>FFSTACK — Freelance Fullstack Development</title>`, `og:locale=en_US`, `og:image=/og-en.png`, bridge text present, `id="process"` present.
- hire `<title>FFSTACK — Contratame</title>`; project detail title contains FFSTACK + non-empty description.
- `dist/`: `favicon.svg` has `>FFS</text>`, no `favicon.ico`, `robots.txt`, `og.png`+`og-en.png` (1200×630 verified), 6 project SVGs.

**L6** — OG cards are per-locale (`/og.png` es-ES, `/og-en.png` en-US), rendered from hand-authored SVGs at `%TEMP%\opencode\og-*.svg` via Chrome headless (`--window-size=1200,630 --screenshot`); `Layout` picks by `locale`. Referenced relatively so they resolve once a domain exists.

**L7** — `favicon.ico` was the create-astro default flame; deleted and its `<link>` removed (SVG favicon only). `textLength` on the FFS text guarantees fit regardless of font substitution.

**L8** (2026-10-11, user): "solo voy a usar el dominio que te da vercel , quedaria ffstack.vercel.app" → wired `site`, `@astrojs/sitemap` (i18n es-ES/en-US), canonical + absolute `og:image`/`og:url`, robots `Sitemap:` line, `trailingSlash: "always"` + `vercel.json` `trailingSlash: true`.

**Evidence (T6)**: build green (16 pages) + `sitemap-index.xml created`. 13 assertions pass: sitemap has 16 `<loc>` + hreflang alternates; index points to `sitemap-0.xml`; canonical/og:url/og:image absolute and locale-correct on `/`, `/en/`, project pages; robots has the sitemap line; internal `/hire-me/` links keep the slash. Preview smoke (`astro preview` :4331): 13 routes 200 with correct content-types; served canonical/title/og:image verified on `/`, `/hire-me/`, `/en/`. Note: `/hire-me` (no slash) 404s in `astro preview`; `vercel.json` `trailingSlash: true` makes Vercel redirect to the canonical slash form.

**Next**: user review; then upload (connect the repo to Vercel — build `npm run build`, output `dist/`).