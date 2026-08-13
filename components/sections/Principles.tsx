import { Section } from "@/components/layout/Section";
import { SectionCollection } from "@/components/layout/SectionCollection";
import { GlassSurface } from "@/components/ui/GlassSurface";
import { principles } from "@/content/principles";
import { sectionCopy } from "@/content/sections";

export function Principles() {
  const copy = sectionCopy.principles;

  return (
    <Section
      id="principles"
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
      <SectionCollection variant="grid">
        {principles.map((principle, index) => (
          <GlassSurface key={principle.title} className="h-full p-5 sm:p-6">
            <article>
              <p
                className="text-[0.62rem] uppercase tracking-[0.2em] text-primary"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Principle {String(index + 1).padStart(2, "0")}
              </p>
              <h3
                className="mt-4 text-lg font-bold uppercase leading-tight text-foreground"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{principle.detail}</p>
            </article>
          </GlassSurface>
        ))}
      </SectionCollection>
    </Section>
  );
}
