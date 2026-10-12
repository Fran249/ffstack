# Project carousel and real project media

Astro portfolio (es/en). Branch: `main`. Delivery: `ask-on-risk`. Runner: `npm run build` (no lint/typecheck script is configured in `package.json`).

## Specs

- **S1 — Real screenshots as thumbnails.** The `/hire-me` gallery cards use each project's first screenshot (`public/projects/<prefix>-1.webp`) as their thumbnail. Today `projectCover()` returns `/projects/<slug>.svg` and those `.svg` files were deleted when the `.webp` set landed, so every gallery card and detail hero currently renders a broken image.
- **S2 — Single media manifest.** Image prefix and count live in one module keyed by project slug: `kic-market` → `kic` ×6, `levelup` → `levelup` ×6, `lagom-philosophy` → `lagom` ×5, `rentive-capital` → `rentive` ×4, `cxp-resources` → `cxp` ×4, `hugo-prieto-portfolio` → `hugo` ×3. An unknown or empty slug throws at build time instead of shipping a 404 image.
- **S3 — Reusable carousel.** `src/components/ProjectCarousel.astro` renders a project's images on `/hire-me/<slug>` (es) and `/en/hire-me/<slug>` (en). Props: `slug`, `label`, `images`.
- **S4 — Clear navigation.** Previous/next buttons (disabled at the ends), a numeric counter (`01 / 06`) and a thumbnail strip that jumps to any image. The active thumbnail carries `aria-current`.
- **S5 — Keyboard and touch.** Arrow keys (plus `Home`/`End`) navigate whenever focus is inside the carousel; a horizontal swipe navigates on touch while vertical page scroll keeps working (`touch-action: pan-y`).
- **S6 — Responsive and on-brand.** Every screenshot is ~1896×860 (**≈11:5**, not 16:9), so the frame uses `aspect-[11/5]` with `object-cover` instead of the previous `aspect-video`, which would crop ~19% of the width. Dark surface, `rounded-xl`, accent hover, existing type scale; works desktop / laptop / mobile.
- **S7 — View Transitions preserved.** The carousel frame keeps `transition:name="project-<slug>-image"`, the same name as the gallery card image, so the card still morphs into the detail media and back. Controls are siblings of the named element so only the image box animates. `prefers-reduced-motion` disables the track transition.
- **S8 — Quality gate.** `npm run build` succeeds; all 28 image URLs resolve in `dist/projects/`; no reference to `src/utils/cover.ts` or `.svg` covers remains; idempotent script re-init verified. Lint reported honestly as unavailable (no script exists).

## Tasks

- [x] T1 — Feature document (inline). S1–S8.
- [x] T2 — `src/utils/media.ts` (new) + delete `src/utils/cover.ts` + repoint importers. S1, S2.
- [x] T3 — `src/components/ProjectCarousel.astro` (new). S3–S7.
- [x] T4 — `ProjectDetail.astro` hero → carousel. S3, S7.
- [x] T5 — `src/i18n/ui.ts` carousel keys (es + en). S4, S5.
- [x] T6 — `README.md` media reference. S2.
- [x] T7 — Build + assertions + route/link edge-case check. S8.

All seven tasks ran **inline** (no writer trigger: one coherent feature, no parallelism, no context pressure).

## Log

**L1 — User request (verbatim).**

> ## Reparto de responsabilidades
>
> - **Coordinación e integración:** identifica los archivos y componentes pertinentes, asigna tareas, integra los cambios y verifica las rutas.
> - **Proyectos e imágenes:** conecta las imágenes existentes con sus proyectos y actualiza las miniaturas de `/hire-me`.
> - **Interfaz y navegación:** implementa el carrusel responsive y su navegación, respetando el diseño existente.
> - **Calidad:** revisa accesibilidad y comportamiento responsive, y ejecuta las comprobaciones indicadas al final.
>
> ## Imágenes
>
> Las imágenes están en `public/projects/`, tienen extensión `.webp` y corresponden a estos proyectos: Levelup `levelup-1..6`, KIC Market `kic-1..6`, Lagom `lagom-1..5`, Rentive Capital `rentive-1..4`, Hugo Portfolio `hugo-1..3`, CXP Resources `cxp-1..4`. Utiliza la imagen número 1 de cada proyecto como su miniatura en la sección de proyectos de `/hire-me`.
>
> ## Carrusel y navegación
>
> Crea un carrusel reutilizable para las páginas de proyecto bajo `/hire-me/:proyecto`, con las imágenes correspondientes a cada proyecto. Permite navegar entre imágenes de forma clara e intuitiva, con controles adecuados para teclado y dispositivos táctiles. Optimiza la presentación para desktop, laptop y mobile, siguiendo la estética y los patrones UI/UX ya planteados en el sitio. Al seleccionar una miniatura en `/hire-me`, dirige al carrusel del proyecto correspondiente. Conserva, siempre que sea posible, las animaciones existentes de View Transitions, incluidas las asociadas mediante IDs. Comprueba estados límite, enlaces y rutas para evitar imágenes rotas o destinos inexistentes.
>
> ## Validación y entrega
>
> Ejecuta lint y build, corrige los errores relacionados con estos cambios y comunica los resultados, incluidos los bloqueos si los hubiera. Resume los archivos y funcionalidades modificados. **Al terminar, detente y espera mi confirmación. No hagas commit ni push hasta recibir autorización explícita.**

**L2 — Evidence: the SVGs are gone.** `glob public/projects/**` returns 28 `.webp` files and **zero** `.svg`. `projectCover()` (`src/utils/cover.ts`) still returns `/projects/<slug>.svg`, so the gallery cards and the detail heroes are broken right now. This is the underlying bug the media work fixes. Historical note: `odd/tasks/experience-detail-pages.md` still describes the old `.svg` placeholders; it is a record of that feature and is left untouched.

**L3 — Evidence: real dimensions.** Decoded the WebP headers directly (Windows' codec cannot read WebP; Node RIFF/VP8X/VP8L parse used instead). All 28 images are ~1890–1917 × 850–865 → **ratio 2.19–2.24, i.e. ≈11:5**, not 16:9. Consequence: the previous `aspect-video` frame with `object-cover` would crop ~19% of the width of every screenshot, so the carousel frame is `aspect-[11/5]` (crop < 1%).

**L4 — Decision: `transition:name` on the frame, not on a slide.** A shared-element morph needs one stable element on each page. Putting the name on the first slide would, on back-navigation from a later slide, animate from that slide's off-screen position. Putting it on the frame (which contains only the image track; buttons/counter/counter are siblings) gives a stable position from any slide and animates only the image box.

**L5 — Decision: clamp, not loop.** Previous/next disable at the ends rather than wrapping; the thumbnail strip already gives free jumps, so position stays unambiguous.

**L6 — Out of scope (open decision).** Status badge (`Producción`/`Beta`) and an external "Ver el sitio" link on the detail page were offered earlier and are **not** part of this request; not implemented.

**L7 — Build + static verification (T7, S8).** `npm run build` → 16 pages, no warnings. A Node pass over `dist/` ran **319 assertions, all passing**: the 28 `.webp` artifacts exist and no `.svg` project cover remains; `/hire-me/` and `/en/hire-me/` each carry exactly 6 covers equal to each project's *first* screenshot, in order; each of the 12 detail pages carries one carousel with N slides, N thumbnails, prev/next, counter `01 / 0N`, exactly one `aria-current` thumbnail (index 0), N−1 slides `aria-hidden`, the 11:5 frame, `touch-pan-y`, localised labels per locale, the slide/thumbnail URLs in exact order, and `view-transition-name: project-<slug>-image`; the morph name matches between card and detail frame for all 6 slugs; Tailwind really compiled the `aria-[current=true]:` variant.
Two harness bugs surfaced and were fixed on the way (worth recording): the inlined `<script>` and Tailwind's inline `<style>` contain the very attribute literals being counted (`[data-carousel]`, `[data-thumb]`, `[aria-current="true"]`), so counting must exclude them; and the header's language switcher already uses `aria-current="true"`, so the thumbnail assertion had to be scoped to `data-thumb`.

**L8 — Real-browser behaviour (CDP / headless Chrome).** **77 assertions, all passing**, driving a real Chrome against `astro preview`: next/prev, thumbnail jump, clamping at both ends (buttons disable; clicking next on the last slide does not move), `Home`/`End`/arrow keys, horizontal swipe advancing and reversing while a vertical-dominant drag and a sub-threshold drag do **not** change slides, localised labels in both locales, the 3-image Hugo gallery (`03 / 03`), four viewport widths (1024×768, 768×1024, 390×844, 320×700 — frame inside the viewport, no horizontal page overflow, ratio 2.2, controls on-screen, strip reachable), `prefers-reduced-motion: reduce` removing the track transition while navigation still works, the view-transition names declared exactly once per page plus the emitted `::view-transition-old/new(...)` rules, and every image decoded with no failed subresource request.
Critically this verified **`track width == viewport width`**, the assumption the `translateX(-index * 100%)` math depends on.
Methodology note — the harness needed three fixes, each of which had silently produced empty evidence: `window.__c` is per-document and had to be re-armed after every navigation (missing it meant sections contributed 0 checks *and* the `process.exit(1)` on failures masked the stack trace); the preview server had to be confirmed listening before Chrome was pointed at it; and `/hire-me/` has no carousel, so it needs a plain navigation helper.

**L9 — Routes, encoding, and the lint gap.** Preview smoke: 9 routes (es/en home, gallery, four detail pages) return 200; `/projects/*.webp` serves `image/webp`; `/projects/kic.svg` → 404 and `/hire-me/does-not-exist/` → 404, so the old broken covers are genuinely gone and unknown routes fail closed. UTF-8 verified at byte level in the built HTML: `Captura 1 — Kic Market` / `Screenshot 1 — Kic Market` (em dash U+2014 intact), the `←`/`→` glyphs (U+2190/U+2192), `<meta charset="utf-8">`.
**Blocker / limitation — there is no lint.** `package.json` defines only `dev`, `build`, `preview`, `astro`; there is no ESLint/Prettier/Biome config and neither `typescript` nor `@astrojs/check` is installed. `astro check` prompts to install `@astrojs/check typescript` — that adds dependencies, so it was **not** run and nothing was installed (verified after the attempt). Substituted instead: `npm run build` plus the structural and behavioural assertion passes above. Installing `@astrojs/check` would add Astro's own template/a11y diagnostics and is the natural next step for a real lint gate — pending authorisation, since it changes `package.json`.

**L10 — Findings on the supplied artwork (no action taken).** The 28 screenshots are not pixel-uniform: kic-market alone spans six distinct native sizes (1896×865 … 1911×862), all within ratio 2.19–2.24. The `aspect-[11/5]` (2.2) frame therefore crops under 1% on every image, which is why 11:5 replaced the previous `aspect-video` (16:9) — that one would have cropped ~19% of the width, i.e. the sides of every screenshot. The `/hire-me` card itself is still `aspect-[4/3]` with `object-cover` as it was; on a 2.2:1 screenshot that crops roughly 39% of the width. Left untouched because the request was to swap the thumbnail image, not to redesign the card — flagging it in case that crop reads as too tight.

**L11 — Not committed.** Per the explicit instruction, nothing was committed or pushed: the working tree holds the user's own uncommitted `.webp` additions and `.svg` deletions plus this feature's changes.
