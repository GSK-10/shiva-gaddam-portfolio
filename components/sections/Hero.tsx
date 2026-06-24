import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section id="hero" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-7xl">
          <p className="text-sm text-muted md:text-base">{siteConfig.location}</p>
          <h1
            className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted md:text-xl lg:text-[1.35rem]">{siteConfig.headline}</p>
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
