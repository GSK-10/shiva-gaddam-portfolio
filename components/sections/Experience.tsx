import { Section } from "@/components/layout/Section";
import { SectionCollection } from "@/components/layout/SectionCollection";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { experiences } from "@/content/experience";
import { sectionCopy } from "@/content/sections";

export function Experience() {
  const copy = sectionCopy.experience;

  return (
    <Section
      id="experience"
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
      <SectionCollection variant="stack" as="ol">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${experience.role}`}
            experience={experience}
            active={index === 0}
          />
        ))}
      </SectionCollection>
    </Section>
  );
}
