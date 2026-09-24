import { Wrench } from "lucide-react";
import { Section, Surface } from "@/components/ui";
import { sectionCopy } from "@/content/portfolio";
import { SkillsInventory } from "@/components/sections/SkillsInventory";
import { recruiterFocusedSkills } from "@/content/skills";

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

export function Skills() {
  const copy = sectionCopy.skills;

  return (
    <Section
      id="skills"
      tone="base"
      index={copy.index}
      title={copy.title}
      icon={Wrench}
      displayTitle={
        <>
          {copy.heading} <span className="text-primary">{copy.accent}</span>
        </>
      }
      tagline={copy.tagline}
      fullWidthContent={<SkillsInventory />}
    >
      <FocusedSkills />
    </Section>
  );
}
