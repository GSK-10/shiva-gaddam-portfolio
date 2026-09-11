import { BriefcaseBusiness, FileText } from "lucide-react";
import { Button, Section, Surface } from "@/components/ui";
import {
  experiences,
  sectionCopy,
  siteConfig,
  type Experience as ExperienceItem,
} from "@/content/portfolio";

function ExperienceCard({ item, latest }: { item: ExperienceItem; latest: boolean }) {
  return (
    <li className="relative">
      {/* Timeline node, centred on the rail drawn by the parent <ol>. */}
      <span
        aria-hidden="true"
        className={`absolute left-[-1.55rem] top-7 block h-3 w-3 rounded-full border-2 border-primary sm:left-[-2.375rem] ${
          latest ? "bg-primary" : "bg-background"
        }`}
      />
      {/* Connector from the node to the card edge. */}
      <span
        aria-hidden="true"
        className="absolute left-[-1.15rem] top-[2.125rem] block h-px w-[1.15rem] bg-[color:var(--surface-border)] sm:left-[-1.625rem] sm:w-[1.625rem]"
      />
      <Surface className="group overflow-hidden">
        <article className="grid md:grid-cols-[12rem_minmax(0,1fr)]">
          <header className="border-b border-[color:var(--surface-border)] bg-[color:var(--surface-card-muted)] p-5 transition-colors duration-200 group-hover:bg-[color:var(--accent-soft)] md:border-b-0 md:border-r">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Career event
            </p>
            <h3 className="mt-4 font-serif text-2xl font-bold uppercase">
              {item.company}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">{item.location}</p>
            <p className="mt-5 border-t border-[color:var(--surface-border)] pt-4 font-mono text-xs uppercase leading-5 text-foreground">
              {item.start}
              <span className="block text-primary">to {item.end}</span>
            </p>
          </header>

          <div className="p-5 sm:p-6">
            <p className="font-serif text-sm font-semibold uppercase tracking-[0.08em] text-foreground">
              {item.role}
            </p>
            <p className="mt-3 max-w-[68ch] text-sm leading-6 text-muted sm:text-base sm:leading-7">
              {item.summary}
            </p>
            <ul className="mt-5 space-y-3 text-base leading-7 text-muted">
              {item.bullets.map((bullet, index) => (
                <li key={bullet} className="grid grid-cols-[1.8rem_minmax(0,1fr)] gap-2">
                  <span className="font-mono text-xs font-bold leading-7 text-primary" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2 border-t border-[color:var(--surface-border)] pt-4">
              {item.tech.map((tech) => (
                <li
                  key={tech}
                  className="border border-[color:rgb(var(--color-primary)/0.32)] bg-[color:var(--accent-soft)] px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-[0.1em] text-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Surface>
    </li>
  );
}

export function Experience() {
  const copy = sectionCopy.experience;

  return (
    <Section
      id="experience"
      index={copy.index}
      eyebrow={copy.eyebrow}
      title={copy.title}
      icon={BriefcaseBusiness}
      displayTitle={
        <>
          {copy.heading} <span className="text-primary">{copy.accent}</span>
        </>
      }
      tagline={copy.tagline}
    >
      <ol className="relative grid gap-4 pl-6 sm:pl-12">
        <span
          aria-hidden="true"
          className="absolute left-[0.3rem] top-2 block w-px bg-[color:var(--surface-border)] sm:left-4"
          style={{ height: "calc(100% - 1rem)" }}
        />
        {experiences.map((item, index) => (
          <ExperienceCard
            key={`${item.company}-${item.role}`}
            item={item}
            latest={index === 0}
          />
        ))}
      </ol>
      <div className="mt-7 flex justify-start pl-6 sm:pl-12">
        <Button
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          className="gap-2"
        >
          <FileText className="h-4 w-4" />
          View Resume
        </Button>
      </div>
    </Section>
  );
}
