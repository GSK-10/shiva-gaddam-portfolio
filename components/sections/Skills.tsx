import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillGroupCard } from "@/components/cards/SkillGroupCard";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionHeading eyebrow="Core Stack">Skills</SectionHeading>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {skillGroups.map((skillGroup) => (
            <SkillGroupCard key={skillGroup.title} skillGroup={skillGroup} />
          ))}
        </div>
      </Container>
    </section>
  );
}

