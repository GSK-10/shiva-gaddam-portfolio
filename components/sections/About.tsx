import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site";

export function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-3xl text-muted">{siteConfig.about}</p>
    </Section>
  );
}
