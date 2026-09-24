"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, BookOpenText, X } from "lucide-react";
import { Section, Surface } from "@/components/ui";
import { useModalDialog } from "@/components/ui/useModalDialog";
import { notes, sectionCopy } from "@/content/portfolio";

type Note = (typeof notes)[number];

function NoteDialog({ note, onClose }: { note: Note | null; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const { dialogRef, overlayRef } = useModalDialog({
    open: Boolean(note) && mounted,
    onClose,
  });

  if (!note || !mounted) return null;

  return createPortal(
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="note-dialog-title"
      className="fixed inset-0 z-[80] grid place-items-center bg-[rgb(4_8_14/0.68)] px-2 py-3 backdrop-blur-sm sm:px-4 sm:py-6"
      onMouseDown={onClose}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="theme-surface max-h-[min(46rem,calc(100svh-2rem))] w-full max-w-2xl overflow-y-auto border border-[color:var(--surface-border)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="sticky top-0 z-10 border-b border-[color:var(--surface-border)] bg-[color:var(--surface-card)] p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                {note.theme}
              </p>
              <h3
                id="note-dialog-title"
                className="mt-3 font-serif text-xl font-bold leading-tight text-foreground sm:text-2xl"
              >
                {note.title}
              </h3>
            </div>
            <button
              type="button"
              aria-label="Close note"
              title="Close"
              onClick={onClose}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-[color:var(--surface-border)] text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </header>

        <div className="grid gap-7 p-5 sm:p-6">
          <section>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Notes
            </h4>
            <ul className="mt-3 space-y-3 text-base leading-7 text-muted">
              {note.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-[color:var(--surface-border)] pt-6">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Resources
            </h4>
            <ul className="mt-3 space-y-2 text-base leading-7 text-muted">
              {note.resources.map((resource) => (
                <li key={resource}>{resource}</li>
              ))}
            </ul>
          </section>

          <section className="border-t border-[color:var(--surface-border)] pt-6">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Skills
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {note.skills.map((skill) => (
                <li
                  key={skill}
                  className="border border-[color:rgb(var(--color-primary)/0.32)] bg-[color:var(--accent-soft)] px-2.5 py-1 font-mono text-xs font-medium tracking-[0.03em] text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function Notes() {
  const [selected, setSelected] = useState<Note | null>(null);
  const copy = sectionCopy.notes;

  return (
    <Section
      id="notes"
      index={copy.index}
      title={copy.title}
      icon={BookOpenText}
      displayTitle={
        <>
          {copy.heading} <span className="text-primary">{copy.accent}</span>
        </>
      }
      tagline={copy.tagline}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {notes.map((note, index) => (
          <Surface key={note.title} className="overflow-hidden">
            <button
              type="button"
              onClick={() => setSelected(note)}
              className="group flex h-full min-h-52 w-full flex-col p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
            >
              <div className="flex w-full items-start justify-between gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  Note {String(index + 1).padStart(2, "0")} <span className="text-muted">·</span> {note.theme}
                </p>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold leading-tight text-foreground">
                {note.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{note.summary}</p>
              <span className="mt-auto pt-5 font-mono text-[0.68rem] tracking-[0.04em] text-primary">
                Open note
              </span>
            </button>
          </Surface>
        ))}
      </div>

      <NoteDialog note={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
