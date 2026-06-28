import { Section } from "@/components/layout/Section";
import { SectionCollection } from "@/components/layout/SectionCollection";
import { SkillGroupCard } from "@/components/cards/SkillGroupCard";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Core Stack" title="Skills">
      <SectionCollection variant="grid">
        {skillGroups.map((skillGroup) => (
          <SkillGroupCard key={skillGroup.title} skillGroup={skillGroup} />
        ))}
      </SectionCollection>
    </Section>
  );
}
