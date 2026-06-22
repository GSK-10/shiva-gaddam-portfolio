import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="border-b border-border py-24">
      <Container>
        <p className="text-sm text-muted">{siteConfig.location}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">{siteConfig.name}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{siteConfig.headline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={siteConfig.resumeUrl}>View Resume</Button>
          <Button href={`mailto:${siteConfig.email}`} variant="secondary">
            Contact Me
          </Button>
        </div>
      </Container>
    </section>
  );
}

