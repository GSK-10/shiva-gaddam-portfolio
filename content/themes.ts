/**
 * Theme registry: order controls the toggle cycle and the first entry is the
 * default. Palette values live in styles/theme.css so components only consume
 * semantic CSS variables.
 */
export const themes = [
  { key: "dark", label: "Dark", icon: "moon" },
  { key: "light", label: "Light", icon: "sun" },
  { key: "steel", label: "Steel", icon: "gem" },
] as const;

export type ThemeKey = (typeof themes)[number]["key"];

export const themeKeys = themes.map(({ key }) => key) as ThemeKey[];
export const defaultTheme: ThemeKey = themes[0].key;
