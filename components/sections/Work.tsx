"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionCollection } from "@/components/layout/SectionCollection";
import { GlassSurface } from "@/components/ui/GlassSurface";
import { sectionCopy } from "@/content/sections";
import { workCaseStudies, type WorkCaseStudy } from "@/content/work";

function DetailBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section>
      <h4
        className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-primary"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </h4>
      <div className="mt-3 text-sm leading-6 text-muted">{children}</div>
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
  useEffect(() => {
    if (!item) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-dialog-title"
      className="fixed inset-0 z-[80] grid place-items-center bg-[rgb(4_8_14/0.68)] px-4 py-6 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        className="theme-surface max-h-[min(46rem,calc(100svh-2rem))] w-full max-w-4xl overflow-y-auto border border-[color:var(--surface-border)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="sticky top-0 z-10 border-b border-[color:var(--surface-border)] bg-[color:var(--surface-card)] p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p
                className="text-[0.62rem] uppercase tracking-[0.2em] text-primary"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {item.focus} / {item.period}
              </p>
              <h3
                id="work-dialog-title"
                className="mt-3 text-xl font-bold uppercase leading-tight text-foreground sm:text-2xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {item.title}
              </h3>
            </div>
            <button
              type="button"
              aria-label="Close case study"
              title="Close"
              onClick={onClose}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--layout-pill-radius)] border border-[color:var(--surface-border)] text-muted transition-colors hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </header>

        <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_17rem]">
          <div className="grid gap-6">
            <DetailBlock label="Challenge or issue">
              <p>{item.challenge}</p>
            </DetailBlock>

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

          <aside className="border-t border-[color:var(--surface-border)] pt-5 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
            <p
              className="text-[0.62rem] uppercase tracking-[0.18em] text-muted"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Sanitized evidence
            </p>
            <p className="mt-3 text-sm leading-6 text-foreground">{item.evidence}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <li
                  key={tech}
                  className="border border-[color:var(--surface-border)] bg-[color:var(--surface-card-muted)] px-2 py-1 text-[0.62rem] uppercase tracking-[0.1em] text-muted"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}

export function Work() {
  const [selected, setSelected] = useState<WorkCaseStudy | null>(null);
  const copy = sectionCopy.work;

  return (
    <Section
      id="work"
      index={copy.index}
      eyebrow={copy.eyebrow}
      title={copy.title}
      displayTitle={
        <>
          {copy.heading} <span className="text-primary">{copy.accent}</span>
        </>
      }
      tagline={copy.tagline}
    >
      <SectionCollection variant="grid">
        {workCaseStudies.map((item, index) => (
          <GlassSurface key={item.title} className="overflow-hidden">
            <button
              type="button"
              onClick={() => setSelected(item)}
              className="group grid h-full w-full gap-5 p-5 text-left sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <p
                  className="text-[0.62rem] uppercase tracking-[0.2em] text-primary"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Case {String(index + 1).padStart(2, "0")}
                </p>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-primary" />
              </div>
              <div>
                <h3
                  className="text-lg font-bold uppercase leading-tight text-foreground sm:text-xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.summary}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 border-t border-[color:var(--surface-border)] pt-4">
                <span
                  className="text-[0.62rem] uppercase tracking-[0.12em] text-muted"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.focus}
                </span>
                <span className="text-[0.62rem] text-primary">/</span>
                <span
                  className="text-[0.62rem] uppercase tracking-[0.12em] text-muted"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.period}
                </span>
              </div>
            </button>
          </GlassSurface>
        ))}
      </SectionCollection>

      <WorkDialog item={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
