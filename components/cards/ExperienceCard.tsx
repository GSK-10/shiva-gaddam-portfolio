import type { Experience } from "@/content/experience";
import { GlassSurface } from "@/components/ui/GlassSurface";

type ExperienceCardProps = {
  experience: Experience;
  active?: boolean;
};

export function ExperienceCard({ experience, active = false }: ExperienceCardProps) {
  return (
    <li>
      <GlassSurface className="overflow-hidden">
        <article className="grid md:grid-cols-[12rem_minmax(0,1fr)]">
          <header className="border-b border-[color:var(--surface-border)] bg-[color:var(--surface-card-muted)] p-5 md:border-b-0 md:border-r">
            <p
              className="text-[0.62rem] uppercase tracking-[0.24em] text-primary"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {active ? "Current event" : "Career event"}
            </p>
            <h3
              className="mt-4 text-2xl font-bold uppercase"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {experience.company}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">{experience.location}</p>
            <p
              className="mt-5 border-t border-[color:var(--surface-border)] pt-4 text-xs uppercase leading-5 text-foreground"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {experience.start}
              <span className="block text-primary">to {experience.end}</span>
            </p>
          </header>
          <div className="p-5 sm:p-6">
            <p
              className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {experience.role}
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
              {experience.bullets.map((bullet, index) => (
                <li key={bullet} className="grid grid-cols-[1.8rem_minmax(0,1fr)] gap-2">
                  <span
                    aria-hidden="true"
                    className="pt-0.5 text-[0.62rem] font-bold text-primary"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2 border-t border-[color:var(--surface-border)] pt-4">
              {experience.tech.map((item) => (
                <li
                  key={item}
                  className="border border-[color:var(--surface-border)] bg-[color:var(--surface-card-muted)] px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-muted"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </GlassSurface>
    </li>
  );
}
