# Fixed positioning breaks inside transformed ancestors

A bug we hit when adding scroll reveals, and the rule that prevents it recurring.

## Symptom

After wrapping section content in `Reveal`, opening a Work case study behaved
oddly: the backdrop did not cover the whole screen, the panel was centred inside
the Work section instead of the viewport, and its max height no longer matched
the window.

Nothing in `Work.tsx` had changed. The cause was three files away, in
`components/ui.tsx`.

## Root cause

CSS: **an element with a `transform` becomes the containing block for its
`position: fixed` descendants.** Those descendants then resolve `inset`,
percentages, and viewport-relative sizing against that ancestor instead of the
viewport.

The chain:

```
components/ui.tsx        Section wraps children in <Reveal>
components/ui/Reveal.tsx <div class="reveal"> is that wrapper
app/globals.css          .js .reveal { transform: translateY(18px) }
components/sections/Work.tsx
                         WorkDialog is `fixed inset-0` — inside that wrapper
```

So `inset-0` stopped meaning "the viewport" and started meaning "the Work
section's reveal wrapper".

## Why it originally persisted (and how the cause was removed)

The first implementation used keyframes:

```css
@keyframes app-fade-up {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0);    }   /* not `none` */
}

.reveal.is-visible {
  animation: app-fade-up 700ms ... forwards;          /* holds the last frame */
}
```

`translateY(0)` is still a transform, and `animation-fill-mode: forwards` keeps
it applied forever — so the containing block was permanent, not 700ms long.

The reveal now uses a **transition** whose settled state is `transform: none`:

```css
.js .reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 700ms ..., transform 700ms ...;
}

.js .reveal.is-visible {
  opacity: 1;
  transform: none;        /* no containing block once settled */
}
```

A transform still exists **while the transition runs**, so the hazard window is
~700ms per section rather than permanent. Portalling is still required: that
window is real, and stacking contexts are a separate reason (see below).

## Minimal reproduction

```html
<div style="transform: translateY(0)">
  <div style="position: fixed; inset: 0; background: red"></div>
</div>
```

The red box fills the outer `div`, not the screen. Delete the `transform` and it
fills the screen.

## The fix

Render the dialog through a portal so it is a direct child of `<body>`, outside
the transformed subtree.

**Before**

```tsx
if (!item) {
  return null;
}

return (
  <div role="dialog" className="fixed inset-0 z-[80] ...">
    ...
  </div>
);
```

**After** — `components/sections/Work.tsx`

```tsx
import { createPortal } from "react-dom";

const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);

if (!item || !mounted) {
  return null;
}

/* Portalled to <body>: the section content sits inside a .reveal wrapper whose
   transform would otherwise become the containing block for position: fixed. */
return createPortal(
  <div role="dialog" className="fixed inset-0 z-[80] ...">
    ...
  </div>,
  document.body,
);
```

Two details that matter:

- **`mounted` guard.** `document.body` does not exist during server rendering.
  The flag defers the portal to after hydration.
- **Hook order.** `useState` and `useEffect` stay above the early return, so the
  hook sequence is identical on every render.

## Properties that trigger this

Not just `transform`. Any of these on an ancestor creates a containing block for
fixed descendants:

| Property        | Note                                                  |
| --------------- | ----------------------------------------------------- |
| `transform`     | any value except `none`, including `translateY(0)`    |
| `filter`        | any value except `none`                                |
| `backdrop-filter` | any value except `none`                              |
| `perspective`   | any value except `none`                                |
| `contain`       | `paint`, `layout`, `strict`, `content`                 |
| `will-change`   | when naming any of the above                           |

In Tailwind terms: `translate-*`, `scale-*`, `rotate-*`, `blur-*`,
`backdrop-blur-*`, and `motion-safe:` variants of them all qualify.

## Not affected

- `position: sticky` — the sticky header inside the dialog works fine.
- `position: absolute` inside the same subtree — usually the intended behaviour.
- Elements that are siblings of the transformed element rather than descendants.

## Rule for this repo

Any overlay that must escape its section — modal, lightbox, toast, dropdown that
breaks out of a card, floating tooltip — **must be portalled to `document.body`**.
Do not rely on `position: fixed` alone.

Two reasons, both independent of the reveal:

1. `.theme-surface` sets `isolation: isolate`, which starts a new stacking
   context. `z-index` on a non-portalled overlay only competes inside it.
2. Any future `transform`, `filter`, or `blur` added anywhere up the tree
   reintroduces the containing-block problem silently.

Adding subtle animations elsewhere is safe. Animating a card, a hover state, or
an icon does not affect overlays, because those elements are not ancestors of a
portalled dialog.

When reviewing, treat `fixed` inside `components/sections/` as a smell until you
confirm it is portalled.
