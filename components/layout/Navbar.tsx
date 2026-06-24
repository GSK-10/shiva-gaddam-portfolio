import { Container } from "@/components/layout/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigationItems } from "@/content/navigation";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 px-3 sm:px-4">
      <Container className="max-w-[55rem]">
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 top-1/2 -z-10 h-24 -translate-y-1/2 rounded-full blur-3xl"
            style={{ backgroundImage: "var(--nav-shell-glow)" }}
          />
          <nav
            aria-label="Primary"
            className="relative flex min-h-[3.3rem] items-center justify-between gap-2 overflow-hidden rounded-[2.3rem] border px-2.5 py-1 backdrop-blur-2xl sm:px-3 sm:py-1"
            style={{
              backgroundColor: "var(--nav-shell-bg)",
              borderColor: "var(--nav-shell-border)",
              boxShadow: "var(--nav-shell-shadow)",
            }}
          >
            <a
              href="#hero"
              className="inline-flex shrink-0 items-center rounded-[1.15rem] border px-2 py-[0.18rem] text-[1rem]  tracking-[-0.01em] transition-all duration-300 ease-out md:text-[1.22rem] lg:text-[1.32rem]"
              style={{
                borderColor: "var(--nav-shell-border)",
                backgroundColor: "var(--nav-brand-bg)",
                color: "var(--nav-brand-text)",
                boxShadow: "0 0 0 1px rgb(255 255 255 / 0.04) inset",
                fontFamily: "var(--font-display)",
              }}
            >
              <span
                className="bg-clip-text text-transparent px-2.5"
                style={{
                  backgroundImage: "var(--nav-logo-gradient)",
                }}
              >
                GSK
              </span>
            </a>

            <ul className="hidden flex-1 items-center justify-end gap-0.5 md:flex">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative rounded-full px-4 text-[0.8rem] font-semibold uppercase tracking-[0.08em] transition-all duration-300 ease-out md:text-[0.84rem] lg:text-[0.89rem] hover:[color:var(--nav-link-hover-text)]"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-[0.15rem] h-[1.5px] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                      style={{ backgroundImage: "var(--nav-link-underline)" }}
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
