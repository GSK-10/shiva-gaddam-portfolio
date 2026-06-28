import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type GlassSurfaceProps = PropsWithChildren<{
  className?: string;
}>;

export function GlassSurface({ children, className = "" }: GlassSurfaceProps) {
  return (
    <div
      className={cn(
        "theme-surface theme-surface-interactive rounded-[var(--layout-surface-radius)] border text-card-foreground shadow-soft",
        className,
      )}
    >
      {children}
    </div>
  );
}
