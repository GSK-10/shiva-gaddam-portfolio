import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigationItems } from "@/content/navigation";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 px-3 sm:px-4">
      <Container className="max-w-[var(--layout-navbar-container-width)]">
        <nav
          aria-label="Primary"
          className="theme-shell mx-auto flex w-[var(--layout-navbar-width)] min-h-[var(--layout-navbar-height)] items-center justify-between gap-[var(--layout-navbar-gap)] overflow-hidden rounded-[var(--layout-navbar-radius)] border px-[var(--layout-navbar-padding-x)] py-[var(--layout-navbar-padding-y)]"
        >
          <a
            href="#hero"
            className="inline-flex shrink-0 items-center rounded-[var(--layout-navbar-inner-radius)] border px-[var(--layout-navbar-brand-padding-x)] py-[var(--layout-navbar-brand-padding-y)] tracking-[-0.01em] transition-colors duration-200"
            style={{
              borderColor: "var(--nav-shell-border)",
              backgroundColor: "var(--nav-brand-bg)",
              color: "var(--nav-brand-text)",
              fontFamily: "var(--font-display)",
              fontSize: "var(--layout-navbar-brand-size)",
            }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "var(--nav-logo-gradient)",
              }}
            >
              GSK
            </span>
          </a>

          <ul className="ml-auto hidden flex-none items-center justify-end gap-0.5 whitespace-nowrap md:flex">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative rounded-full px-[var(--layout-navbar-link-padding-x)] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 hover:[color:var(--nav-link-hover-text)]"
                  style={{
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
