import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-20">
      <Container>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4 text-muted">Open to SDE, Backend, Automation, and Infrastructure-focused roles.</p>
        <div className="mt-4 flex flex-wrap gap-4">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.links.linkedin}>LinkedIn</a>
          <a href={siteConfig.links.github}>GitHub</a>
        </div>
      </Container>
    </section>
  );
}

