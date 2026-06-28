"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

type MobileNavItem = {
  label: string;
  href: string;
};

type MobileNavProps = {
  items: MobileNavItem[];
};

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative md:hidden">
      <div className="flex items-center gap-1">
        <ThemeToggle />
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
          className="theme-shell inline-flex h-[var(--layout-menu-button-size)] w-[var(--layout-menu-button-size)] items-center justify-center rounded-[var(--layout-pill-radius)] border text-muted transition-colors duration-200 hover:[color:var(--nav-link-hover-text)]"
        >
          {open ? (
            <X className="h-[var(--layout-menu-icon-size)] w-[var(--layout-menu-icon-size)]" />
          ) : (
            <Menu className="h-[var(--layout-menu-icon-size)] w-[var(--layout-menu-icon-size)]" />
          )}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "theme-shell absolute right-0 top-[calc(100%+0.75rem)] z-50 min-w-52 rounded-[var(--layout-surface-radius)] border p-2 shadow-soft transition-[opacity,transform,visibility] duration-200 ease-out",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
        )}
      >
        <div className="border-b border-[color:var(--surface-border)] px-3 pb-2 pt-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
          Menu
        </div>
        <div className="grid gap-[var(--layout-menu-panel-gap)]">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-[calc(var(--layout-surface-radius)-0.5rem)] px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-muted transition-colors duration-300 hover:[color:var(--nav-link-hover-text)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
