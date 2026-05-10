# Beaver Trap Outfitters — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.1 | UI framework |
| react-dom | ^19.1 | DOM rendering |
| react-router-dom | ^7.6 | SPA client-side routing (8 pages) |
| gsap | ^3.13 | Animation engine — timelines, scroll-triggered reveals, word-splitting |
| lenis | ^1.3 | Smooth scroll with inertia |
| tailwindcss | ^4.1 | Utility-first CSS |
| @tailwindcss/vite | ^4.1 | Tailwind Vite integration |
| vite | ^6.3 | Build tool |
| @vitejs/plugin-react | ^4.4 | React Vite plugin |

No shadcn/ui components — the design is fully custom editorial with no standard UI patterns (no dialogs, forms, tables, dropdowns, or accordions). The minimal select dropdowns in the contact form are styled with pure CSS.

## Component Inventory

### Layout (shared across all pages)

| Component | Source | Reuse | Notes |
|-----------|--------|-------|-------|
| Navigation | Custom | All 8 pages | Fixed top nav. Transparent → solid transition on scroll. Desktop links + mobile hamburger → fullscreen overlay. Active page link highlighted in amber. |
| Footer | Custom | All 8 pages | 3-column layout + bottom bar. Species links route to /hunts with anchor. |
| PageShell | Custom | All 8 pages | Wraps each page: scroll-to-top on route change, applies grain overlay, mounts Lenis instance. |

### Reusable Components

| Component | Source | Used By | Notes |
|-----------|--------|---------|-------|
| SectionEyebrow | Custom | ~12 sections | Eyebrow text: Cormorant small caps, amber, tracked 0.3em. Pure presentational. |
| AmberButton | Custom | ~8 locations | Two variants: "filled" (amber bg, dark text) and "ghost" (border only). Shared hover logic. |
| AmberTextLink | Custom | ~10 locations | Text link with arrow suffix, border-bottom reveal on hover. Optional router navigation. |
| TestimonialCard | Custom | Home (3×), Reviews (8×) | Left amber border, italic quote, small-caps attribution. No icons, no stars. |
| PhotoStrip | Custom | Home (5 imgs), HuntCamp (4 imgs) | Full-width image row. Desktop: fixed height, equal-width tiles. Mobile: horizontal scroll with snap. Configurable image count, height, and link target. |
| GrainOverlay | Custom | All pages | Inline SVG noise pattern at 4% opacity via pseudo-element. Global, no per-instance props needed. |
| SpeciesCard | Custom | Home (3×), Hunts (11×) | Full-bleed photo card with bottom gradient, species name (Bebas Neue), optional latin name/season/description. Hover: image scale + amber overlay + inquiry link reveal. |
| ScrollReveal | Custom | All sections | Wrapper component using GSAP + IntersectionObserver. Configurable stagger, direction (Y/X), duration. |
| HeroSection | Custom | All 8 pages | Configurable hero: optional background image, optional dark-only bg, eyebrow, headline (with word-by-word reveal), optional subline, optional CTAs. Height configurable (30vh–100vh). |

### Page Sections

**Home** (`/`)
- HomeHero — full 100vh with orchestrated load sequence (image fade → word reveal → staggered elements)
- HuntPreview — 3-column SpeciesCard grid (Elk, Mule Deer, Moose) + "See all" link
- FullyOutfitted — 50/50 two-column: editorial text left, inclusion list right
- RossSection — 55/45 two-column: bio + pull quote left, portrait photo right
- TestimonialsSection — 3-column TestimonialCard grid
- HomePhotoStrip — 5-image PhotoStrip linking to /photos
- FinalCTA — full-bleed image with dark overlay, centered booking CTA

**Hunts** (`/hunts`)
- HuntsHero — 55vh with elk field photo
- HuntsIntro — centered intro paragraph
- SpeciesGrid — 3-column CSS grid of 11 SpeciesCards
- HuntsCTA — amber background strip with phone number

**Rates** (`/rates`)
- RatesHero — 40vh dark (no photo)
- RatesIntro — centered intro text
- RatesTable — clean list layout with hairline separators (not a `<table>` — flex rows)
- IncludedSection — two-column: included (amber dashes) / not-included (muted dashes)
- DepositNote — amber-left-bordered callout box
- RatesCTA — centered phone + inquiry button

**Hunt Camp** (`/hunt-camp`)
- CampHero — 55vh with camp photo
- CampDescription — 50/50: text left, stacked photos right
- CampDetails — 2×2 grid with eyebrow label + description per cell
- CampPhotoStrip — 4-image PhotoStrip
- CampCTA — single amber button

**Photos** (`/photos`)
- PhotosHero — 30vh dark
- MasonryGallery — CSS `column-count: 3` masonry with 15 images, hover caption overlay
- GalleryCaption — centered attribution line

**Reviews** (`/reviews`)
- ReviewsHero — 40vh dark
- ReviewsGrid — 2-column grid of 8 TestimonialCards
- ReviewCTA — "Review Us on Google" link

**Outfitter** (`/outfitter`)
- OutfitterHero — 60vh with mountain panorama
- BioSection — 60/40 split: long-form editorial copy with pull quotes left, stacked photos + credentials right
- PhilosophySection — full-width amber-bordered pull quote

**Contact** (`/contact`)
- ContactHero — 40vh dark
- ContactIntro — centered intro text
- ContactLayout — 55/45: form left (8 fields, all custom-styled), contact info right
- TrustStrip — 3-item horizontal row with hairline

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Hero load sequence (image → words → elements) | GSAP timeline | Single `gsap.timeline()` on mount: image opacity tween, then SplitText for word-by-word headline stagger, then sequential tweens for eyebrow/subline/CTAs/bottom elements. Total ~1.4s. | 🔒 High |
| Scroll-triggered reveals | GSAP ScrollTrigger | Reusable `ScrollReveal` wrapper. `gsap.from()` with ScrollTrigger (start: "top 90%"). Configurable stagger, translateY/X, opacity, duration (0.65s), easing (cubic-bezier approximated as `"power2.out"`). | Medium |
| Nav background transition | CSS + JS | Scroll listener (or ScrollTrigger) toggles class at 100vh. CSS `transition: background 0.3s` handles the visual change. | Low |
| Mobile menu open/close | GSAP | Hamburger click triggers timeline: overlay opacity 0→1 (0.3s), links stagger in from bottom (0.08s each). Close reverses. | Medium |
| Species card hover | CSS only | `transition: transform 0.5s ease-out` on inner image for scale(1.04). Amber overlay and inquiry link use `opacity` transition on hover. Card itself static. | Low |
| CTA button hover | CSS only | Filled: `background-color` + `transform: scale(1.02)` transition. Ghost: `box-shadow` expansion to simulate border grow. | Low |
| Photo strip entrance | GSAP ScrollTrigger | Images slide in from right with stagger. `translateX(30px)→0` + opacity. | Low |
| Pull quote entrances | GSAP ScrollTrigger | `translateX(-20px)→0` + opacity, longer duration (0.7s) for editorial feel. | Low |
| Gallery image stagger | GSAP ScrollTrigger | Individual ScrollTrigger per image, 0.05s stagger between nearest neighbors as they enter viewport. | Low |
| Form field stagger | GSAP ScrollTrigger | Fields stagger in 0.06s, `translateY(12px)→0` + opacity. | Low |
| Page transitions | GSAP | Fade out current page (0.2s), unmount, fade in new page (0.3s). Router change triggers animation sequence before DOM swap. | Medium |
| Smooth scroll | Lenis | Global Lenis instance in PageShell. Provides inertia scrolling across all pages. Integrates with GSAP ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`. | Low |

## State & Logic

### SPA Routing with Page Transitions

React Router handles 8 routes. A `PageShell` component wraps the router outlet and manages page transitions:
- On route change: trigger GSAP fade-out of current content → update route → scroll to top → trigger fade-in
- Navigation link click intercepts default behavior, runs exit animation, then commits route change
- Browser back/forward buttons handled with same transition pattern

### Nav Scroll State

Navigation tracks scroll position via ScrollTrigger or a throttled scroll listener:
- Below 100vh (hero height): transparent background
- Above 100vh: solid #080604 + amber bottom hairline
- Active route highlighted in amber via React Router's `useLocation`

### Mobile Menu State

Local state in Navigation component:
- `menuOpen` boolean toggles fullscreen overlay
- GSAP timeline controls open/close animation (not CSS transitions — need staggered link reveals)
- Body scroll lock when menu is open (via Lenis `.stop()` / `.start()`)
- Close on route change

### Contact Form

Fully controlled form with local state (no backend in scope):
- 8 fields: text, email, tel, select (5×), textarea
- Client-side validation: required fields, email format
- Submit displays a success message (no actual submission — demo site)
- All selects styled with CSS (no library) — `appearance: none` + custom amber arrow indicator

### Masonry Gallery

Pure CSS masonry — no JS library needed:
- Desktop: `column-count: 3`, `column-gap: 10px`
- Tablet (< 768px): `column-count: 2`
- Mobile (< 480px): `column-count: 1`
- `break-inside: avoid` on each image wrapper prevents splitting
- Hover state: CSS-only amber border + caption overlay fade

### Scroll-Triggered Reveals Architecture

Reusable pattern across all pages:
- `ScrollReveal` component wraps any content section
- Uses GSAP ScrollTrigger with `once: true` (animate once, don't reverse)
- Configurable: direction (Y or X), distance (12–32px), duration, stagger, easing
- Inner children can be targeted for staggered reveals via `staggerChildren` prop
- Philosophy: one consistent system, not one-off implementations per section

## Other Key Decisions

**No shadcn/ui**: The design is entirely bespoke editorial — no standard UI patterns exist. Every element is custom-styled. The 5 `<select>` dropdowns in the contact form use pure CSS with `appearance: none` and a custom SVG arrow.

**GSAP SplitText for word-by-word reveal**: The hero headline requires per-word animation ("word-by-word 0.1s stagger"). GSAP's SplitText plugin splits text into word spans that can be individually animated. This is simpler and more robust than a manual React word-splitting utility.

**PhotoStrip as a reusable component**: Both Home (5 images, 400px) and HuntCamp (4 images, 350px) use the same horizontal strip pattern. One component handles both via props: `images[]`, `height`, `linkTarget`.

**SpeciesCard as a reusable component**: Used on Home (3 cards with reduced info) and Hunts (11 cards with full info: latin name, description, season). One component with conditional rendering for optional fields.

**TestimonialCard as a reusable component**: Used on Home (3 cards) and Reviews (8 cards). Same layout, different data.

**CSS-only hover states**: All hover effects (card image scale, amber overlay reveal, button hover, link underline) use CSS transitions — no JS needed. This ensures 60fps performance and avoids GSAP overhead for simple interactions.

**Grain overlay**: Implemented as a global CSS class using an inline SVG data URI (256×256 tileable noise). Applied via pseudo-element on `body` or a global overlay div. `mix-blend-mode: overlay`, `pointer-events: none`.
