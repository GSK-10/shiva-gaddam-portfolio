import { Container } from "@/components/layout/Container";
import { HighlightCard } from "@/components/cards/HighlightCard";
import { highlights } from "@/content/highlights";

export function Highlights() {
  return (
    <section id="highlights" className="py-20">
      <Container>
        <h2 className="text-2xl font-semibold">Highlights</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {highlights.map((highlight) => (
            <HighlightCard key={highlight} highlight={highlight} />
          ))}
        </div>
      </Container>
    </section>
  );
}

