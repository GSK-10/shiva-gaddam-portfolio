import type { Project } from "@/content/projects";
import { GlassSurface } from "@/components/ui/GlassSurface";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlassSurface className="p-5">
      <article>
      <h3 className="text-lg font-medium">{project.title}</h3>
      <p className="mt-2 text-sm text-muted">{project.description}</p>
      </article>
    </GlassSurface>
  );
}
