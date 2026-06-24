import { Section } from "@/components/layout/Section";
import { HighlightCard } from "@/components/cards/HighlightCard";
import { highlights } from "@/content/highlights";

export function Highlights() {
  return (
    <Section id="highlights" title="Highlights">
        <div className="mt-6 flex flex-wrap gap-3">
          {highlights.map((highlight) => (
            <HighlightCard key={highlight} highlight={highlight} />
          ))}
        </div>
    </Section>
  );
}
