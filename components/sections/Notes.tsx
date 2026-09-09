import { BookOpenText } from "lucide-react";
import { Section, Surface } from "@/components/ui";
import { notes, sectionCopy } from "@/content/portfolio";

export function Notes() {
  const copy = sectionCopy.notes;

  return (
    <Section
      id="notes"
      index={copy.index}
      eyebrow={copy.eyebrow}
      title={copy.title}
      icon={BookOpenText}
      displayTitle={
        <>
          {copy.heading} <span className="text-primary">{copy.accent}</span>
        </>
      }
      tagline={copy.tagline}
    >
      <div className="grid gap-4">
        {notes.map((note, index) => (
          <Surface key={note.title} className="p-5 sm:p-6">
            <article className="grid gap-4 sm:grid-cols-[7rem_minmax(0,1fr)]">
              <div>
                <p
                  className="font-mono text-xs uppercase tracking-[0.18em] text-primary"
                >
                  Note {String(index + 1).padStart(2, "0")}
                </p>
                <p
                  className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-muted"
                >
                  {note.theme}
                </p>
              </div>
              <div>
                <h3
                  className="font-serif text-lg font-bold uppercase leading-tight text-foreground"
                >
                  {note.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-muted">{note.summary}</p>
              </div>
            </article>
          </Surface>
        ))}
      </div>
    </Section>
  );
}
