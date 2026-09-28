/**
 * Theme registry: order controls the toggle cycle and the first entry is the
 * default. Palette values live in styles/theme.css so components only consume
 * semantic CSS variables.
 */
export const themes = [
  { key: "dusk", label: "Dusk", icon: "gem" },
  { key: "light", label: "Light", icon: "sun" },
  { key: "dark-medium", label: "Dark", icon: "moon" },
  // { key: "indigo", label: "Indigo", icon: "sparkles" },
] as const;

/* Additional stored palettes live in theme.css as `dark-light`,
   `dark-veryHigh`, `steel`, and `indigo`. They are intentionally absent here, so the
   visible theme cycle remains Dusk -> Light -> Dark. */

export type ThemeKey = (typeof themes)[number]["key"];

export const themeKeys = themes.map(({ key }) => key) as ThemeKey[];
export const defaultTheme: ThemeKey = themes[0].key;
