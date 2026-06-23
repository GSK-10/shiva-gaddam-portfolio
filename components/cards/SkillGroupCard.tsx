import type { SkillGroup } from "@/content/skills";

type SkillGroupCardProps = {
  skillGroup: SkillGroup;
};

export function SkillGroupCard({ skillGroup }: SkillGroupCardProps) {
  return (
    <article className="rounded-lg border border-border bg-card p-5 text-card-foreground">
      <h3 className="text-lg font-medium">{skillGroup.title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skillGroup.items.map((item) => (
          <li key={item} className="rounded-full border border-border px-3 py-1 text-sm text-muted">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

