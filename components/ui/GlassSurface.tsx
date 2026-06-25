import type { PropsWithChildren } from "react";

type GlassSurfaceProps = PropsWithChildren<{
  className?: string;
}>;

export function GlassSurface({ children, className = "" }: GlassSurfaceProps) {
  return (
    <div
      className={[
        "rounded-[var(--layout-surface-radius)] border text-card-foreground shadow-soft backdrop-blur-2xl",
        "border-[color:var(--glass-border)] bg-[color:var(--surface-glass)]",
        className,
      ].join(" ")}
      style={{
        boxShadow: "var(--shadow-card)",
      }}
    >
      {children}
    </div>
  );
}
