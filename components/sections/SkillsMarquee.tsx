import { skillsMarquee } from "@/content/skills";

function SkillRun({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-7 px-4 sm:gap-9 sm:px-6 lg:gap-11 lg:px-8"
      aria-hidden={hidden}
    >
      {skillsMarquee.map((skill) => (
        <li
          key={`${hidden ? "repeat" : "base"}-${skill}`}
          className="flex shrink-0 items-center gap-7 text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-muted sm:gap-9 lg:gap-11"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span>{skill}</span>
          <span aria-hidden="true" className="text-primary/55">
            ·
          </span>
        </li>
      ))}
    </ul>
  );
}

export function SkillsMarquee() {
  return (
    <section
      aria-label="Core and currently expanding skills"
      className="relative overflow-hidden border-y border-[color:var(--surface-border)] bg-[color:rgb(var(--color-background)/0.32)] py-3.5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,rgb(var(--color-background)),transparent)] sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,rgb(var(--color-background)),transparent)] sm:w-24" />
      <div className="skills-marquee-track flex w-max hover:[animation-play-state:paused]">
        <SkillRun />
        <SkillRun hidden />
      </div>
      <style>{`
        @keyframes skills-marquee-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .skills-marquee-track {
          animation: skills-marquee-scroll 70s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .skills-marquee-track {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
