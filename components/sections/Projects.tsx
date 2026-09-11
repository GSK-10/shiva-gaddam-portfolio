import {
  AudioLines,
  ExternalLink,
  FileText,
  Github,
  Images,
  LibraryBig,
  Network,
} from "lucide-react";
import Image from "next/image";
import { Button, Section, Surface } from "@/components/ui";
import { sectionCopy, siteConfig } from "@/content/portfolio";
import { projects, type Project } from "@/content/projects";

const previewIcons = {
  network: Network,
  audio: AudioLines,
  publications: LibraryBig,
};

function ProjectAction({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof Github;
}) {
  const classes =
    "inline-flex items-center justify-center gap-2 border px-3 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${classes} theme-button-glow border-[color:var(--hero-cta-border)] bg-[color:var(--hero-cta-bg)] text-[color:var(--hero-cta-text)] transition hover:-translate-y-px hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
    >
      <Icon aria-hidden="true" className="h-3.5 w-3.5" />
      {label}
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const PreviewIcon = previewIcons[project.kind];

  return (
    <Surface className="flex h-full flex-col overflow-hidden">
      <div className="flex min-h-12 items-center gap-2 px-4 py-3 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:px-5">
        <span className="text-primary">{project.label}</span>
        {project.category && (
          <>
            <span aria-hidden="true" className="text-muted">·</span>
            <span className="text-muted">{project.category}</span>
          </>
        )}
        {project.status && (
          <>
            <span aria-hidden="true" className="text-muted">·</span>
            <span className="text-primary">{project.status}</span>
          </>
        )}
      </div>

      <div className="relative grid aspect-[5/2] place-items-center overflow-hidden border-b border-t border-[color:var(--surface-border)] bg-[color:var(--surface-card-muted)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--color-primary)/0.09) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-primary)/0.09) 1px, transparent 1px)",
            backgroundSize: "1.5rem 1.5rem",
          }}
        />
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.imageAlt ?? `${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 92vw"
            className="relative object-contain p-2"
          />
        ) : (
          <div className="relative flex flex-col items-center text-center">
            <span className="grid h-12 w-12 place-items-center border border-[color:rgb(var(--color-primary)/0.35)] bg-[color:var(--accent-soft)] text-primary sm:h-14 sm:w-14">
              <PreviewIcon aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.4} />
            </span>
            <span className="mt-3 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted">
              Preview image
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-serif text-base font-bold uppercase leading-tight text-foreground sm:text-lg">
          {project.title}
        </h3>
        <p className="mt-2.5 text-sm leading-6 text-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${project.title} technologies`}>
          {project.tech.map((technology) => (
            <li
              key={technology}
              className="border border-[color:rgb(var(--color-primary)/0.32)] bg-[color:var(--accent-soft)] px-2 py-0.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.08em] text-foreground"
            >
              {technology}
            </li>
          ))}
        </ul>

        {(project.githubUrl || project.liveUrl || project.publicationUrl) && (
          <div className="mt-auto flex flex-wrap gap-2 border-t border-[color:var(--surface-border)] pt-4">
            {project.githubUrl && (
              <ProjectAction href={project.githubUrl} label="GitHub" icon={Github} />
            )}
            {project.liveUrl && (
              <ProjectAction href={project.liveUrl} label="Live" icon={ExternalLink} />
            )}
            {project.publicationUrl && (
              <ProjectAction href={project.publicationUrl} label="SSRG IJEEE 2025" icon={FileText} />
            )}
          </div>
        )}
      </div>
    </Surface>
  );
}

export function Projects() {
  const copy = sectionCopy.projects;
  const githubProfile = siteConfig.profileLinks.find((link) => link.label === "GitHub");

  return (
    <Section
      id="projects"
      index={copy.index}
      eyebrow={copy.eyebrow}
      title={copy.title}
      icon={Images}
      displayTitle={
        <>
          {copy.heading} <span className="text-primary">{copy.accent}</span>
        </>
      }
      tagline={copy.tagline}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {githubProfile && (
        <div className="mt-7 flex justify-start">
          <Button
            href={githubProfile.href}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className="gap-2"
          >
            <Github className="h-4 w-4" />
            View GitHub Profile
          </Button>
        </div>
      )}
    </Section>
  );
}
