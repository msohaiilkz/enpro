# Enpro Consultants — Corporate Website

Marketing website for **Enpro Consultants**, a structural and infrastructure engineering
consultancy. The site presents the firm's capabilities, approach and service lines, and
gives prospective clients a direct route to get in touch.

Built as a single-page application with dedicated detail pages, a shared design system and
motion throughout.

<p>
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?logo=tailwindcss&logoColor=white" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white" />
</p>

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | React 18 + TypeScript 5.8 |
| Build tool | Vite 5 (SWC) |
| Styling | Tailwind CSS 3.4 with a custom design system |
| Animation | Framer Motion 12 |
| Routing | React Router 6 |
| UI primitives | shadcn/ui on Radix UI |
| Icons | lucide-react, plus custom brand SVGs |
| Forms | React Hook Form + Zod |
| Data fetching | TanStack Query |

---

## Pages

| Route | Description |
| --- | --- |
| `/` | Landing page — Hero, About, Why Enpro, Services and Contact, with a fixed sidebar navigation |
| `/about-us` | About Enpro, Built to Evolve and Our Approach |
| `/services/:slug` | Service detail — What We Do, Engineering Capability, How We Work, Project Impact |
| `*` | Branded 404 page |

The six service lines are driven from a single data file, so the landing page cards,
the detail pages, the footer and the contact form's dropdown never fall out of sync.

---

## Features

- **Full-viewport sections** — every section is sized to the screen with `100dvh`, so nothing
  is clipped by mobile browser chrome
- **Fluid typography** — headings and body copy scale with both viewport width *and* height via
  `clamp()`, which keeps wide-but-short laptop screens from pushing content past the fold
- **Scroll-reveal motion** — sections, cards and list items animate in as they enter view,
  and replay on every pass so the page feels alive on the way back up
- **Services everywhere** — a hover dropdown on the top bar and an accordion in the
  off-canvas menu list all six service pages; every list is generated from the same data
- **Per-service theming** — the Environmental & Social Advisory page runs a green accent
  end to end, including a hue-shifted logo, driven by CSS custom properties
- **Hero slideshow** — cross-fading background with a slow zoom, paused for
  `prefers-reduced-motion`
- **Frosted navigation** — the detail-page bar fixes to the top and turns to glass on scroll
- **Distinct section concepts** — each block on the detail pages uses a different visual
  treatment (icon grid, dark numbered rows, stepped outline numerals, editorial index list)
- **Accessible by default** — semantic headings, `aria-label`s on icon-only controls, decorative
  imagery hidden from assistive technology

---

## Design system

| Token | Value |
| --- | --- |
| Brand red | `#BE1E2D` |
| Ink | `#1C1C1C` |
| Dark canvas | `#0B0B0B` |
| Tinted surface | `#FBE5E7` |
| Heading font | Poppins |
| Body font | Open Sans |

Fluid type scales are defined in [`tailwind.config.ts`](tailwind.config.ts) as
`fluid-hero`, `fluid-h2`, `fluid-h3`, `fluid-lead` and `fluid-body`. Shared motion presets
live in [`src/lib/motion.ts`](src/lib/motion.ts).

---

## Project structure

```text
src/
├── assets/               Images, brand icons and client-supplied artwork
│   └── icons/            Extracted line icons used across sections
├── components/
│   ├── ui/               shadcn/ui primitives
│   ├── icons/            Custom brand SVGs (LinkedIn, Facebook, WhatsApp)
│   ├── Hero.tsx          Landing hero with background slideshow
│   ├── About.tsx         Landing About section
│   ├── Services.tsx      "Why Enpro" cards
│   ├── Feature.tsx       Service cards with show-more
│   ├── Contact.tsx       Contact form
│   ├── Navbar.tsx        Fixed sidebar (landing)
│   ├── TopNavbar.tsx     Top bar and off-canvas menu (detail pages)
│   ├── PageBanner.tsx    Banner and breadcrumb for detail pages
│   ├── Footer.tsx        Site footer
│   └── ScrollToTop.tsx   Floating scroll-to-top control
├── data/
│   └── services.ts       Single source of truth for all service content
├── lib/
│   ├── motion.ts         Shared Framer Motion variants
│   └── utils.ts          Class-name helper
└── pages/
    ├── Index.tsx         Landing page
    ├── AboutUs.tsx       About Us page
    ├── ServiceDetail.tsx Service detail page
    └── NotFound.tsx      404
```

---

## Getting started

**Requirements:** Node.js 18 or newer.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:8080)
npm run dev

# type-check and create a production build
npm run build

# preview the production build locally
npm run preview

# lint
npm run lint
```

---

## Content

All copy and imagery follow the client's approved content documents. Service content is
maintained in [`src/data/services.ts`](src/data/services.ts) — adding a service means adding
one entry there, and the rest of the site picks it up automatically.

---

## Status

The landing page, the About Us page and all six service detail pages are complete and
follow the client's approved documents. The contact form UI is finished and will be wired
to a hosting-independent delivery endpoint next, sending submissions to the client's inbox.

---

© Enpro Consultants. All rights reserved.
