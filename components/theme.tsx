"use client";

import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import { Gem, MoonStar, SunMedium } from "lucide-react";
import { ThemeProvider, useTheme } from "next-themes";
import { defaultTheme, themeKeys, themes, type ThemeKey } from "@/content/themes";

const themeIcons = {
  gem: Gem,
  moon: MoonStar,
  sun: SunMedium,
};

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme={defaultTheme}
      enableSystem={false}
      disableTransitionOnChange
      storageKey="portfolio-theme"
      themes={themeKeys}
    >
      <ThemeStorageMigration />
      {children}
    </ThemeProvider>
  );
}

function ThemeStorageMigration() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") setTheme("dark-medium");
    if (theme === "royal") setTheme("dusk");
  }, [setTheme, theme]);

  return null;
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const activeKey = mounted && themeKeys.includes(theme as ThemeKey)
    ? (theme as ThemeKey)
    : defaultTheme;
  const activeTheme = themes.find(({ key }) => key === activeKey) ?? themes[0];
  const ActiveIcon = themeIcons[activeTheme.icon];

  const cycleTheme = () => {
    const currentIndex = themeKeys.indexOf(activeKey);
    setTheme(themeKeys[(currentIndex + 1) % themeKeys.length]);
  };

  return (
    <button
      type="button"
      aria-label={`Switch theme, currently ${activeTheme.label}`}
      title={`Current theme: ${activeTheme.label}`}
      onClick={cycleTheme}
      className="theme-shell inline-flex h-9 w-9 items-center justify-center border text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <ActiveIcon className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
