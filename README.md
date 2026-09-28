# Shiva Kumar Reddy Gaddam - Portfolio

Personal software engineering portfolio, live at [shivagaddam.dev](https://shivagaddam.dev).

Built as a fast, statically rendered, accessible site that presents work case studies,
experience, skills and projects - with a three-mode theme system and an angular,
racing-HUD visual identity.

## What this focuses on

- **Typed content:** Copy, projects, case studies, and skills live in `content/` and are checked by TypeScript.
- **Flexible themes:** Components use semantic CSS variables, so palettes change without component edits.
- **Tested accessibility:** Focus-managed modals, WCAG AA contrast, and axe checks in the Playwright suite.
- **Lean delivery:** Static generation, self-hosted fonts, and no component library.

## Tech Stack

- Framework: Next.js 15 (App Router, static generation)
- Language: TypeScript 5.7 (React 19)
- Styling: Tailwind CSS 3.4 over CSS custom properties (`styles/theme.css`)
- Theming: `next-themes`, driven by a `data-theme` attribute
- Icons: `lucide-react`
- Fonts: Oxanium, Hanken Grotesk, JetBrains Mono, Orbitron - self-hosted via `next/font`
- Testing: Playwright + `@axe-core/playwright`
- Hosting: Vercel (static prerender), Cloudflare DNS

## Features

- Work case studies that open in an accessible, focus-trapped modal
- Skills inventory with a minimized / detailed toggle, minimized by default
- Three-mode theme cycle: Dusk / Light / Dark, plus three stored palettes
- Two-shade section system - hero, about, contact and footer bookend a lighter content run
- Scroll-reveal animations that degrade gracefully without JavaScript and honour `prefers-reduced-motion`
- Back-to-top control that appears past the About section
- SEO: Open Graph and Twitter cards, canonical URL, JSON-LD `Person` + `WebSite`, generated `robots.txt` and `sitemap.xml`
- Accessibility: keyboard navigation, visible focus rings, `role="switch"` on the view toggle, zero axe violations across all three themes

## Project Structure

```text
/
├── app/                      # Routes, metadata, global styles
│   ├── layout.tsx            # Root layout, fonts, SEO, structured data
│   ├── page.tsx              # Homepage - section order lives here
│   ├── globals.css           # Base styles, section tones, motion, shared surfaces
│   ├── robots.ts             # Generated robots.txt
│   └── sitemap.ts            # Generated sitemap.xml
├── components/
│   ├── layout/               # Navbar, Footer
│   ├── sections/             # One file per section of the page
│   ├── ui.tsx                # Section, Surface, Container, Button primitives
│   ├── ui/                   # Reveal, BackToTop, HeroProfileCard, useModalDialog
│   └── theme.tsx             # Theme provider and toggle
├── content/                  # Single source of truth for all copy and data
│   ├── portfolio.ts          # Profile, SEO, nav, section headings, contact
│   ├── work.ts               # Work case studies
│   ├── projects.ts           # Projects
│   ├── skills.ts             # Skills and groupings
│   └── themes.ts             # Active themes and toggle order
├── styles/theme.css          # Every palette, as semantic tokens
├── lib/utils.ts              # cn() class merger
├── public/                   # Resume, images, share preview
├── docs/                     # Architecture and implementation notes
└── tests/e2e/                # Playwright smoke + accessibility suite
```

Day to day, only `content/` and `styles/theme.css` need touching.

## Theme Variables

A palette is a flat set of CSS custom properties on a `[data-theme="..."]` selector.
Components consume semantic names - `--surface-card`, `--accent` - derived once in
`styles/theme.css` from the raw values. Nothing downstream refers to a colour literal or
a theme name.

Colours are stored as space-separated RGB channels rather than hex, so Tailwind can
apply opacity to them: `rgb(var(--color-primary) / 0.4)`.

- `--color-background`, `--color-foreground` - page base and body text
- `--color-muted` - secondary text
- `--color-border` - dividers and outlines
- `--color-card`, `--color-card-muted` - raised surfaces
- `--color-primary` - accent surfaces: CTA fill, glows, markers
- `--color-primary-text` - accent text; must clear 4.5:1
- `--color-primary-foreground` - text placed on an accent fill
- `--color-secondary` - gradient partner for the accent
- `--shadow-color`, `--shadow-opacity` - elevation
- `--section-background` - the content run
- `--section-background-alt` - the darker bookend

## Using It Directly

Fork it, replace the five files below, and the site is yours. No component edits needed.

| File | What it drives |
| --- | --- |
| `content/portfolio.ts` | Name, headline, SEO and share image, nav items, every section heading and tagline, contact details and profile links |
| `content/work.ts` | Work case studies - title, summary, bullets and tags for each modal |
| `content/projects.ts` | Projects. `githubUrl` and `liveUrl` buttons render only when present; `status` drives labels such as `WIP` |
| `content/skills.ts` | `recruiterFocusedSkills` fills the top panel, `skillGroups` fills the inventory; `featured: true` promotes a chip |
| `public/resume/` | Resume PDF - update the filename in `portfolio.ts` |

Two further levers, both one-liners. Section order is the component order in
`app/page.tsx`. Section shade is the `tone` prop: `alternate` is the darker bookend,
`base` carries the content run between the bookends.

## Adding a Theme

1. Define the palette in `styles/theme.css`. Copy an existing block and change the
   values - every key is required.

```css
[data-theme="your-theme"] {
  color-scheme: dark;                 /* or light - drives native scrollbars and form controls */
  --color-background: 27 30 40;
  --color-foreground: 231 233 240;
  --color-muted: 159 164 179;
  --color-border: 102 108 128;
  --color-card: 35 39 51;
  --color-card-muted: 42 46 60;
  --color-card-foreground: 231 233 240;
  --color-primary: 157 146 211;
  --color-primary-text: 157 146 211;
  --color-primary-foreground: 20 20 29;
  --color-secondary: 120 157 194;
  --shadow-color: 5 7 13;
  --shadow-opacity: 0.25;
  --section-background: rgb(34 37 50);
  --section-background-alt: rgb(27 30 40);
}
```

2. Register it in `content/themes.ts`. Array order is the toggle cycle and the first
   entry is the default.

```ts
export const themes = [
  { key: "your-theme", label: "Your Theme", icon: "gem" },
  { key: "light", label: "Light", icon: "sun" },
  { key: "dark-medium", label: "Dark", icon: "moon" },
] as const;
```

Two rules worth respecting. `--color-primary-text` is deliberately separate from
`--color-primary`, because a saturated accent can be vivid enough for a button fill while
failing contrast as body text; set both to the same value if yours passes as text. And
keep the two section tones roughly 1.09:1 apart - enough to read as separation, short of
looking striped.

A palette defined in `theme.css` but left out of `themes.ts` still works via
`data-theme="..."`, which is useful for parking variants. `dark-light`, `dark-veryHigh`
and `steel` are stored that way. The visible cycle is Dusk → Light → Dark.

## Local Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run lint
npm run test:e2e     # builds, serves, then runs Playwright + axe
```

The test suite needs browsers once:

```bash
npx playwright install chromium
```

It covers navigation targets, modal focus trapping and restoration, mobile horizontal
overflow, and axe accessibility violations. Run `npm run build` before publishing.

No environment variables are required. The contact form opens a pre-filled draft in the
visitor's email client rather than posting to a server.

## Deployment

Deployed to Vercel from `main`, fronted by Cloudflare, and served at
[shivagaddam.dev](https://shivagaddam.dev). Every page is prerendered at build time
(`x-nextjs-prerender`), so a push to `main` is a full redeploy - there is no server to
run and no runtime configuration to manage.

## License

Source code is released under the MIT License (see `LICENSE`). Personal content -
portrait photo, resume PDF, and written case studies - is © Shiva Kumar Reddy Gaddam and
not licensed for reuse.

## Contact

- Email: shiva.kumar.reddy.gaddam19@gmail.com
- Site: [shivagaddam.dev](https://shivagaddam.dev)
- LinkedIn: [shivakumar19](https://www.linkedin.com/in/shivakumar19/)
- GitHub: [@GSK-10](https://github.com/GSK-10)
