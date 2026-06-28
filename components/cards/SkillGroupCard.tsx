import type { SkillGroup } from "@/content/skills";
import { GlassSurface } from "@/components/ui/GlassSurface";

type SkillGroupCardProps = {
  skillGroup: SkillGroup;
};

export function SkillGroupCard({ skillGroup }: SkillGroupCardProps) {
  return (
    <GlassSurface className="p-5">
      <article>
        <h3 className="text-lg font-medium">{skillGroup.title}</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {skillGroup.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface-card-muted)] px-3 py-1 text-sm text-muted"
              style={{
                boxShadow: "0 1px 0 rgb(255 255 255 / 0.04) inset",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </article>
    </GlassSurface>
  );
}
