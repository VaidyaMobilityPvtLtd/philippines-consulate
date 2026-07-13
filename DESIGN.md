# Philippine Consulate General — Design & Architecture

A redesign of the Consulate General of the Philippines (Kathmandu, Nepal) website,
rebuilt from the Figma design system with reusable components, a data-driven content
layer, and a scalable folder structure. Content is transcribed from the existing
`voith.com.np/philcongen` site.

## Run

```bash
npm run dev     # http://localhost:3000
npm run build   # production build (prerenders all pages)
npm run start   # serve the production build
```

## Folder structure

```
app/                     # Next.js App Router routes
  layout.tsx             # root layout: fonts + <SiteHeader/> + <SiteFooter/>
  page.tsx               # Home (hero + quick-link cards for every section)
  not-found.tsx          # styled 404
  visa-migration/
    page.tsx             # Visa & Migration landing (the Figma design)
    [slug]/page.tsx      # data-driven sub-pages (14 real pages)
  <section>/page.tsx     # section landings (passport, registration, …)
  <section>/[slug]/page.tsx  # section child pages (factory-generated placeholders)
  contact/ about-us/ news/ downloads/   # utility pages (contact is real)

components/
  layout/                # TopBar, SearchBar, MainNav, SiteHeader, SiteFooter
  ui/                    # Container, Section, Card, CategoryCard, QuickLinkCard,
                         # ServiceListCard, PillGroup, CountryExplorer, StayLongerPanel,
                         # PageHero, Breadcrumb, Notice, Badge, Button, SmartLink
  content/ContentRenderer.tsx   # renders the generic block model
  page/                  # SectionLanding, PlaceholderPage, ComingSoon
  icons/index.tsx        # inline SVG icon set (no external deps)

content/                 # all page copy lives here (edit these, not the components)
  registry.ts            # maps each section route → its sub-page content (single lookup)
  home.ts                # hero, intro, quick links
  services.ts            # consulate service cards + pill groups
  visa/
    categories.ts        # the 6 visa category cards
    countries.ts         # visa-free country list + "stay longer" categories
    requirements.ts      # entry-requirement cards + red notice
    subpages.ts          # the 14 Visa & Migration sub-pages (block content)
  sections/              # every other section's sub-page content (block content)
    passport.ts registration.ts about-philippines.ts study.ts traveling.ts
    nepal.ts about-us.ts   # standalone pages (About Nepal, About Us)

lib/
  types.ts               # content model + shared types
  site.ts                # org identity + contact details  ⚠ has placeholders
  navigation.ts          # top-bar + main-nav + footer link data (the site IA)
  sections.ts            # nav lookup helper
  section-page.tsx       # factory for section [slug] placeholder pages
  utils.ts               # cn()
```

## Design tokens

All tokens live in [`app/globals.css`](app/globals.css) under `@theme` and are exposed
as Tailwind v4 utilities (`bg-primary`, `text-ink-soft`, `rounded-card`, `shadow-card`, …).

- **Primary** deep royal-blue `#1b2a83` (nav, footer, headings) with `-dark` / `-light` / `-50` / `-100` shades
- **Flag** accents `--color-flag-{blue,yellow,red}`
- **Surfaces** `surface`, `surface-muted`, `surface-sunken`
- **Ink** `ink`, `ink-soft`, `ink-muted`
- **Notice** red callout tokens
- **Type** Poppins (headings, `--font-heading`) + Inter (body, `--font-sans`)

## Content model (data-driven pages)

Every inner page is described as a list of `ContentBlock`s and rendered by
`<ContentRenderer/>`. Block types: `heading | paragraph | list | table | note | links`.

### Add or edit a sub-page (any section)

1. Add/edit an entry keyed by slug in the section's content file
   (`content/sections/<section>.ts`, or `content/visa/subpages.ts`).
2. Make sure the slug is listed under that section in `lib/navigation.ts`.
3. Done — it is automatically routed at `/<section>/<slug>`, statically
   generated, and added to the "In this section" sidebar.

A slug listed in the nav but with **no** content entry renders a tasteful
"content coming soon" placeholder automatically (e.g. Foreign Policy, Trade
Policy). No new component or route file is ever needed.

### Images

Content supports an `image` block (`{ type: "image", url, alt, caption }`) and
pages support `heroImage`. Images are optimized via `next/image`; the allowed
remote host is set in `next.config.ts` (`images.remotePatterns`).

> The legacy site's own images are **hotlink-protected (HTTP 403)**, so they
> cannot be embedded. To add images: drop files into `public/images/` and
> reference them as `/images/<file>` in an `image` block or `heroImage`, or add
> the hosting domain to `remotePatterns`.

## Assets — ⚠ to finish

The Figma MCP hit the Starter-plan rate limit, so the original raster assets
(the consulate staff hero photo, exact category icons) were **not** downloaded.
Everything currently renders with asset-independent placeholders:

- `public/seal.svg` — a generated Philippine sun-and-stars emblem (logo + hero watermark)
- inline SVG icons in `components/icons/index.tsx`
- a branded gradient banner in place of the hero photo (Visa & Migration landing)

To swap in the real Figma assets when the rate limit resets:

1. `download_assets` on the Figma node → save the hero photo to e.g. `public/images/hero-consulate.jpg`.
2. In `app/visa-migration/page.tsx`, replace the "Branded banner" `<div>` with a
   `next/image` `<Image>` pointing at that file.
3. Replace `public/seal.svg` with the official consulate seal if provided.

## Before launch — replace placeholders

`lib/site.ts` contains **placeholder** contact details (address, phone, email,
office hours). Update these with the official Consulate information. The Standard
Chartered bank account number is transcribed from the source site — please verify.
