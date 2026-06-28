import { Section } from "@/components/layout/Section";
import { SectionCollection } from "@/components/layout/SectionCollection";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <SectionCollection variant="stack">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </SectionCollection>
    </Section>
  );
}
