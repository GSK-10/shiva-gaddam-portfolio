import type { Project } from "@/content/projects";
import { GlassSurface } from "@/components/ui/GlassSurface";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  rank: number;
};

export function ProjectCard({ project, rank }: ProjectCardProps) {
  return (
    <GlassSurface className="overflow-hidden">
      <article className="relative p-5 sm:p-7">
        <div
          aria-hidden="true"
          className="absolute right-4 top-2 text-6xl font-bold leading-none text-[color:rgb(var(--color-primary)/0.08)] sm:right-7 sm:text-8xl"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {String(rank).padStart(2, "0")}
        </div>
        <header className="relative pr-12 sm:pr-24">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p
              className="text-[0.62rem] uppercase tracking-[0.22em] text-primary"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {project.kind}
            </p>
            {project.year ? (
              <span
                className="border-l border-[color:var(--surface-border)] pl-3 text-[0.62rem] text-muted"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {project.year}
              </span>
            ) : null}
          </div>
          <h3
            className="mt-3 max-w-3xl text-xl font-bold uppercase leading-tight sm:text-2xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {project.title}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{project.description}</p>
        </header>

        <div className="relative mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_15rem]">
          <ul className="space-y-3 text-sm leading-6 text-muted">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div>
            {project.publication ? (
              <p className="border-l-2 border-primary bg-[color:var(--accent-soft)] px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-foreground">
                Published / {project.publication}
              </p>
            ) : null}
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <li
                  key={item}
                  className="border border-[color:var(--surface-border)] px-2 py-1 text-[0.62rem] uppercase tracking-[0.1em] text-muted"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
            {project.githubUrl || project.liveUrl ? (
              <div className="mt-4 flex gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} source code`}
                    title="Source code"
                    className="text-muted transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live site`}
                    title="Live site"
                    className="text-muted transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </article>
    </GlassSurface>
  );
}
