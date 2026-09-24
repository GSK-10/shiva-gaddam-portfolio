import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        serif: ["var(--font-serif)"],
        display: ["var(--font-display)"],
        brand: ["var(--font-brand)"],
      },
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
        "card-foreground": "rgb(var(--color-card-foreground) / <alpha-value>)",
        /* Text-safe accent: `text-primary` must clear 4.5:1 on every section
           tone, so it reads --color-primary-text. Accent *surfaces* (the hero CTA,
           glows) keep the saturated --color-primary via --accent in theme.css. */
        primary: "rgb(var(--color-primary-text) / <alpha-value>)",
        "primary-foreground": "rgb(var(--color-primary-foreground) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
