export type ThemeKey = "light" | "dark" | "ember";

export type ThemePreview = {
  key: ThemeKey;
  name: string;
  label: string;
  description: string;
  chips: string[];
  preview: {
    background: string;
    foreground: string;
    muted: string;
    border: string;
    card: string;
    primary: string;
    primaryForeground: string;
    glow: string;
  };
};

export const themes: ThemePreview[] = [
  {
    key: "light",
    name: "Light",
    label: "Default",
    description: "A soft pastel blue theme with bright surfaces and easy contrast.",
    chips: ["Pastel blue", "Clean cards", "Calm reading"],
    preview: {
      background: "rgb(247 251 255)",
      foreground: "rgb(23 32 51)",
      muted: "rgb(97 112 140)",
      border: "rgb(179 196 223)",
      card: "rgb(255 255 255)",
      primary: "rgb(93 125 226)",
      primaryForeground: "rgb(255 255 255)",
      glow: "0 12px 30px rgb(79 112 176 / 0.1)",
    },
  },
  {
    key: "dark",
    name: "Dark",
    label: "Low light",
    description: "The dark counterpart to the pastel blue theme with the same calm contrast.",
    chips: ["Blue night", "Low glare", "Matched pair"],
    preview: {
      background: "rgb(17 23 38)",
      foreground: "rgb(237 243 255)",
      muted: "rgb(154 169 200)",
      border: "rgb(139 162 209)",
      card: "rgb(17 23 38)",
      primary: "rgb(142 168 255)",
      primaryForeground: "rgb(10 16 24)",
      glow: "0 12px 36px rgb(0 0 0 / 0.28)",
    },
  },
  {
    key: "ember",
    name: "Ember",
    label: "Featured",
    description: "A warm dark theme with ember tones and subtle glow accents.",
    chips: ["Warm dark", "Amber glow", "Moody contrast"],
    preview: {
      background: "rgb(36 23 20)",
      foreground: "rgb(247 237 229)",
      muted: "rgb(199 171 151)",
      border: "rgb(215 161 122)",
      card: "rgb(36 23 20)",
      primary: "rgb(210 137 87)",
      primaryForeground: "rgb(19 13 11)",
      glow: "0 12px 30px rgb(210 137 87 / 0.16)",
    },
  },
];

export const defaultTheme: ThemeKey = "light";
