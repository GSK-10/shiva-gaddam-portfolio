"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Flame, MoonStar, SunMedium } from "lucide-react";
import { themes } from "@/content/themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [initialTheme, setInitialTheme] = useState("light");

  useEffect(() => {
    const rootTheme = document.documentElement.getAttribute("data-theme");
    if (rootTheme) {
      setInitialTheme(rootTheme);
    }
    setMounted(true);
  }, []);

  const activeTheme = mounted ? theme ?? resolvedTheme ?? initialTheme : initialTheme;
  const themeOrder = themes.map((item) => item.key);

  const iconMap = {
    light: SunMedium,
    dark: MoonStar,
    ember: Flame,
  } as const;

  const ActiveIcon = iconMap[activeTheme as keyof typeof iconMap];

  const handleCycleTheme = () => {
    const currentIndex = themeOrder.indexOf(activeTheme as (typeof themeOrder)[number]);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    setTheme(nextTheme);
  };

  return (
    <div
      className="theme-shell inline-flex items-center gap-0.5 rounded-[var(--layout-pill-radius)] border p-[var(--layout-toggle-shell-padding)]"
      aria-label="Theme toggle"
    >
      <button
        type="button"
        aria-label={`Switch theme, currently ${activeTheme}`}
        title={`Switch theme, currently ${activeTheme}`}
        onClick={handleCycleTheme}
        className="inline-flex h-[var(--layout-toggle-button-size)] w-[var(--layout-toggle-button-size)] items-center justify-center rounded-[var(--layout-pill-radius)] border border-transparent text-muted transition-colors duration-200 hover:border-border hover:[background-color:var(--nav-link-hover-bg)] hover:[color:var(--nav-link-hover-text)]"
        style={{
          boxShadow: "var(--theme-toggle-shadow)",
        }}
      >
        <ActiveIcon
          className={cn(
            "h-[var(--layout-toggle-icon-size)] w-[var(--layout-toggle-icon-size)] transition-transform duration-200 ease-out",
          )}
          style={{
            opacity: mounted ? 1 : 0,
            transform: "rotate(var(--theme-toggle-icon-rotate))",
          }}
        />
      </button>
    </div>
  );
}
