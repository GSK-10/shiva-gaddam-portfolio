import { Container } from "@/components/layout/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigationItems } from "@/content/navigation";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 px-3 sm:px-4">
      <Container className="max-w-[var(--layout-navbar-container-width)]">
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 top-1/2 -z-10 h-24 -translate-y-1/2 rounded-full blur-3xl"
            style={{ backgroundImage: "var(--nav-shell-glow)" }}
          />
          <nav
            aria-label="Primary"
            className="relative mx-auto flex w-[var(--layout-navbar-width)] min-h-[var(--layout-navbar-height)] items-center justify-between gap-[var(--layout-navbar-gap)] overflow-hidden rounded-[var(--layout-navbar-radius)] border px-[var(--layout-navbar-padding-x)] py-[var(--layout-navbar-padding-y)] backdrop-blur-2xl"
            style={{
              backgroundColor: "var(--nav-shell-bg)",
              borderColor: "var(--nav-shell-border)",
              boxShadow: "var(--nav-shell-shadow)",
            }}
          >
            <a
              href="#hero"
              className="inline-flex shrink-0 items-center rounded-[var(--layout-navbar-inner-radius)] border px-[var(--layout-navbar-brand-padding-x)] py-[var(--layout-navbar-brand-padding-y)] tracking-[-0.01em] transition-all duration-300 ease-out"
              style={{
                borderColor: "var(--nav-shell-border)",
                backgroundColor: "var(--nav-brand-bg)",
                color: "var(--nav-brand-text)",
                boxShadow: "0 0 0 1px rgb(255 255 255 / 0.04) inset",
                fontFamily: "var(--font-display)",
                fontSize: "var(--layout-navbar-brand-size)",
              }}
            >
              <span
                className="bg-clip-text px-[var(--layout-navbar-brand-padding-x)] py-[var(--layout-navbar-brand-padding-y)] text-transparent"
                style={{
                  backgroundImage: "var(--nav-logo-gradient)",
                }}
              >
                GSK
              </span>
            </a>

            <ul className="hidden ml-auto flex-none items-center justify-end gap-0.5 whitespace-nowrap md:flex">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative rounded-full px-[var(--layout-navbar-link-padding-x)] font-semibold uppercase tracking-[0.08em] transition-all duration-300 ease-out hover:[color:var(--nav-link-hover-text)]"
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

            <div className="flex shrink-0 items-center gap-1">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
