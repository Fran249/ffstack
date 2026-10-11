# Animation Overhaul — View Transitions + Button Animations + Scroll Effects

**Objective**: Add life to the portfolio with View Transitions between pages, button fill animations, scroll-triggered reveals, and a horizontal scroll gallery on hire-me.

**Branch**: main (no git repo yet — will commit work units on main)

**Delivery**: Single feature, multiple tasks, work-unit commits per task.

**Test runner**: `npm run build` + manual browser verification (`npm run dev`)

---

## Specs

### S1 — Buttons rectangular + right-to-left fill animation
All interactive buttons (`<a>` CTAs and `<button>`) become rectangular (no border-radius) and on hover the background color fills from right to left using `background-size` transition with `linear-gradient`.

- Remove all `rounded-md` / `rounded-lg` from button elements (keep rounded on cards/panels).
- Fill animation: `background-image: linear-gradient(...)` sized `0% 100%` → `100% 100%` on hover, anchored right.
- Each button keeps its **current color** as the fill color (accent, white, night).
- Transition duration ~300ms ease-out.
- Respect `prefers-reduced-motion`.

**Affected buttons:**
| Page | Button | Current bg |
|------|--------|-----------|
| Home (Hero) | "Start a project" | `bg-accent` (#cdf556) |
| Home (Hero) | "Explore my portfolio" | `bg-white` |
| Home (ContactForm) | "Send inquiry" | `bg-night` (#131313) |
| Hire-me (AboutCta) | "Let's build something" | `bg-accent` (#cdf556) |

**Acceptance**: Hover any button → color slides in from right edge to left. Release hover → slides out. Rectangular corners. No animation if `prefers-reduced-motion: reduce`.

---

### S2 — View Transitions home ↔ hire-me
Enable Astro's built-in View Transitions for navigation between `/` and `/hire-me`.

- `<ClientRouter />` (or `<ViewTransitions />`) in `Layout.astro` head.
- Page transition: fade (default is fine, or custom `transition:animate`).
- `transition:persist` on `SiteHeader` and `SiteFooter` so they don't flash between pages.
- Re-init scroll scripts after `astro:after-swap`.

**Acceptance**: Click "Explore my portfolio" → smooth transition to hire-me (no full white flash). Click "FFSTACK" logo or "Services" → smooth transition back to home.

---

### S3 — Home: Hero text typewriter animation
The headline "Build better. Launch sooner." runs a typewriter effect: types line 1, pauses, types line 2, holds ~2s, deletes line 2 backwards, deletes line 1, loops.

- Caret: blinking block `::after` on the active line.
- Typing speed ~55-100ms/char, extra pause after `.`; deletion ~30-55ms/char.
- **Fixed height** on h1 sized to the real wrapped line count per breakpoint: `h-[2.85em] md:h-[1.9em] lg:h-[2.85em]` (3 / 2 / 3 lines × leading 0.95, em-scaled). Measured with Chrome headless + real Inter Variable (weight 800, tracking -0.04em): "Launch sooner." = 371px @48px, 495px @64px, 557px @72px, vs available 327px (mobile) / 640px (md) / 448px (lg column) — wraps to 2 lines at base and lg.
- Full text is in the HTML (works without JS); script clears and types.
- `prefers-reduced-motion: reduce` → static full text, no caret.
- Re-runs via `astro:page-load` (View Transitions safe, run token cancels stale loops).

**Acceptance**: Load `/` → text types, holds, deletes, loops. h1 height never changes (nothing below shifts). With reduced motion → static text.

---

### S4 — Home: Hero card scroll reveal
The card next to the headline (the "From idea to interface" / `bg-sky` card) appears with a scroll-triggered fade-in.

- IntersectionObserver-based (zero deps).
- Fade + slight scale or translate-in.
- Once revealed, stays visible (`unobserve` after trigger).
- Respects `prefers-reduced-motion`.

**Acceptance**: Load `/` → card animates in when scrolled into view (or immediately if already in viewport on load). Stays after animation.

---

### S5 — Hire-me: Horizontal scroll gallery
From "folio/workspace" section start scrolling horizontally until reaching "03/Forma — a focused storefront".

- Sticky container: vertical scroll drives horizontal movement (classic `position: sticky` + `transform: translateX()` pattern).
- The 3 project cards (`ProjectList.astro`) laid out in a row.
- Scroll progress maps to horizontal translation from 0 to -(totalWidth - viewportWidth).
- Only activates on desktop (≥768px or ≥1024px). Stacks vertically on mobile.
- Respects `prefers-reduced-motion` (falls back to vertical stack).

**Acceptance**: On hire-me page, as you scroll down past "folio/workspace", cards move horizontally left→right until the 3rd card (Forma) is fully visible, then vertical scroll resumes.

---

## Tasks

| ID | Spec | Route | Status | Commit |
|----|------|-------|--------|--------|
| T1 | S1 | inline | ✅ done | — |
| T2 | S2 | inline | ✅ done | — |
| T3 | S3 | inline | ✅ done | — |
| T4 | S4 | inline | ✅ done | — |
| T5 | S5 | inline | ✅ done | — |

---

## Log

**L1** (user request, verbatim): "la idea es animar TODOS los botones , hacerlos rectangulares, y animar el color basicamente, que esten con el borde y se rellenen de derecha a izquierda con el color que tienen ahora mismo. Quiero meter view transitions para pasar tanto de home a hire-me como de hire-me a home. Al home por ahora solo quiero que se anime el texto principal Build better launch sooner , la card que esta al lado de este titulo con su descripcion tambien darle vida. hacerla desaparecer y aparecer con el scroll. en cuanto a hire-me , quisiera que al llegar a la parte que dice "folio/workspace" se empiece a scrollear en horizontal, hasta llegar a donde dice 03/forma- a focused storefront. Empieza sdd."

**L2** (2026-10-09, verbatim): "ahora si, solo detalles : los botones se rellenan hasta la mitad, en vez de por completo." — Fix: gradient stops 50/50 → 100/100 (background-size drives the animation, not background-position).

**L3** (2026-10-09, verbatim): "ahora quiero animacion de typewritting con borrado en el texto principal del hero ." — S3 rewritten: slide-up entrance replaced by looping typewriter with deletion.

**L4** (2026-10-09, verbatim): "Dale un espacio en concreto, porque esta cambiando la medida del div constantemente y afecta el flow view de la pagina." — Root cause measured (not guessed) via headless Chrome + real font: at base and lg the full text wraps to 3 lines while the `min-height` reserved only 2, so the h1 oscillated 2↔3 lines every cycle. Fix: fixed `height` per breakpoint matching real line count (`2.85em`/`1.9em`/`2.85em`), removed `min-height`.

**L5** (2026-10-09, verbatim): "al boton de send en el contacto, hay que agregarle que cuando se haga hover el texto cambie a blanco , porque si no se tapa." — Added `--fill-text` variable + hover/focus-visible color flip (gated behind `prefers-reduced-motion: no-preference` so no color change when the fill is disabled). Applied to "Send inquiry" (`#ffffff`) and the same pre-existing defect on hire-me's "Let's build something" (`#131313`, its text was `text-accent`, also self-covering).

**Evidence**: Windows `ClientAreaAnimation=0` (system animation effects OFF) was disabling all `prefers-reduced-motion` guarded animations during testing; user re-enabled. Horizontal scroll had `position: relative` bug, fixed to sticky pattern (wrapper height = travel + 100vh, sticky viewport, translateX by scroll progress).
