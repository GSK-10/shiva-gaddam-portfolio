import { FileText, GraduationCap, Swords, Target } from "lucide-react";
import { Section, Surface } from "@/components/ui";
import { sectionCopy, siteConfig } from "@/content/portfolio";

const statIcons = {
  graduation: GraduationCap,
  swords: Swords,
  target: Target,
};

function InfoPanel({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; value: string; pulse?: boolean }[];
}) {
  return (
    <Surface className="p-5">
      <div className="flex items-center gap-2.5 border-b border-[color:var(--surface-border)] pb-2.5">
        <span aria-hidden="true" className="h-3.5 w-[3px] shrink-0 bg-primary" />
        <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-foreground">
          {title}
        </p>
      </div>
      <dl className="mt-3 space-y-2">
        {items.map((item) => (
          <div
            key={`${item.label}-${item.value}`}
            className="grid gap-x-4 border-t border-[color:var(--surface-border)] pt-2 first:border-0 first:pt-0 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-baseline"
          >
            <dt className="font-mono text-[0.7rem] uppercase leading-5 tracking-[0.14em] text-muted">
              {item.label}
            </dt>
            <dd className="flex items-center gap-2 text-sm font-medium leading-5 text-foreground">
              {item.pulse && (
                <span aria-hidden="true" className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
              )}
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </Surface>
  );
}

function StatCard({
  icon,
  value,
  label,
  note,
}: {
  icon: keyof typeof statIcons;
  value: string;
  label: string;
  note: string;
}) {
  const Icon = statIcons[icon];

  return (
    <Surface className="p-5">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-5 w-[3px] shrink-0 bg-primary" />
        <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
        <p className="font-serif text-base font-bold uppercase leading-none tracking-[0.04em] text-primary sm:text-lg">
          {value}
        </p>
      </div>
      <p className="mt-2.5 text-sm font-semibold leading-6 text-foreground">{label}</p>
      <p className="mt-1 font-mono text-[0.7rem] uppercase leading-5 tracking-[0.14em] text-muted">
        {note}
      </p>
    </Surface>
  );
}

export function About() {
  const copy = sectionCopy.about;

  return (
    <Section
      id="about"
      index={copy.index}
      eyebrow={copy.eyebrow}
      title={copy.title}
      icon={FileText}
      displayTitle={
        <>
          {copy.heading} <span className="text-primary">{copy.accent}</span>
        </>
      }
      tagline={copy.tagline}
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.85fr)]">
        <div className="flex flex-col gap-8">
          <div className="max-w-[62ch] space-y-4 sm:space-y-5">
            {siteConfig.about.map((paragraph) => (
              <p
                key={paragraph}
                className="text-pretty text-base leading-7 text-foreground sm:hyphens-auto sm:text-[1.05rem] sm:leading-[1.8] sm:text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:mt-auto">
            {siteConfig.aboutStats.map((stat) => (
              <StatCard
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                note={stat.note}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {siteConfig.aboutPanels.map((panel) => (
            <InfoPanel key={panel.title} title={panel.title} items={panel.items} />
          ))}
        </div>
      </div>
    </Section>
  );
}
