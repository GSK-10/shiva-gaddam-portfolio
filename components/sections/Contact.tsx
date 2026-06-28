import { Section } from "@/components/layout/Section";
import { SectionCollection } from "@/components/layout/SectionCollection";
import { siteConfig } from "@/content/site";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-muted">{siteConfig.contactIntro}</p>
      <SectionCollection variant="wrap" className="mt-4">
        {siteConfig.profileLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label === "Email" ? siteConfig.email : link.label}
          </a>
        ))}
      </SectionCollection>
    </Section>
  );
}
