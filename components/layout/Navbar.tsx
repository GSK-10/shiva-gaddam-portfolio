import type { CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigationItems } from "@/content/navigation";

export function Navbar() {
  return (
    <header
      className="motion-fade-up sticky top-0 z-50 px-3 pt-3 sm:px-4"
      style={{ "--motion-delay": "80ms" } as CSSProperties}
    >
      <Container className="max-w-[var(--layout-navbar-container-width)]">
        <nav
          aria-label="Primary"
          className="theme-shell mx-auto grid h-[var(--layout-navbar-height)] w-[var(--layout-navbar-width)] grid-cols-[minmax(0,1fr)_auto] items-center gap-[var(--layout-navbar-gap)] overflow-hidden rounded-[var(--layout-navbar-radius)] border px-[var(--layout-navbar-padding-x)] py-[var(--layout-navbar-padding-y)] md:flex md:justify-between"
        >
          <a href="#hero" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span
              className="shrink-0 bg-clip-text text-transparent"
              style={{
                fontFamily: "var(--font-brand)",
                fontSize: "var(--layout-navbar-brand-size)",
                letterSpacing: "0.08em",
                backgroundImage: "var(--nav-logo-gradient)",
              }}
            >
              GSK
            </span>
            <span
              aria-hidden="true"
              className="hidden shrink-0 text-primary sm:inline-block"
              style={{ fontFamily: "var(--font-serif)", fontSize: "1.02rem" }}
            >
              /
            </span>
            <span
              className="hidden min-w-0 truncate text-[0.66rem] uppercase tracking-[0.28em] text-muted sm:inline-block"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Portfolio
            </span>
          </a>

          <ul className="ml-auto hidden flex-none items-center justify-end gap-0.5 whitespace-nowrap md:flex">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative px-[var(--layout-navbar-link-padding-x)] py-2 font-semibold uppercase tracking-[0.22em] transition-colors duration-300 hover:[color:var(--nav-link-hover-text)]"
                  style={{
                    fontFamily: "var(--font-serif)",
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
            <div className="mr-2 hidden items-center gap-2 border px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.24em] text-muted lg:inline-flex">
              <span className="h-2 w-2 bg-primary shadow-[0_0_10px_rgb(var(--color-primary)/0.75)]" />
              Online
            </div>
            <ThemeToggle />
          </div>

          <div className="justify-self-end">
            <MobileNav items={navigationItems} />
          </div>
        </nav>
      </Container>
    </header>
  );
}
