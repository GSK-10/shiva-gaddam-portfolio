import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

