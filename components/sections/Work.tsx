"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Laptop, X } from "lucide-react";
import { Section, Surface } from "@/components/ui";
import { useModalDialog } from "@/components/ui/useModalDialog";
import { ENABLE_SLANTED_CARDS, sectionCopy } from "@/content/portfolio";
import { workCaseStudies, type WorkCaseStudy } from "@/content/work";

function DetailBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section>
      <h4
        className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary"
      >
        {label}
      </h4>
      <div className="mt-3 text-base leading-7 text-muted">{children}</div>
    </section>
  );
}

function WorkDialog({
  item,
  onClose,
}: {
  item: WorkCaseStudy | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const { dialogRef, overlayRef } = useModalDialog({
    open: Boolean(item) && mounted,
    onClose,
  });

  if (!item || !mounted) {
    return null;
  }

  /* Portalled to <body>: the section content sits inside a .reveal wrapper whose
     transform would otherwise become the containing block for position: fixed. */
  return createPortal(
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-dialog-title"
      className="fixed inset-0 z-[80] grid place-items-center bg-[rgb(4_8_14/0.68)] px-2 py-3 backdrop-blur-sm sm:px-4 sm:py-6"
      onMouseDown={onClose}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="theme-surface max-h-[min(46rem,calc(100svh-2rem))] w-full max-w-5xl overflow-y-auto border border-[color:var(--surface-border)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="sticky top-0 z-10 border-b border-[color:var(--surface-border)] bg-[color:var(--surface-card)] p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p
                className="font-mono text-xs uppercase tracking-[0.18em] text-primary"
              >
                {item.focus} / {item.period}
              </p>
              <h3
                id="work-dialog-title"
                className="mt-3 font-serif text-xl font-bold leading-tight text-foreground sm:text-2xl"
              >
                {item.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                {item.summary}
              </p>
            </div>
            <button
              type="button"
              aria-label="Close case study"
              title="Close"
              onClick={onClose}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-[color:var(--surface-border)] text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </header>

        <div className="grid gap-6 p-5 sm:p-6">
          <DetailBlock label="Challenge or issue">
            <p className="max-w-4xl text-foreground">{item.challenge}</p>
          </DetailBlock>

          <div className="grid gap-6 border-t border-[color:var(--surface-border)] pt-6 md:grid-cols-2 md:gap-8 md:[&>section+section]:border-l md:[&>section+section]:border-[color:var(--surface-border)] md:[&>section+section]:pl-8">
            <DetailBlock label="My contribution">
              <ul className="space-y-3">
                {item.contribution.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock label="Outcome">
              <ul className="space-y-3">
                {item.outcome.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </DetailBlock>
          </div>

          <ul className="flex flex-wrap gap-2 border-t border-[color:var(--surface-border)] pt-5">
            {item.tech.map((tech) => (
              <li
                key={tech}
                className="border border-[color:rgb(var(--color-primary)/0.32)] bg-[color:var(--accent-soft)] px-2.5 py-1 font-mono text-xs font-medium tracking-[0.03em] text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function Work() {
  const [selected, setSelected] = useState<WorkCaseStudy | null>(null);
  const copy = sectionCopy.work;

  return (
    <Section
      id="work"
      tone="base"
      index={copy.index}
      title={copy.title}
      icon={Laptop}
      displayTitle={
        <>
          {copy.heading} <span className="text-primary">{copy.accent}</span>
        </>
      }
      tagline={copy.tagline}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {workCaseStudies.map((item, index) => (
          <Surface key={item.title} slanted={ENABLE_SLANTED_CARDS} className="overflow-hidden">
            <button
              type="button"
              onClick={() => setSelected(item)}
              className="group grid h-full w-full gap-3 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <p
                  className="font-mono text-xs uppercase tracking-[0.2em] text-primary"
                >
                  Case {index + 1}
                </p>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-primary" />
              </div>
              <div>
                <h3
                  className="font-serif text-lg font-bold leading-tight text-foreground sm:text-xl"
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-muted">{item.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border border-[color:rgb(var(--color-primary)/0.32)] bg-[color:var(--accent-soft)] px-2 py-1 font-mono text-[0.65rem] font-medium tracking-[0.03em] text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 border-t border-[color:var(--surface-border)] pt-3">
                <span className="font-mono text-xs tracking-[0.06em] text-primary">
                  {item.focus}
                </span>
                <span className="text-xs text-primary">/</span>
                <span className="font-mono text-xs tracking-[0.06em] text-primary">
                  {item.period}
                </span>
              </div>
            </button>
          </Surface>
        ))}
      </div>

      <WorkDialog item={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
