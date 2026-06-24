import { Section } from "@/components/layout/Section";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { experiences } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
        <div className="mt-6 grid gap-4">
          {experiences.map((experience) => (
            <ExperienceCard key={`${experience.company}-${experience.role}`} experience={experience} />
          ))}
        </div>
    </Section>
  );
}
