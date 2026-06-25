type HighlightCardProps = {
  highlight: string;
};

export function HighlightCard({ highlight }: HighlightCardProps) {
  return <span className="rounded-[var(--layout-pill-radius)] border border-border px-4 py-2 text-sm text-muted">{highlight}</span>;
}
