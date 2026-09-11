/**
 * Theme registry: order controls the toggle cycle and the first entry is the
 * default. Palette values live in styles/theme.css so components only consume
 * semantic CSS variables.
 */
export const themes = [
  { key: "dark-medium", label: "Dark", icon: "moon" },
  { key: "light", label: "Light", icon: "sun" },
  { key: "dusk", label: "Dusk", icon: "gem" },
] as const;

/* Additional stored palettes live in theme.css as `dark-light`,
   `dark-veryHigh`, and `steel`. They are intentionally absent here, so the
   visible theme cycle remains Dark -> Light -> Dusk. */

export type ThemeKey = (typeof themes)[number]["key"];

export const themeKeys = themes.map(({ key }) => key) as ThemeKey[];
export const defaultTheme: ThemeKey = themes[0].key;
