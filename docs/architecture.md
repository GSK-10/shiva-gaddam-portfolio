# Architecture

This portfolio is a modular monolith. Keep content, themes, and interactive state separate without adding layers for one-off code.

## Boundaries

- `app/` owns routes, metadata, and the global shell.
- `components/sections/` owns each visible section.
- `components/ui.tsx` owns the few shared visual primitives.
- `content/` owns portfolio copy and structured data.
- `styles/theme.css` owns theme values.

## Themes

Components use semantic tokens and never check a theme name. To add a theme, add its identity to `content/themes.ts` and its token block to `styles/theme.css`.

Use Tailwind responsive classes for layout. Add a CSS variable only when multiple components or themes share it.

## State

Keep state beside its interaction: theme selection in `components/theme.tsx`, menu state in `Navbar.tsx`, work selection in `Work.tsx`, and portrait reveal state in `HeroOrbitReveal.tsx`.

Extract a component when it is reused or isolates meaningful behavior. Keep one-off presentation with its section.

## Motion

Sections fade in on scroll automatically: `Section` wraps its heading and content in `Reveal`, which uses an IntersectionObserver. New sections inherit this with no extra work — do not add reveal wrappers per card.

## Overlays

Every `Section` wraps its content in a transformed `Reveal`, which becomes the containing block for `position: fixed` descendants. Portal modals and other overlays to `document.body`. See `fixed-position-and-transforms.md`.
