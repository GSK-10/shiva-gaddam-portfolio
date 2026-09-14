"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme";
import { Container } from "@/components/ui";
import { navigationItems } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.pathname !== "/") {
      const currentPage = navigationItems.find(
        (item) => item.href === window.location.pathname,
      );
      setActiveHref(currentPage?.href ?? null);
      return;
    }

    const sections = navigationItems.flatMap((item) => {
      if (!item.href.startsWith("/#")) return [];
      const element = document.getElementById(item.href.slice(2));
      return element ? [{ href: item.href, element }] : [];
    });
    const visibleSections = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const href = `/#${entry.target.id}`;
          if (entry.isIntersecting) visibleSections.add(href);
          else visibleSections.delete(href);
        });

        setActiveHref(
          sections.find(({ href }) => visibleSections.has(href))?.href ?? null,
        );
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );

    sections.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="motion-fade-up sticky top-3 z-50 px-2 sm:top-4 sm:px-4">
      <Container>
        <nav
          aria-label="Primary"
          className="theme-shell mx-auto flex min-h-12 max-w-[76rem] items-center justify-between gap-2 border px-2 sm:px-3"
        >
          <a
            href="/#hero"
            className="inline-flex min-w-0 items-center gap-1.5 px-2 py-2 font-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span
              className="shrink-0 bg-clip-text text-base font-bold tracking-[0.08em] text-transparent sm:text-lg"
              style={{ backgroundImage: "var(--nav-logo-gradient)" }}
            >
              GSK
            </span>
            <span className="shrink-0 font-serif text-xl text-primary">/</span>
            <span className="min-w-0 truncate font-mono text-xs uppercase tracking-[0.2em] text-muted">
              DEV
            </span>
          </a>

          <ul className="ml-auto hidden items-center whitespace-nowrap lg:flex">
            {navigationItems.map((item) => {
              const active = activeHref === item.href;
              return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active ? "location" : undefined}
                  className={cn(
                    "group relative px-2 py-2 text-xs font-semibold tracking-[0.02em] transition-colors focus-visible:outline-none focus-visible:text-primary lg:px-3 lg:text-sm",
                    active ? "text-primary" : "text-muted hover:text-foreground",
                  )}
                >
                  <span className="relative inline-block">
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-0.5 left-0 right-[0.06em] h-0.5 origin-left transition-transform group-hover:scale-x-100 group-focus-visible:scale-x-100",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                      style={{ backgroundImage: "var(--nav-link-underline)" }}
                    />
                  </span>
                </a>
              </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          <div ref={menuRef} className="relative flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setOpen((value) => !value)}
              className="theme-shell inline-flex h-9 w-9 items-center justify-center border text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>

            <div
              id="mobile-navigation"
              className={cn(
                "absolute right-0 top-[calc(100%+0.65rem)] w-[min(17rem,calc(100vw-1rem))] border border-[color:var(--surface-border)] bg-[color:var(--nav-shell-bg)] p-2 shadow-2xl transition duration-200",
                open
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0",
              )}
            >
              <p className="border-b border-[color:var(--surface-border)] px-3 pb-2 pt-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                Navigation
              </p>
              <div className="grid pt-1">
                {navigationItems.map((item) => {
                  const active = activeHref === item.href;
                  return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "location" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "px-3 py-3 text-sm font-semibold tracking-[0.02em] transition-colors hover:bg-[color:var(--accent-soft)] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary",
                      active
                        ? "bg-[color:var(--accent-soft)] text-primary"
                        : "text-muted",
                    )}
                  >
                    {item.label}
                  </a>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
