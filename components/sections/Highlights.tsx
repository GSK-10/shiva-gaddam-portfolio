import { Section } from "@/components/layout/Section";
import { SectionCollection } from "@/components/layout/SectionCollection";
import { HighlightCard } from "@/components/cards/HighlightCard";
import { highlights } from "@/content/highlights";

export function Highlights() {
  return (
    <Section id="highlights" title="Highlights">
      <SectionCollection variant="wrap">
        {highlights.map((highlight) => (
          <HighlightCard key={highlight} highlight={highlight} />
        ))}
      </SectionCollection>
    </Section>
  );
}
