import { Section } from "@/components/layout/Section";
import { SectionCollection } from "@/components/layout/SectionCollection";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <Section id="projects" index="04" eyebrow="Selected builds" title="Projects">
      <SectionCollection variant="stack">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} rank={index + 1} />
        ))}
      </SectionCollection>
    </Section>
  );
}
