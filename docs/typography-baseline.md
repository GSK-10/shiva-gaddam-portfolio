# Portfolio Typography Baseline

This document records the current premium typography baseline for the portfolio.
Use this as the restore point before experimenting with marquee strips, stat sizing,
or section/card type scale.

## Font Families

Defined in `app/layout.tsx` through `next/font/google`.

| Token | Google Font | Weights | Primary Use |
| --- | --- | --- | --- |
| `--font-sans` | Hanken Grotesk | 400, 500, 600, 700 | Body text, nav links, general UI |
| `--font-mono` | JetBrains Mono | 500, 600 | Eyebrows, labels, metadata, tech pills |
| `--font-serif` | Oxanium | 500, 600, 700 | Section titles, card titles, stat values, brand slash |
| `--font-display` | Orbitron | 800 | Hero name only |
| `--font-brand` | `var(--font-serif)` | inherited | Navbar brand |
| `--font-accent` | `var(--font-serif)` | inherited | Accent display use |

## Global Scale

Defined in `styles/typography.css`.

| Element | Size / Line Height |
| --- | --- |
| `html` | `16.5px` |
| `body` | `1rem`, `line-height: 1.6`, `--font-sans` |
| `h1`, `h2`, `h3` | `line-height: 1.1` |

## Responsive Tokens

Defined in `styles/layout.css`.

### Base / Mobile

| Token | Value |
| --- | --- |
| Navbar logo | `1rem` |
| Navbar link | `0.82rem` |
| Section eyebrow | `0.64rem` |
| Section title | `1.7rem`, weight `700` |
| Hero name | `2rem`, weight `800`, letter spacing `0.075rem` |
| Hero eyebrow | `0.56rem` |
| Hero copy | `1rem` |
| Hero stat label | `0.52rem` in component |
| Hero stat value | `0.98rem` in component |

### `min-width: 640px`

| Token | Value |
| --- | --- |
| Navbar logo | `1.08rem` |
| Navbar link | `0.68rem` |
| Section eyebrow | `0.72rem` |
| Section title | `1.95rem` |
| Hero name | `2.5rem`, letter spacing `0.1rem` |
| Hero eyebrow | `0.68rem` |
| Hero copy | `1.08rem` |

### `min-width: 768px`

| Token | Value |
| --- | --- |
| Navbar logo | `1.12rem` |
| Navbar link | `0.74rem` |
| Section eyebrow | `0.78rem` |
| Section title | `2.15rem` |
| Hero name | `3rem`, letter spacing `0.1125rem` |
| Hero eyebrow | `0.72rem` |
| Hero copy | `1.12rem` |

### `min-width: 1024px`

| Token | Value |
| --- | --- |
| Navbar logo | `1.2rem` |
| Navbar link | `0.82rem` |
| Section eyebrow | `0.86rem` |
| Section title | `1.95rem` |
| Hero name | `3.6rem`, letter spacing `0.125rem` |
| Hero eyebrow | `1rem` |
| Hero copy | `1.18rem` |

## Layout Typography

### Navbar

File: `components/layout/Navbar.tsx`

| Element | Font | Size | Weight / Tracking |
| --- | --- | --- | --- |
| Brand `GSK` | `--font-brand` / Oxanium | `--layout-navbar-brand-size` | bold, `0.08em` |
| Brand slash | `--font-serif` / Oxanium | `1.35 * brand size` | normal |
| Brand descriptor | `--font-mono` / JetBrains Mono | `0.6rem`, `0.66rem` at `sm` | uppercase, `0.22em` |
| Desktop nav links | `--font-sans` / Hanken Grotesk | `--layout-navbar-link-compact-size` | `600`, uppercase, `0.08em` |
| Mobile menu title | default sans | `0.68rem` | `600`, uppercase, `0.12em` |
| Mobile nav links | default sans | `0.72rem` | `600`, uppercase, `0.08em` |

### Shared Section Shell

File: `components/layout/Section.tsx`

| Element | Font | Size | Weight / Tracking |
| --- | --- | --- | --- |
| Section index/title row | `--font-mono` | `0.68rem` | `500`, uppercase, `0.2em` |
| Section tagline | default sans | `0.875rem`, `1rem` at `sm` | `line-height: 1.75rem` |

### Section Heading

File: `components/ui/SectionHeading.tsx`

| Element | Font | Size | Weight / Tracking |
| --- | --- | --- | --- |
| Eyebrow | `--font-mono` | `--layout-section-heading-eyebrow-size` | uppercase, `0.32em` |
| Title | `--font-serif` | `--layout-section-heading-title-size` | `--layout-section-heading-title-weight`, uppercase, `0.1em` |

## Hero Section

File: `components/sections/Hero.tsx`

| Element | Font | Size | Weight / Tracking |
| --- | --- | --- | --- |
| Rank diamond `#1` | `--font-serif` | `--layout-hero-eyebrow-size` | `600` |
| Eyebrow text | `--font-mono` | `--layout-hero-eyebrow-size` | `500`, uppercase, `0.2em`, `0.22em` at `sm` |
| Hero name | `--font-display` / Orbitron | `--layout-hero-name-size` | `800`, uppercase, tokenized letter spacing |
| Hero statement | `--font-mono` | `--layout-hero-copy-size` | normal, `line-height: 1.65` |
| Buttons | default button style | `0.72rem` | `600`, uppercase, `0.18em` |
| Stat labels | `--font-mono` | `0.52rem` | uppercase, `0.28em` |
| Stat values | `--font-serif` | `0.98rem` | uppercase, tight leading |

## Hero Orbit Reveal

File: `components/ui/HeroOrbitReveal.tsx`

| Element | Font | Size Token |
| --- | --- | --- |
| Reveal quote | `--font-serif` | `--layout-hero-orbit-quote-size` |
| Reveal marker | `--font-mono` | `--layout-hero-orbit-marker-size`, `0.32em` tracking |
| Reveal word | `--font-serif` | `--layout-hero-orbit-word-size`, weight `700`, `0.08em` tracking |

## About Section

File: `components/sections/About.tsx`

| Element | Font | Size | Weight / Tracking |
| --- | --- | --- | --- |
| Main paragraph | default sans | `text-lg`, `text-xl` at `sm` | `leading-8`, `leading-9` at `sm` |
| Motto | `--font-mono` | `text-xs` | uppercase, `0.18em` |

## Work Section

File: `components/sections/Work.tsx`

| Element | Font | Size | Weight / Tracking |
| --- | --- | --- | --- |
| Work intro label | `--font-mono` | `0.66rem` | `600`, uppercase, `0.18em` |
| Work intro body | default sans | `text-sm` | `leading-6` |
| Case kind labels | `--font-mono` | `0.62rem` | uppercase, `0.2em` |
| Case titles | `--font-serif` | `text-xl`, `text-2xl` at `sm` | `700`, uppercase |
| Case evidence/body | default sans | `text-sm` | `leading-6` |
| Case tech pills | `--font-mono` | `0.62rem` | uppercase, `0.1em` |
| Smaller work item titles | `--font-serif` | `text-lg`, `text-xl` at `sm` | `700`, uppercase |

## Project Cards

File: `components/cards/ProjectCard.tsx`

| Element | Font | Size | Weight / Tracking |
| --- | --- | --- | --- |
| Background rank | `--font-serif` | `text-6xl`, `text-8xl` at `sm` | `700` |
| Kind label | `--font-mono` | `0.62rem` | uppercase, `0.22em` |
| Year | `--font-mono` | `0.62rem` | muted |
| Project title | `--font-serif` | `text-xl`, `text-2xl` at `sm` | `700`, uppercase |
| Description / bullets | default sans | `text-sm` | `leading-6` |
| Publication pill | default sans | `text-xs` | `500`, uppercase, `0.12em` |
| Tech pills | `--font-mono` | `0.62rem` | uppercase, `0.1em` |

## Experience Cards

File: `components/cards/ExperienceCard.tsx`

| Element | Font | Size | Weight / Tracking |
| --- | --- | --- | --- |
| Event label | `--font-mono` | `0.62rem` | uppercase, `0.24em` |
| Company | `--font-serif` | `text-2xl` | `700`, uppercase |
| Location | default sans | `text-sm` | `leading-6` |
| Dates | `--font-mono` | `text-xs` | uppercase, `leading-5` |
| Role | `--font-serif` | `text-sm` | `600`, uppercase, `0.08em` |
| Bullets | default sans | `text-sm` | `leading-6` |
| Bullet numbers | `--font-mono` | `0.62rem` | `700` |
| Tech pills | `--font-mono` | `0.65rem` | uppercase, `0.12em` |

## Principles Section

File: `components/sections/Principles.tsx`

| Element | Font | Size | Weight / Tracking |
| --- | --- | --- | --- |
| Principle index | `--font-mono` | `0.62rem` | uppercase, `0.2em` |
| Principle title | `--font-serif` | `text-lg` | `700`, uppercase |
| Detail | default sans | `text-sm` | `leading-6` |

## Skills Section

File: `components/cards/SkillGroupCard.tsx`

| Element | Font | Size | Weight / Tracking |
| --- | --- | --- | --- |
| Rank | `--font-mono` | `0.62rem` | `700` |
| Skill group title | `--font-serif` | `text-xl`, `text-2xl` at `sm` | `600` |
| Featured skills | default sans | `text-sm` | `600` |
| Standard skills | default sans | `text-sm` | muted |

## Highlights Section

Files: `components/sections/Highlights.tsx`, `components/cards/HighlightCard.tsx`

| Element | Font | Size | Weight / Tracking |
| --- | --- | --- | --- |
| Education label | `--font-mono` | `0.62rem` | uppercase, `0.22em` |
| Education title | `--font-serif` | `text-xl`, `text-2xl` at `sm` | `700`, uppercase |
| Institution/detail | default sans | `text-sm` | `leading-6` |
| Score/period labels | default sans | `0.58rem` | uppercase, `0.18em` |
| Highlight label | `--font-mono` | `0.6rem` | uppercase, `0.22em` |
| Highlight rank | `--font-mono` | `0.62rem` | muted |
| Highlight title | `--font-serif` | `text-lg` | `700`, uppercase |
| Highlight detail | default sans | `text-sm` | muted |

## Notes Section

File: `components/sections/Notes.tsx`

| Element | Font | Size | Weight / Tracking |
| --- | --- | --- | --- |
| Note type | `--font-mono` | `0.62rem` | uppercase, `0.18em` |
| Note date | `--font-mono` | `0.62rem` | uppercase, `0.14em` |
| Note title | `--font-serif` | `text-lg` | `700`, uppercase |
| Note summary | default sans | `text-sm` | `leading-6` |

## Contact Section

File: `components/sections/Contact.tsx`

| Element | Font | Size | Weight / Tracking |
| --- | --- | --- | --- |
| Intro | default sans | `text-lg` | `leading-8` |
| Profile links | default sans | `text-sm` | muted |
| Resume CTA | `--font-serif` | `text-xs` | `600`, uppercase, `0.16em` |

## Info Panels

File: `components/ui/InfoPanel.tsx`

| Element | Font | Size | Weight / Tracking |
| --- | --- | --- | --- |
| Panel title | `--font-mono` | `0.68rem` | `600`, uppercase, `0.24em` |
| Item label | `--font-mono` | `text-xs` | uppercase, `0.16em` |
| Item value | default sans | `text-sm` | `500`, `leading-6` |

## Buttons

File: `components/ui/Button.tsx`

| Element | Font | Size | Weight / Tracking |
| --- | --- | --- | --- |
| Button text | default inherited font | `0.72rem` | `600`, uppercase, `0.18em` |

## Premium Hierarchy Notes

- Keep `Orbitron` reserved for the Hero name only.
- Use `JetBrains Mono` for labels, metadata, tech chips, indexes, and small system text.
- Use `Oxanium` for section headings, card titles, stat values, and brand accents.
- Use `Hanken Grotesk` for body copy and general UI readability.
- Avoid making supporting elements larger than their role; the Hero name should remain the only dominant display element in the first viewport.
- If a marquee or ticker is reintroduced later, keep it below the stat strip in visual priority and use `--font-mono` at a small label scale.
