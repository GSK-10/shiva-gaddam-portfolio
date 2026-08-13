import type { CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigationItems } from "@/content/navigation";

export function Navbar() {
  return (
    <header
      className="motion-fade-up sticky top-4 z-50 px-3 sm:px-4"
      style={{ "--motion-delay": "80ms" } as CSSProperties}
    >
      <Container className="max-w-[var(--layout-navbar-container-width)]">
        <nav
          aria-label="Primary"
          className="theme-shell mx-auto flex min-h-[var(--layout-navbar-height)] w-[var(--layout-navbar-width)] items-center justify-between gap-[var(--layout-navbar-gap)] overflow-visible rounded-[var(--layout-navbar-radius)] border px-[var(--layout-navbar-padding-x)] py-[var(--layout-navbar-padding-y)]"
        >
          <a
            href="/#hero"
            className="inline-flex min-w-0 shrink-0 items-center gap-1 rounded-[var(--layout-navbar-inner-radius)] px-[var(--layout-navbar-brand-padding-x)] py-[var(--layout-navbar-brand-padding-y)] pt-2 transition-colors duration-200 sm:gap-1.5"
            style={{
              // borderColor: "var(--nav-shell-border)",
              // backgroundColor: "var(--nav-brand-bg)",
              color: "var(--nav-brand-text)",
              fontFamily: "var(--font-brand)",
              fontSize: "var(--layout-navbar-brand-size)",
            }}
          >
            <span
              className="shrink-0 bg-clip-text font-bold text-transparent"
              style={{
                letterSpacing: "0.08em",
                backgroundImage: "var(--nav-logo-gradient)",
              }}
            >
              GSK
            </span>
            <span
              aria-hidden="true"
              className="shrink-0 text-primary"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "calc(var(--layout-navbar-brand-size) * 1.35)",
                lineHeight: 1,
              }}
            >
              /
            </span>
            <span
              className="min-w-0 truncate text-[0.6rem] uppercase tracking-[0.22em] text-muted sm:text-[0.66rem]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ADAPT
            </span>
          </a>

          <ul className="ml-auto hidden flex-none items-center justify-end gap-0.5 whitespace-nowrap md:flex">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative px-[var(--layout-navbar-link-padding-x)] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 hover:[color:var(--nav-link-hover-text)]"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--color-muted)",
                    fontSize: "var(--layout-navbar-link-compact-size)",
                  }}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                    style={{
                      bottom: "var(--layout-navbar-link-underline-offset)",
                      height: "var(--layout-navbar-link-underline-height)",
                      backgroundImage: "var(--nav-link-underline)",
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-1 md:flex">
            <ThemeToggle />
          </div>

          <MobileNav items={navigationItems} />
        </nav>
      </Container>
    </header>
  );
}
