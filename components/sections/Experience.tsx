import { Section } from "@/components/layout/Section";
import { SectionCollection } from "@/components/layout/SectionCollection";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { experiences } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <SectionCollection variant="stack">
        {experiences.map((experience) => (
          <ExperienceCard key={`${experience.company}-${experience.role}`} experience={experience} />
        ))}
      </SectionCollection>
    </Section>
  );
}
