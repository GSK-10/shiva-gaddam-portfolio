import { FileText } from "lucide-react";
import { Section, Surface } from "@/components/ui";
import { sectionCopy, siteConfig } from "@/content/portfolio";

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

function EvidencePoint({
  title,
  detail,
}: {
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" />
      <p className="text-sm leading-6 sm:text-base sm:leading-7">
        <span className="font-serif font-bold text-foreground">{title}</span>{" "}
        <span aria-hidden="true" className="px-1 text-primary">·</span>{" "}
        <span className="text-muted">{detail}</span>
      </p>
    </div>
  );
}

export function About() {
  const copy = sectionCopy.about;

  return (
    <Section
      id="about"
      index={copy.index}
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

          <div className="grid gap-2 border-t border-[color:var(--surface-border)] pt-6 lg:mt-auto">
            {siteConfig.aboutStats.map((stat) => (
              <EvidencePoint
                key={stat.title}
                title={stat.title}
                detail={stat.detail}
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
