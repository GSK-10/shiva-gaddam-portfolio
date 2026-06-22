import { Container } from "@/components/layout/Container";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { experiences } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <Container>
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 grid gap-4">
          {experiences.map((experience) => (
            <ExperienceCard key={`${experience.company}-${experience.role}`} experience={experience} />
          ))}
        </div>
      </Container>
    </section>
  );
}

