# ANULA

The website for ANULA — a visual production and creative studio working across
film, weddings, corporate content, commercial work, social media and
photography.

React + Vite, plain JavaScript, plain CSS. No TypeScript, no CSS framework.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # -> dist/
npm run preview    # serve the production build
```

---

## Architecture

```
src/
  assets/
    brand/         anula-logo.svg, -white.svg, -black.svg
    fonts/         Inter + Cormorant Garamond (woff2, self-hosted)
  components/      one folder per component: Component.jsx + Component.css
  pages/           one file per route + its stylesheet
  data/            all site content
  styles/          design tokens, typography, global base
  App.jsx          routes, scroll management, page transition
  main.jsx         entry — mounts the router

public/
  media/           photography and film, by category (see media/README.md)
  favicon.svg
```

### Three layers, in order of how often they change

**1. `src/data` — content.** Nothing in `components/` or `pages/` hard-codes a
project title, an image path or a credit. Adding a project means appending an
object to `projects.js`; it appears on Home, in the Work archive, under its
category filter, and at its own `/work/<slug>` URL with no code change.

| File | Holds |
| --- | --- |
| `projects.js` | The project archive, the category list, and the selectors used to query it (`getProjectBySlug`, `getProjectsByCategory`, `getFeaturedProject`, `getNextProject`). |
| `services.js` | The six disciplines, in display order. The `01`–`06` numbering is derived from the index. |
| `site.js` | Studio details, navigation, socials, the studio statement, and the about / collage / contact / team imagery. |

**2. `src/styles` — the design system.**

| File | Holds |
| --- | --- |
| `variables.css` | Every token: the ANULA palette, a fluid `clamp()` type scale, spacing, layout widths, easing curves and durations. Change the site's feel here. |
| `typography.css` | The house voice — `.display`, `.serif`, `.eyebrow`, `.meta`, `.lead`. Headlines pair upright sans with italic serif. |
| `fonts.css` | Generated `@font-face` rules for the self-hosted faces. |
| `global.css` | Reset, layout primitives (`.container`, `.section`, `.grid-12`), link styles, the reveal classes, the grain layer, and the reduced-motion rules. |

**3. `src/components` — behaviour.** Each component owns its markup and its
stylesheet and takes content as props.

| Component | Role |
| --- | --- |
| `Header` | Fixed bar; gains a ground once scrolled. Fullscreen menu below 860px. |
| `Footer` | Closing band and the oversized signature wordmark. |
| `Hero` | 100svh opening frame: ambient film, wordmark, scroll cue, scroll-linked drift. |
| `SectionTitle` | The mixed sans/italic-serif headline — `<SectionTitle serif="Selected" sans="Work" />`. |
| `ProjectGrid` | The editorial grid. Owns the composition: column spans, image ratios and vertical offsets come from a repeating rhythm here, not from the data. |
| `ProjectCard` | One project — still, title, category, year, with the hover push-in and title swap. |
| `ImageReveal` | A framed still that wipes open and settles out of an over-scale. Reserves its ratio before load; falls back to a tonal block if a file is missing. |
| `VideoPlayer` | `ambient` (muted, looping, decorative) or `feature` (poster, then controls with sound). Degrades to the poster if the source is absent. |
| `Services` | The numbered rows, plus the cursor-following still on pointer devices. |
| `Reveal` | The `IntersectionObserver` primitive every entrance animation runs through (`useReveal.js`). |

### Routes

| Path | Page |
| --- | --- |
| `/` | Home — eight sections, hero through contact. |
| `/work` | The archive. The active filter lives in the URL (`/work?category=wedding`) so filtered views are linkable. |
| `/work/:slug` | A project. Renders from its record: the film block only appears when there is footage. |
| `/about` | The studio — approach, disciplines, collage, team. |
| `/contact` | Contact. No form: every route resolves to an address the studio already reads. |
| `*` | Not found. Also rendered for an unknown project slug. |

`App.jsx` also handles scroll: a plain navigation jumps to the top, a hash
navigation waits for the new page to mount and then eases to the section.

---

## Motion

CSS transitions driven by a single `IntersectionObserver` hook. Elements reveal
once and stay revealed. The vocabulary is small on purpose — fade-up, image
wipe, slow scale, line mask, page fade — and the durations are long
(560ms–1600ms) so the site reads as unhurried rather than animated.

Scroll-linked effects (the hero drift, the Services preview) only ever write
`transform` and `opacity`, throttled to an animation frame.

Everything collapses under `prefers-reduced-motion: reduce`.

GSAP can be layered on later without unpicking any of this; the reveal
primitive is one hook in `components/Reveal/useReveal.js`.

---

## Media

Images below the fold are lazy-loaded; pass `priority` to `ImageReveal` for
anything in the first viewport. Decorative video is always `muted`, `loop`,
`playsInline` and carries a poster — nothing autoplays with sound.

The `.svg` files currently under `public/media/` are generated placeholders
standing in for photography. See [`public/media/README.md`](public/media/README.md)
for the folder map and how to swap in real material.

---

## Fonts

Inter and Cormorant Garamond are served from the bundle rather than from Google
Fonts: one less render-blocking origin, and identical rendering offline. Only
the `latin` and `latin-ext` subsets are included, and `unicode-range` means a
browser fetches `latin-ext` only if the page actually uses a character from it.

---

## The logo

`src/assets/brand/anula-logo.svg` is the wordmark as outlines — traced from the
brand artwork, so it needs no font to render. Three variants:

| File | Use |
| --- | --- |
| `anula-logo.svg` | `fill="currentColor"` — inherits the colour of its context. |
| `anula-logo-white.svg` | `#F4F4F0` — on the black ground. Used in the header, hero and footer. |
| `anula-logo-black.svg` | `#050505` — for light surfaces and print. |
