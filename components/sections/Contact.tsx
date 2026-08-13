import { Section } from "@/components/layout/Section";
import { SectionCollection } from "@/components/layout/SectionCollection";
import { sectionCopy } from "@/content/sections";
import { siteConfig } from "@/content/site";
import { ArrowUpRight, FileText } from "lucide-react";

export function Contact() {
  const copy = sectionCopy.contact;

  return (
    <Section
      id="contact"
      index={copy.index}
      eyebrow={copy.eyebrow}
      title={copy.title}
      displayTitle={
        <>
          {copy.heading} <span className="text-primary">{copy.accent}</span>
        </>
      }
      tagline={copy.tagline}
    >
      <p className="max-w-2xl text-lg leading-8 text-foreground">{siteConfig.contactIntro}</p>
      <SectionCollection variant="wrap" className="mt-7">
        {siteConfig.profileLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 border-b border-[color:var(--surface-border)] py-2 text-sm text-muted transition-colors hover:border-primary hover:text-foreground"
          >
            <span className={link.label === "Email" ? "break-all" : undefined}>
              {link.label === "Email" ? siteConfig.email : link.label}
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ))}
      </SectionCollection>
      <a
        href={siteConfig.resumeUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 bg-primary px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground"
        style={{
          clipPath: "polygon(0.75rem 0, 100% 0, calc(100% - 0.75rem) 100%, 0 100%)",
          fontFamily: "var(--font-serif)",
        }}
      >
        <FileText className="h-4 w-4" />
        Resume dossier
      </a>
    </Section>
  );
}
