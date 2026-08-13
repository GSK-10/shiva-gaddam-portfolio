import { Section } from "@/components/layout/Section";
import { SectionCollection } from "@/components/layout/SectionCollection";
import { GlassSurface } from "@/components/ui/GlassSurface";
import { notes } from "@/content/notes";
import { sectionCopy } from "@/content/sections";

export function Notes() {
  const copy = sectionCopy.notes;

  return (
    <Section
      id="notes"
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
      <SectionCollection variant="stack">
        {notes.map((note, index) => (
          <GlassSurface key={note.title} className="p-5 sm:p-6">
            <article className="grid gap-4 sm:grid-cols-[7rem_minmax(0,1fr)]">
              <div>
                <p
                  className="text-[0.62rem] uppercase tracking-[0.18em] text-primary"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Note {String(index + 1).padStart(2, "0")}
                </p>
                <p
                  className="mt-2 text-[0.62rem] uppercase tracking-[0.14em] text-muted"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {note.theme}
                </p>
              </div>
              <div>
                <h3
                  className="text-lg font-bold uppercase leading-tight text-foreground"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {note.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{note.summary}</p>
              </div>
            </article>
          </GlassSurface>
        ))}
      </SectionCollection>
    </Section>
  );
}
