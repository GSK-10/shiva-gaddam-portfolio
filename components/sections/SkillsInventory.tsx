"use client";

import { useState } from "react";
import { skillGroups } from "@/content/skills";

/**
 * The full skill inventory in two densities. Minimized is the default: it is a
 * scan-first layout (category label, then chips) that fits the whole inventory
 * in roughly a third of the height. The detailed view keeps the numbered,
 * serif-headed rows for anyone who wants to read rather than scan.
 */
export function SkillsInventory() {
  const [minimized, setMinimized] = useState(true);

  return (
    <div className="border-t border-[color:var(--surface-border)]">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Complete skills inventory
        </p>
        <button
          type="button"
          role="switch"
          aria-checked={minimized}
          onClick={() => setMinimized((value) => !value)}
          className="group inline-flex items-center gap-2 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:rgb(var(--color-primary)/0.68)] aria-checked:text-foreground"
        >
          <span
            aria-hidden="true"
            style={{ clipPath: "polygon(0.26rem 0, 100% 0, calc(100% - 0.26rem) 100%, 0 100%)" }}
            className={`relative inline-flex h-[1.1rem] w-[2.45rem] shrink-0 items-center border px-[0.16rem] transition-colors duration-200 ${
              minimized
                ? "border-[color:rgb(var(--color-primary)/0.55)] bg-[color:var(--accent-soft)]"
                : "border-[color:var(--surface-border)] bg-transparent"
            }`}
          >
            <span
              style={{ clipPath: "polygon(0.18rem 0, 100% 0, calc(100% - 0.18rem) 100%, 0 100%)" }}
              className={`h-[0.78rem] w-[0.92rem] transition-transform duration-200 ease-out motion-reduce:transition-none ${
                minimized
                  ? "translate-x-[1.19rem] bg-primary"
                  : "translate-x-0 bg-[color:rgb(var(--color-muted))]"
              }`}
            />
          </span>
          Min view
        </button>
      </div>

      {minimized ? <MinimizedInventory /> : <DetailedInventory />}
    </div>
  );
}

function MinimizedInventory() {
  return (
    <div className="-mx-3 mt-2">
      {skillGroups.map((group, index) => (
        <article
          key={group.title}
          className="grid grid-cols-[2.1rem_minmax(0,1fr)] gap-x-2 gap-y-2 px-3 py-3.5 transition duration-200 hover:bg-[color:var(--accent-soft)] sm:grid-cols-[2.1rem_minmax(9rem,13.5rem)_minmax(0,1fr)] sm:gap-x-4 sm:items-baseline"
        >
          <p className="font-mono text-[0.76rem] font-bold leading-6 text-primary">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-mono text-[0.82rem] font-semibold leading-6 tracking-[0.02em] text-foreground">
            {group.title}
          </h3>
          <ul className="col-start-2 flex flex-wrap items-center gap-1.5 sm:col-start-3">
            {group.items.map((item) => (
              <li
                key={item.label}
                className={
                  item.featured
                    ? "border border-[color:rgb(var(--color-primary)/0.34)] bg-[color:var(--accent-soft)] px-2.5 py-1 text-[0.86rem] font-semibold leading-5 text-foreground transition duration-200 hover:-translate-y-px hover:border-[color:rgb(var(--color-primary)/0.6)] hover:shadow-[0_0_14px_rgb(var(--color-primary)/0.14)] motion-reduce:transform-none"
                    : "border border-[color:var(--surface-border)] px-2.5 py-1 text-[0.86rem] leading-5 text-muted transition duration-200 hover:-translate-y-px hover:border-[color:rgb(var(--color-primary)/0.45)] hover:bg-[color:var(--accent-soft)] hover:text-foreground hover:shadow-[0_0_14px_rgb(var(--color-primary)/0.12)] motion-reduce:transform-none"
                }
              >
                {item.label}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function DetailedInventory() {
  return (
    <div className="-mx-3 mt-3">
      {skillGroups.map((group, index) => (
        <article
          key={group.title}
          className="relative grid gap-4 border-b border-[color:var(--surface-border)] px-3 py-6 transition duration-200 hover:z-10 hover:-translate-y-0.5 hover:bg-[color:var(--accent-soft)] hover:shadow-[var(--shadow-card-hover)] motion-reduce:transform-none sm:grid-cols-[3rem_minmax(10rem,0.36fr)_minmax(0,1fr)] sm:gap-6 sm:py-8"
        >
          <p className="font-mono text-xs font-bold text-primary">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-serif text-lg font-semibold leading-tight text-foreground sm:text-xl">
            {group.title}
          </h3>
          <ul className="flex flex-wrap content-start items-start gap-x-4 gap-y-3 sm:pt-0.5">
            {group.items.map((item) => (
              <li
                key={item.label}
                className={
                  item.featured
                    ? "normal-case border border-[color:rgb(var(--color-primary)/0.28)] bg-[color:var(--accent-soft)] px-2.5 py-1.5 text-sm font-semibold text-foreground"
                    : "normal-case border border-transparent px-2.5 py-1.5 text-sm text-muted transition duration-200 hover:-translate-y-px hover:border-[color:rgb(var(--color-primary)/0.3)] hover:bg-[color:var(--accent-soft)] hover:text-foreground hover:shadow-[0_0_18px_rgb(var(--color-primary)/0.12)] motion-reduce:transform-none"
                }
              >
                {item.label}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
