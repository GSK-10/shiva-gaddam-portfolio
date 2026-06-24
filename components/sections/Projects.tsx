import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
        <div className="mt-6 grid gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
    </Section>
  );
}
