# V1 Portfolio

A content-focused software engineering portfolio built for reusability and straightforward maintenance. Copy and structured data are separated from presentation, so most updates do not require component changes.

## Highlights

- Responsive Next.js and TypeScript interface
- Data-driven experience, projects, skills, principles, notes, and contact content
- Reusable section, surface, and button primitives
- Semantic theme tokens with Dark, Light, and Dusk in the active cycle
- Accessible keyboard-friendly project and note interactions

## File structure

```text
app/                    Routes, metadata, global layout and styles
components/
  layout/               Navigation and shared page structure
  sections/             Portfolio sections and their interactions
  ui.tsx                Shared Section, Surface and Button primitives
content/                Editable copy and structured portfolio data
public/                 Resume, images and other static assets
styles/theme.css        Semantic theme tokens and stored palettes
docs/                   Architecture and implementation notes
```

## Themes

The interface reads semantic variables such as `--color-primary` and `--color-card`; components do not contain theme-specific branches.

Changing only two places controls the complete theme system:

1. `content/themes.ts` — choose the active themes, display names, icons, and toggle order.
2. `styles/theme.css` — define each palette's background, text, surface, border, accent, and shadow values.

Stored palettes are Light, Dark Light, Dark Medium, Dark Very High, Steel, and Dusk. The active cycle is Dark Medium → Light → Dusk.

## Updating content

- General profile, headings, experience, principles, and notes: `content/portfolio.ts`
- Projects, status, technologies, and optional links: `content/projects.ts`
- Skills, groupings, highlights, and marquee: `content/skills.ts`
- Work case studies: `content/work.ts`
- Resume: `public/resume/shiva-kumar-reddy-gaddam-resume.pdf`

Project GitHub and Live buttons appear only when `githubUrl` or `liveUrl` is present. The `status` property controls labels such as `WIP`.

## Local development

```bash
npm install
npm run dev
npm run build
```

Run the production build before publishing. Additional maintenance boundaries are documented in `docs/architecture.md`.
