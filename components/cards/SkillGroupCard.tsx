import type { SkillGroup } from "@/content/skills";

type SkillGroupCardProps = {
  skillGroup: SkillGroup;
  rank: number;
};

export function SkillGroupCard({ skillGroup, rank }: SkillGroupCardProps) {
  return (
    <article className="grid gap-4 border-b border-[color:var(--surface-border)] py-6 sm:grid-cols-[4rem_minmax(11rem,0.36fr)_minmax(0,1fr)] sm:gap-6 sm:py-8">
      <p
        className="text-[0.62rem] font-bold text-primary"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {String(rank).padStart(2, "0")}
      </p>
      <div>
        <h3
          className="text-xl font-semibold leading-tight text-foreground sm:text-2xl"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {skillGroup.title}
        </h3>
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-3 sm:pt-0.5">
        {skillGroup.items.map((item) => (
          <li
            key={item.label}
            className={
              item.featured
                ? "border border-[color:rgb(var(--color-primary)/0.28)] bg-[color:var(--accent-soft)] px-2.5 py-1.5 text-sm font-semibold text-foreground"
                : "py-1.5 text-sm text-muted"
            }
          >
            {item.label}
          </li>
        ))}
      </ul>
    </article>
  );
}
