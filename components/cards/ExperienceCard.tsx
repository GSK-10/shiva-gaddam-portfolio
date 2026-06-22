import type { Experience } from "@/content/experience";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="rounded-lg border border-border bg-card p-5 text-card-foreground">
      <header>
        <h3 className="text-lg font-medium">{experience.company}</h3>
        <p className="text-sm text-muted">
          {experience.role} | {experience.start} - {experience.end}
        </p>
      </header>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
        {experience.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

