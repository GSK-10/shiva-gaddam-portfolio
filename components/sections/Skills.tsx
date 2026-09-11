import { Wrench } from "lucide-react";
import { Section } from "@/components/ui";
import { sectionCopy } from "@/content/portfolio";
import { skillGroups } from "@/content/skills";

export function Skills() {
  const copy = sectionCopy.skills;

  return (
    <Section
      id="skills"
      index={copy.index}
      eyebrow={copy.eyebrow}
      title={copy.title}
      icon={Wrench}
      displayTitle={
        <>
          {copy.heading} <span className="text-primary">{copy.accent}</span>
        </>
      }
      tagline={copy.tagline}
    >
      <div className="-mx-3 border-t border-[color:var(--surface-border)]">
        {skillGroups.map((group, index) => (
          <article
            key={group.title}
            className="relative grid gap-4 border-b border-[color:var(--surface-border)] px-3 py-6 transition duration-200 hover:z-10 hover:-translate-y-0.5 hover:bg-[color:var(--accent-soft)] hover:shadow-[var(--shadow-card-hover)] motion-reduce:transform-none sm:grid-cols-[3rem_minmax(10rem,0.36fr)_minmax(0,1fr)] sm:gap-6 sm:py-8"
          >
            <p className="font-mono text-xs font-bold text-primary">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-serif text-xl font-semibold leading-tight text-foreground sm:text-2xl">
              {group.title}
            </h3>
            <ul className="flex flex-wrap content-start items-start gap-x-4 gap-y-3 sm:pt-0.5">
              {group.items.map((item) => (
                <li
                  key={item.label}
                  className={
                    item.featured
                      ? "border border-[color:rgb(var(--color-primary)/0.28)] bg-[color:var(--accent-soft)] px-2.5 py-1.5 text-sm font-semibold text-foreground"
                      : "border border-transparent px-2.5 py-1.5 text-sm text-muted transition duration-200 hover:-translate-y-px hover:border-[color:rgb(var(--color-primary)/0.3)] hover:bg-[color:var(--accent-soft)] hover:text-foreground hover:shadow-[0_0_18px_rgb(var(--color-primary)/0.12)] motion-reduce:transform-none"
                  }
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
