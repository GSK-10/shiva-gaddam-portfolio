import type { PropsWithChildren } from "react";
import { GlassSurface } from "@/components/ui/GlassSurface";
import { cn } from "@/lib/utils";

type InfoItem = {
  label: string;
  value: string;
};

type InfoPanelProps = PropsWithChildren<{
  title: string;
  items?: InfoItem[];
  className?: string;
}>;

export function InfoPanel({ title, items = [], className = "", children }: InfoPanelProps) {
  return (
    <GlassSurface className={cn("p-5", className)}>
      <div>
        <p
          className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {title}
        </p>
        {children ? <div className="mt-4">{children}</div> : null}
        {items.length ? (
          <dl className="mt-4 space-y-3">
            {items.map((item) => (
              <div
                key={`${item.label}-${item.value}`}
                className="grid gap-1 border-t border-[color:var(--surface-border)] pt-3 first:border-t-0 first:pt-0 sm:grid-cols-[6rem_minmax(0,1fr)] sm:items-start sm:gap-3"
              >
                <dt
                  className="text-xs uppercase tracking-[0.16em] text-muted"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.label}
                </dt>
                <dd className="text-sm font-medium leading-6 text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </GlassSurface>
  );
}
