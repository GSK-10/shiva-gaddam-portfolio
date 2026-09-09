import { Lightbulb } from "lucide-react";
import { Section, Surface } from "@/components/ui";
import { principles, sectionCopy } from "@/content/portfolio";

export function Principles() {
  const copy = sectionCopy.principles;

  return (
    <Section
      id="principles"
      index={copy.index}
      eyebrow={copy.eyebrow}
      title={copy.title}
      icon={Lightbulb}
      displayTitle={
        <>
          {copy.heading} <span className="text-primary">{copy.accent}</span>
        </>
      }
      tagline={copy.tagline}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {principles.map((principle, index) => (
          <Surface key={principle.title} className="h-full p-5 sm:p-6">
            <article>
              <p
                className="font-mono text-xs uppercase tracking-[0.2em] text-primary"
              >
                Principle {String(index + 1).padStart(2, "0")}
              </p>
              <h3
                className="mt-4 font-serif text-lg font-bold uppercase leading-tight text-foreground"
              >
                {principle.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-muted">{principle.detail}</p>
            </article>
          </Surface>
        ))}
      </div>
    </Section>
  );
}
