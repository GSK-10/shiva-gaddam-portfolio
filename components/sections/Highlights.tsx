import { Section } from "@/components/layout/Section";
import { SectionCollection } from "@/components/layout/SectionCollection";
import { HighlightCard } from "@/components/cards/HighlightCard";
import { education, highlights } from "@/content/highlights";

export function Highlights() {
  return (
    <Section id="highlights" index="06" eyebrow="Education & proof" title="Credentials">
      <div className="theme-surface border border-[color:var(--surface-border)] p-5 sm:p-6">
        <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p
              className="text-[0.62rem] uppercase tracking-[0.22em] text-primary"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Education record
            </p>
            <h3
              className="mt-3 text-xl font-bold uppercase leading-tight sm:text-2xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {education.degree}
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{education.institution}</p>
          </div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-[color:var(--surface-border)] pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <div>
              <dt className="text-[0.58rem] uppercase tracking-[0.18em] text-muted">Score</dt>
              <dd className="mt-1 font-semibold text-foreground">{education.score}</dd>
            </div>
            <div>
              <dt className="text-[0.58rem] uppercase tracking-[0.18em] text-muted">Period</dt>
              <dd className="mt-1 text-sm text-foreground">{education.period}</dd>
            </div>
          </dl>
        </div>
      </div>

      <SectionCollection variant="grid" className="mt-[var(--layout-collection-gap)] lg:grid-cols-3">
        {highlights.map((highlight, index) => (
          <HighlightCard
            key={`${highlight.label}-${highlight.title}`}
            highlight={highlight}
            rank={index + 1}
          />
        ))}
      </SectionCollection>
    </Section>
  );
}
