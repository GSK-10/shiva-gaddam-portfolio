import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-border bg-card p-5 text-card-foreground">
      <h3 className="text-lg font-medium">{project.title}</h3>
      <p className="mt-2 text-sm text-muted">{project.description}</p>
    </article>
  );
}

