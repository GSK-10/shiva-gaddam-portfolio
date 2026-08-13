import { Section } from "@/components/layout/Section";
import { SkillGroupCard } from "@/components/cards/SkillGroupCard";
import { sectionCopy } from "@/content/sections";
import { skillGroups } from "@/content/skills";

export function Skills() {
  const copy = sectionCopy.skills;

  return (
    <Section
      id="skills"
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
      <div className="border-t border-[color:var(--surface-border)]">
        {skillGroups.map((skillGroup, index) => (
          <SkillGroupCard
            key={skillGroup.title}
            skillGroup={skillGroup}
            rank={index + 1}
          />
        ))}
      </div>
    </Section>
  );
}
