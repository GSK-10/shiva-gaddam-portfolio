# V1 Portfolio

A software engineering portfolio built as a content-oriented system: every piece of
copy and data lives in `content/`, and the components under `components/` are generic
primitives that render whatever those files contain. Updating the site is almost always
a data edit, not a component edit — and swapping in your own content or palette is the
intended way to reuse it.

Built with Next.js (App Router), TypeScript and Tailwind.

## Why it is structured this way

**Content is data, not markup.** `content/*.ts` holds typed objects; sections map over
them. Adding a project, a case study or a skill group is appending to an array — no JSX
changes, and TypeScript catches a malformed entry at build time.

**Sections share primitives.** Every section is composed from `Section`, `Surface` and
`Button` in `components/ui.tsx`. They already carry the spacing rhythm, the numbered
`01 / ABOUT` header, the card surface and the focus states, so a new section inherits
the visual language instead of reimplementing it.

**Components never name a theme.** They read semantic variables — `--color-primary`,
`--surface-card`, `--section-background`. No component contains a `if dark ... else`
branch, which is why adding a palette requires no component changes at all.

## Structure

```text
app/                      Routes, metadata, robots + sitemap, global styles
  page.tsx                Section order for the homepage
components/
  layout/                 Navbar, Footer
  sections/               One file per section
  ui.tsx                  Section, Surface, Container, Button primitives
  ui/                     Reveal, BackToTop, HeroProfileCard, useModalDialog
  theme.tsx               Theme provider and toggle
content/                  All copy and structured data
styles/theme.css          Semantic tokens and every palette
lib/utils.ts              cn() class merger
public/                   Resume, images
docs/                     Architecture and implementation notes
tests/e2e/                Playwright smoke + axe accessibility suite
```

## Using it for your own content

| Edit | For |
| --- | --- |
| `content/portfolio.ts` | Name, headline, SEO, nav items, section headings, contact |
| `content/work.ts` | Work case studies (open in an accessible modal) |
| `content/projects.ts` | Projects — `githubUrl` / `liveUrl` buttons render only when present; `status` drives labels like `WIP` |
| `content/skills.ts` | `recruiterFocusedSkills` (the top panel) and `skillGroups` (the inventory) |
| `public/resume/` | Resume PDF |

Section order is `app/page.tsx`. Sections alternate between two shades via the
`tone` prop: `alternate` is the darker bookend used by Hero, About, Contact and the
footer; `base` is the lighter shade carrying the content run between them.

## Adding a theme

Two files, no component changes.

**1. Define the palette in `styles/theme.css`.** Copy an existing block and change the
values. Colours are space-separated RGB channels so Tailwind can apply opacity to them.

```css
[data-theme="your-theme"] {
  color-scheme: dark;              /* or light — drives native form/scrollbar colours */
  --color-background: 27 30 40;
  --color-foreground: 231 233 240;
  --color-muted: 159 164 179;
  --color-border: 102 108 128;
  --color-card: 35 39 51;
  --color-card-muted: 42 46 60;
  --color-card-foreground: 231 233 240;
  --color-primary: 157 146 211;       /* accent surfaces: CTA fill, glows, dots */
  --color-primary-text: 157 146 211;  /* accent TEXT — must clear 4.5:1 on both tones */
  --color-primary-foreground: 20 20 29;
  --color-secondary: 120 157 194;
  --shadow-color: 5 7 13;
  --shadow-opacity: 0.25;
  --section-background: rgb(34 37 50);      /* content run */
  --section-background-alt: rgb(27 30 40);  /* darker bookend */
}
```

Every key is required. Two are easy to get wrong:

- **`--color-primary-text` is separate from `--color-primary` on purpose.** A saturated
  accent can be vivid enough for a button fill while failing contrast as body text.
  Tailwind's `text-primary` reads the text variant; accent *surfaces* read
  `--color-primary`. If your accent already passes as text, set both to the same value.
- **The two section tones should differ by roughly 1.09:1**, enough to read as
  separation without looking striped.

**2. Register it in `content/themes.ts`.** Array order is the toggle cycle; the first
entry is the default.

```ts
export const themes = [
  { key: "dusk", label: "Dusk", icon: "gem" },
  { key: "light", label: "Light", icon: "sun" },
  { key: "dark-medium", label: "Dark", icon: "moon" },
] as const;
```

A palette defined in `theme.css` but absent here still works via
`data-theme="…"` — useful for parking variants. `dark-light`, `dark-veryHigh` and
`steel` are stored that way. The visible cycle is **Dusk → Light → Dark**.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run test:e2e     # builds, serves, runs Playwright + axe
```

`npm run test:e2e` needs browsers once: `npx playwright install chromium`.

The suite covers navigation targets, modal focus trapping and restoration, mobile
overflow, and axe accessibility violations. Run the production build before publishing.

Further implementation notes are in [`docs/`](docs/).
