# Experience image cards + per-project detail pages

**Objective**: Replace the colored info-panels in the hire-me experience gallery with image cards (project image behind, title on top), and move the detail content (description, bullets, stack, period, role) into a dedicated per-project page linked from the card.

**Branch**: N/A — not a git repo.

**Delivery**: N/A (no git). Authored-lines forecast was over 400; the pre-existing half-built structure was completed and extended instead of rebuilt.

**Test runner**: none installed. Proportional checks: `npm run build` + built-HTML assertions + CDP geometry probe for the sticky scroll.

---

## Specs

### S1 — Gallery cards become image cards
`ExperienceGallery.astro` (the horizontal "muestra" on hire-me) drops the cycled colored panels, the white period/role box, and the inline title/stack/bullets.

- Each card = project image behind (`<img>` cover, lazy), a bottom-up gradient for legibility, eyebrow `Experiencia / 0N`, company name as the title, and a subtle hover zoom + arrow (both disabled under reduced motion).
- The whole card is an `<a>` to the project's detail page, locale-aware.
- The sticky horizontal scroll (travel measured at runtime) keeps working; mobile/reduced-motion keep the vertical stack fallback.
- No inline detail content remains in the gallery.

**Acceptance**: built `/hire-me/` contains one `<img src="/projects/…` per experience, zero `bg-accent`/`bg-sky`/`bg-page` panel classes, no role/bullets/stack text, and one link per card to `/hire-me/<slug>/` (es) or `/en/hire-me/<slug>/` (en). CDP: wrapper height = travel + viewport, track translates as the wrapper scrolls, 4:3 cards.

### S2 — Per-project detail pages, in both locales
Routes `/hire-me/<slug>` (es, at root) and `/en/hire-me/<slug>` (en). Slugs derived with `slugify(company)` — one source, es/en cannot drift.

- `projectStaticPaths()` (`src/utils/projects.ts`, pre-existing) pairs es and en experiences by slug and passes both to each page; the shared `ProjectDetail.astro` component picks the locale's copy from `Astro.currentLocale`. The two route files are thin wrappers.
- Layout: dark chrome (`Layout`, `SiteHeader active="hire"`, `AboutCta`, `SiteFooter`); back link to `hire-me` (locale-aware); hero with eyebrow + company h1 + `period · role` + cover image (same `transition:name` as the card → the browser morphs card→hero image); `El proyecto` description; `Trabajo realizado` bullets (accent dots); stack chips.
- Page `<title>` = `company · role`; meta description = the project description. hreflang trio and per-locale `lang` come from `Layout`.

**Acceptance**: build emits 12 detail pages (`dist/hire-me/<slug>/index.html` + `dist/en/hire-me/<slug>/index.html`); each shows the locale's content, a locale-correct back link, and a language switch that preserves the slug (`/hire-me/kic-market/` ↔ `/en/hire-me/kic-market/`).

### S3 — Cover images: local placeholders, one swap point
`projectCover(slug)` (`src/utils/cover.ts`, pre-existing single swap point) now returns `/projects/<slug>.svg` instead of picsum.photos.

- 6 SVG placeholders in `public/projects/` (site palette cycled: accent/sky/page + project name + faint index numeral).
- Swap contract: drop a real screenshot over the path (or edit `cover.ts`); zero component changes. The same URL on both morph ends keeps the view transition on one element.

**Acceptance**: all 6 SVGs resolve in `dist/projects/`; card and detail `<img>` share the same `src` and `transition:name`.

### S4 — Content and i18n
- Each experience gains `description` in `content.ts` (es + en), shown on the detail page.
- The pre-existing `project.*` dictionary keys (`ui.ts`) were es-only → **en dict was missing them, so the build was broken before this work**. Completed the en values; page uses `project.back`, `project.coverAltPrefix`, `project.overviewLabel`, `project.workLabel` (+ existing `experience.label`/`profile.stackLabel`/`about.*`).
- No hardcoded user-facing literal outside `src/i18n/` (the old `[slug].astro` had hardcoded es: "Stack técnico", "Resumen", "Empresa", "Tecnologías"… and the CTA linked to unprefixed `/#contact` — all removed).

**Acceptance**: `en` dict complete (compiler-enforced); grep shows no English literal in changed components.

---

## Tasks

| ID | Spec | Route | Status | Evidence |
|----|------|-------|--------|----------|
| T1 | S4 | inline | ✅ done | `content.ts` +`description` ×12 (es/en); en project keys completed; old hardcoded literals gone |
| T2 | S1 | inline | ✅ done | `ExperienceGallery.astro` rewritten: image card + link, scroll script unchanged |
| T3 | S2 | inline | ✅ done | `ProjectDetail.astro` + two thin route files (`hire-me/[slug]`, `en/hire-me/[slug]`); `projects.ts` reused |
| T4 | S3 | inline | ✅ done | `cover.ts` → `/projects/<slug>.svg`; 6 SVGs in `public/projects/` |
| T5 | all | inline | ✅ done | build → 16 pages; HTML assertions; CDP probe (es/en desktop + mobile) |

Route note: all inline — the shared dictionary and util layer already existed; no Writer trigger reason (no independent parallel units, no context backstop).

---

## Log

**L1** (2026-10-09, user request, verbatim): "bueno, necesito que quites las cards de colores en la muestra de los proyectos , y pongas una imagen detras con el titulo, la descripcion y demas va a ir en la page al ingresar a la card que muestra el proyecto. Se entiende?"

**L2** — Interpretation confirmed: "muestra de los proyectos" = `ExperienceGallery` (sticky horizontal gallery on hire-me). Cards become image+title links; detail (description, bullets, stack, period, role) moves to the per-project page; "título" = the company/project name on the card.

**L3** (2026-10-09, discovery) — The feature was **half-built in an earlier session and never finished**: `src/pages/hire-me/[slug].astro` (es-only, hardcoded Spanish literals), `src/utils/{projects,slug,cover}.ts`, es-only `project.*` dict keys (`en` was missing them → TypeScript build was broken before this work), gallery cards with a picsum image + `/hire-me/<slug>` link on top of the colored panels, and `transition:name` morph wiring. Initial plan (new `/proyectos/` route base + explicit `slug`/`image` fields in `content.ts`) was **abandoned in favor of the pre-existing architecture** to avoid two sources of truth; my just-added `slug`/`image` fields were reverted, only `description` was kept.

**L4** — Route scheme: `/hire-me/<slug>` (es) + `/en/hire-me/<slug>` (en), same base in both locales — no translatable segment, no per-locale path map needed.

**L5** — Detail page rebuilt as the shared `ProjectDetail.astro` (locale resolved from `Astro.currentLocale`) + two thin route files, reusing `projectStaticPaths()`; the old page's redundant aside (duplicate stack/period/role) and hand-rolled CTA were dropped in favor of clean sections + `AboutCta`.

**L6** — Images: picsum.photos (external, flaky, no swap contract) → local `/projects/<slug>.svg` through the existing single swap point `projectCover()`. Prices: zero component coupling; the swap contract is "replace the file or edit one function".

**L7** (verification) — `npm run build` → 16 pages (all 12 detail routes in both locales). HTML assertions: 6 `/projects/*.svg` imgs + 6 `/hire-me/<slug>/` links per gallery; 0 panel classes; 0 inline role text; detail pages carry description, labels, back link, `view-transition-name` scope; the 6 gallery scopes + detail scope confirm the image morph; `lang` correct on both; en detail switch↔ hreflang preserve the slug. CDP probe (reused headless-Chrome pattern, `%TEMP%\opencode\gallery-probe.mjs`): desktop 1280×800 → 6 cards 672×504 (4:3), sticky = viewport, travel 3128px, wrapper = travel+viewport, track translates while scrolling (`translateX(-1170px)` mid-scroll; site smooth-scrolling explains the partial progress); mobile 390×800 → `h-scroll-static` fallback, cards stacked 342×256.5, no travel; SVG images load (`complete && naturalWidth>0`).

**Evidence**: ✅ (L7).