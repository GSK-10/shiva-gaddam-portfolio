import { Section } from "@/components/layout/Section";
import { SkillGroupCard } from "@/components/cards/SkillGroupCard";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Core Stack" title="Skills">
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {skillGroups.map((skillGroup) => (
            <SkillGroupCard key={skillGroup.title} skillGroup={skillGroup} />
          ))}
        </div>
    </Section>
  );
}
