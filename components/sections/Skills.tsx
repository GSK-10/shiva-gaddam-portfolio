import { Wrench } from "lucide-react";
import { Section, Surface } from "@/components/ui";
import { sectionCopy } from "@/content/portfolio";
import { recruiterFocusedSkills, skillGroups } from "@/content/skills";

function FocusedSkills() {
  return (
    <Surface interactive={false}>
      <div className="border-b border-[color:var(--surface-border)] px-4 py-3 sm:px-5">
        <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Recruiter-focused skills
        </h3>
      </div>
      <ul className="grid sm:grid-cols-2" aria-label="Recruiter-focused skills">
        {recruiterFocusedSkills.map((skill, index) => (
          <li
            key={skill}
            className="relative flex min-h-14 items-center gap-3 border-t border-[color:var(--surface-border)] bg-[color:var(--surface-card)] px-4 py-3 text-left text-sm font-semibold text-foreground first:border-t-0 transition duration-200 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:h-2 after:bg-[color:var(--surface-card)] after:opacity-0 after:transition-opacity hover:z-10 hover:-translate-y-2 hover:bg-[color:var(--accent-soft)] hover:outline hover:outline-1 hover:-outline-offset-1 hover:outline-[color:rgb(var(--color-primary)/0.62)] hover:shadow-[var(--shadow-card-hover)] hover:after:opacity-100 motion-reduce:transform-none motion-reduce:after:hidden sm:px-5 sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(even)]:border-l"
          >
            <span className="font-mono text-[0.62rem] font-bold text-primary" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </Surface>
  );
}

function CompleteSkillsList() {
  return (
    <div className="border-t border-[color:var(--surface-border)]">
      <p className="px-3 pt-6 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        Complete skills inventory
      </p>
      <div className="-mx-3 mt-3">
        {skillGroups.map((group, index) => (
          <article
            key={group.title}
            className="relative grid gap-4 border-b border-[color:var(--surface-border)] px-3 py-6 transition duration-200 hover:z-10 hover:-translate-y-0.5 hover:bg-[color:var(--accent-soft)] hover:shadow-[var(--shadow-card-hover)] motion-reduce:transform-none sm:grid-cols-[3rem_minmax(10rem,0.36fr)_minmax(0,1fr)] sm:gap-6 sm:py-8"
          >
            <p className="font-mono text-xs font-bold text-primary">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-serif text-lg font-semibold leading-tight text-foreground sm:text-xl">
              {group.title}
            </h3>
            <ul className="flex flex-wrap content-start items-start gap-x-4 gap-y-3 sm:pt-0.5">
              {group.items.map((item) => (
                <li
                  key={item.label}
                  className={
                    item.featured
                      ? "normal-case border border-[color:rgb(var(--color-primary)/0.28)] bg-[color:var(--accent-soft)] px-2.5 py-1.5 text-sm font-semibold text-foreground"
                      : "normal-case border border-transparent px-2.5 py-1.5 text-sm text-muted transition duration-200 hover:-translate-y-px hover:border-[color:rgb(var(--color-primary)/0.3)] hover:bg-[color:var(--accent-soft)] hover:text-foreground hover:shadow-[0_0_18px_rgb(var(--color-primary)/0.12)] motion-reduce:transform-none"
                  }
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const copy = sectionCopy.skills;

  return (
    <Section
      id="skills"
      index={copy.index}
      title={copy.title}
      icon={Wrench}
      displayTitle={
        <>
          {copy.heading} <span className="text-primary">{copy.accent}</span>
        </>
      }
      tagline={copy.tagline}
      fullWidthContent={<CompleteSkillsList />}
    >
      <FocusedSkills />
    </Section>
  );
}
