import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section id="hero" className="py-[var(--layout-hero-padding-y)]">
      <Container>
        <div className="mx-auto max-w-[var(--layout-content-width)]">
          <p className="text-muted" style={{ fontSize: "var(--layout-hero-meta-size)" }}>
            {siteConfig.location}
          </p>
          <h1
            className="mt-4 tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--layout-hero-name-size)",
              fontWeight: "var(--layout-hero-name-weight)",
            }}
          >
            {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-2xl text-muted" style={{ fontSize: "var(--layout-hero-copy-size)" }}>
            {siteConfig.headline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={siteConfig.resumeUrl}>View Resume</Button>
            <Button href={`mailto:${siteConfig.email}`} variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
