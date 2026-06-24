import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-muted">Open to SDE, Backend, Automation, and Infrastructure-focused roles.</p>
      <div className="mt-4 flex flex-wrap gap-4">
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        <a href={siteConfig.links.linkedin}>LinkedIn</a>
        <a href={siteConfig.links.github}>GitHub</a>
      </div>
    </Section>
  );
}
