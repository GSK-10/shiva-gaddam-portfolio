import type { Highlight } from "@/content/highlights";
import { GlassSurface } from "@/components/ui/GlassSurface";

type HighlightCardProps = {
  highlight: Highlight;
  rank: number;
};

export function HighlightCard({ highlight, rank }: HighlightCardProps) {
  return (
    <GlassSurface className="h-full p-5">
      <article>
        <div className="flex items-start justify-between gap-4">
          <p
            className="text-[0.6rem] uppercase tracking-[0.22em] text-primary"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {highlight.label}
          </p>
          <span
            className="text-[0.62rem] text-muted"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {String(rank).padStart(2, "0")}
          </span>
        </div>
        <h3
          className="mt-5 text-lg font-bold uppercase"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {highlight.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{highlight.detail}</p>
      </article>
    </GlassSurface>
  );
}
