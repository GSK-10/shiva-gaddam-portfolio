"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Gem, MoonStar, SunMedium } from "lucide-react";
import { defaultTheme, themeKeys } from "@/content/themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [initialTheme, setInitialTheme] = useState(defaultTheme);
  const themeOrder = [...themeKeys];

  useEffect(() => {
    const rootTheme = document.documentElement.getAttribute("data-theme");
    if (rootTheme && themeOrder.includes(rootTheme as (typeof themeOrder)[number])) {
      setInitialTheme(rootTheme as (typeof themeOrder)[number]);
    }
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme ?? resolvedTheme ?? initialTheme : initialTheme;
  const activeTheme = themeOrder.includes(currentTheme as (typeof themeOrder)[number])
    ? currentTheme
    : defaultTheme;

  const iconMap = {
    light: SunMedium,
    dark: MoonStar,
    steel: Gem,
  } as const;

  const ActiveIcon = iconMap[activeTheme as keyof typeof iconMap] ?? MoonStar;

  const handleCycleTheme = () => {
    const currentIndex = themeOrder.indexOf(activeTheme as (typeof themeOrder)[number]);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    setTheme(nextTheme);
  };

  return (
    <div
      className="theme-shell inline-flex shrink-0 items-center gap-0.5 rounded-[var(--layout-pill-radius)] border p-[var(--layout-toggle-shell-padding)]"
      aria-label="Theme toggle"
    >
      <button
        type="button"
        aria-label={`Switch theme, currently ${activeTheme}`}
        title={`Switch theme, currently ${activeTheme}`}
        onClick={handleCycleTheme}
        className="inline-flex h-[var(--layout-toggle-button-size)] w-[var(--layout-toggle-button-size)] items-center justify-center rounded-[var(--layout-pill-radius)] border border-transparent text-muted transition-colors duration-200 hover:border-border hover:[color:var(--nav-link-hover-text)]"
        style={{
          boxShadow: "var(--theme-toggle-shadow)",
        }}
      >
        <ActiveIcon
          className={cn(
            "h-[var(--layout-toggle-icon-size)] w-[var(--layout-toggle-icon-size)] transition-transform duration-200 ease-out",
          )}
          style={{
            opacity: 1,
            transform: "rotate(var(--theme-toggle-icon-rotate))",
          }}
        />
      </button>
    </div>
  );
}
