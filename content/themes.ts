export type ThemeKey = "light" | "dark" | "cosmic";

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
    description: "Clean recruiter-friendly layout with soft surfaces, dark text, and a bright reading experience.",
    chips: ["White space", "Quiet contrast", "Classic portfolio feel"],
    preview: {
      background: "rgb(248 250 252)",
      foreground: "rgb(15 23 42)",
      muted: "rgb(100 116 139)",
      border: "rgb(226 232 240)",
      card: "rgb(255 255 255)",
      primary: "rgb(37 99 235)",
      primaryForeground: "rgb(255 255 255)",
      glow: "0 12px 30px rgb(15 23 42 / 0.08)",
    },
  },
  {
    key: "dark",
    name: "Dark",
    label: "Low light",
    description: "Minimal dark presentation with neutral cards and strong contrast for evening browsing.",
    chips: ["Muted glow", "Focused contrast", "Developer-friendly"],
    preview: {
      background: "rgb(9 9 11)",
      foreground: "rgb(244 244 245)",
      muted: "rgb(161 161 170)",
      border: "rgb(39 39 42)",
      card: "rgb(24 24 27)",
      primary: "rgb(244 244 245)",
      primaryForeground: "rgb(9 9 11)",
      glow: "0 12px 36px rgb(0 0 0 / 0.28)",
    },
  },
  {
    key: "cosmic",
    name: "Cosmic",
    label: "Featured",
    description: "Deep-space palette with nebula blues, violet haze, and a brighter tech-forward accent.",
    chips: ["Nebula gradients", "Starfield contrast", "Glow accents"],
    preview: {
      background: "rgb(4 8 20)",
      foreground: "rgb(240 246 255)",
      muted: "rgb(148 163 184)",
      border: "rgb(30 41 59)",
      card: "rgb(10 14 30)",
      primary: "rgb(56 189 248)",
      primaryForeground: "rgb(4 8 20)",
      glow: "0 18px 50px rgb(2 6 23 / 0.45)",
    },
  },
];

export const defaultTheme: ThemeKey = "light";
