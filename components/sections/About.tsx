import { Section } from "@/components/layout/Section";
import { InfoPanel } from "@/components/ui/InfoPanel";
import { siteConfig } from "@/content/site";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-[var(--layout-collection-gap)] lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.85fr)]">
        <div className="max-w-3xl">
          <p className="text-pretty text-base leading-8 text-muted sm:text-[1.02rem]">
            {siteConfig.about}
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
