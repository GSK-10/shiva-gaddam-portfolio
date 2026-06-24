"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonStar, Orbit, SunMedium } from "lucide-react";
import { themes } from "@/content/themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted ? theme ?? resolvedTheme ?? "light" : "light";
  const themeOrder = themes.map((item) => item.key);

  const iconMap = {
    light: SunMedium,
    dark: MoonStar,
    cosmic: Orbit,
  } as const;

  const ActiveIcon = iconMap[activeTheme as keyof typeof iconMap];

  const activeButtonGlow =
    activeTheme === "light"
      ? "0 0 0 1px rgb(124 58 237 / 0.18), 0 0 18px rgb(124 58 237 / 0.16)"
      : activeTheme === "dark"
        ? "0 0 0 1px rgb(90 104 130 / 0.18), 0 0 18px rgb(90 104 130 / 0.14)"
        : "0 0 0 1px rgb(56 189 248 / 0.18), 0 0 18px rgb(56 189 248 / 0.18)";

  const iconRotation =
    activeTheme === "light" ? "rotate-0" : activeTheme === "dark" ? "rotate-12" : "rotate-180";

  const handleCycleTheme = () => {
    const currentIndex = themeOrder.indexOf(activeTheme as (typeof themeOrder)[number]);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    setTheme(nextTheme);
  };

  return (
    <div
      className="inline-flex items-center gap-0.5 rounded-full border p-[0.1rem] backdrop-blur-2xl"
      aria-label="Theme toggle"
      style={{
        backgroundColor: "var(--nav-shell-bg)",
        borderColor: "var(--nav-shell-border)",
        boxShadow: "var(--nav-shell-shadow)",
      }}
    >
      {/*
      Previous direct theme selection logic preserved for rollback.
      {themes.map((item) => {
        const selected = activeTheme === item.key;
        const Icon = iconMap[item.key];

        return (
          <button
            key={item.key}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={item.name}
            title={item.name}
            onClick={() => setTheme(item.key)}
            className={[
              "inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ease-out",
              selected
                ? "scale-105 border-primary bg-primary text-primary-foreground shadow-soft"
                : "border-transparent text-muted hover:scale-105 hover:border-border hover:[background-color:var(--nav-link-hover-bg)] hover:[color:var(--nav-link-hover-text)]",
            ].join(" ")}
          >
            <Icon className="h-[0.95rem] w-[0.95rem]" />
          </button>
        );
      })}
      */}

      <button
        type="button"
        aria-label={`Switch theme, currently ${activeTheme}`}
        title={`Switch theme, currently ${activeTheme}`}
        onClick={handleCycleTheme}
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-muted transition-all duration-300 ease-out hover:scale-105 hover:border-border hover:[background-color:var(--nav-link-hover-bg)] hover:[color:var(--nav-link-hover-text)]"
        style={{
          boxShadow: activeButtonGlow,
        }}
      >
        <ActiveIcon className={`h-[0.9rem] w-[0.9rem] transition-transform duration-300 ease-out ${iconRotation}`} />
      </button>
    </div>
  );
}
