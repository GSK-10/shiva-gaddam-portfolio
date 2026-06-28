import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8">
      <Container>
        <div className="theme-shell mx-auto max-w-[var(--layout-content-width)] rounded-[var(--layout-surface-radius)] border px-5 py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <span>
                {"\u00A9"} {year}
              </span>
              <span aria-hidden="true">·</span>
              <span>{siteConfig.name}</span>
              <span aria-hidden="true">·</span>
              <span>{siteConfig.location}</span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              {siteConfig.profileLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn("group relative text-muted transition-colors duration-200")}
                  style={{
                    color: "var(--color-muted)",
                  }}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                    style={{
                      bottom: "var(--layout-navbar-link-underline-offset)",
                      height: "var(--layout-navbar-link-underline-height)",
                      backgroundImage: "var(--nav-link-underline)",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
