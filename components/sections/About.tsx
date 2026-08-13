import { Section } from "@/components/layout/Section";
import { InfoPanel } from "@/components/ui/InfoPanel";
import { sectionCopy } from "@/content/sections";
import { siteConfig } from "@/content/site";

export function About() {
  const copy = sectionCopy.about;

  return (
    <Section
      id="about"
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
      <div className="grid gap-[var(--layout-collection-gap)] lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.85fr)]">
        <div className="max-w-3xl">
          <p className="text-pretty text-lg leading-8 text-foreground sm:text-xl sm:leading-9">
            {siteConfig.about}
          </p>
          <p
            className="mt-6 border-l-2 border-primary pl-4 text-xs uppercase tracking-[0.18em] text-muted"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Build it. Break it. Understand it. Make it dependable.
          </p>
        </div>
        <div className="grid gap-[var(--layout-collection-gap)]">
          {siteConfig.aboutPanels.map((panel) => (
            <InfoPanel key={panel.title} title={panel.title} items={panel.items} />
          ))}
        </div>
      </div>
    </Section>
  );
}
