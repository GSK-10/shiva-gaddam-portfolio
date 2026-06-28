import type { ElementType, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type SectionCollectionProps<T extends ElementType = "div"> = PropsWithChildren<{
  as?: T;
  variant?: "stack" | "grid" | "wrap";
  className?: string;
}>;

const variantClasses = {
  stack: "grid gap-[var(--layout-collection-gap)]",
  grid: "grid gap-[var(--layout-collection-gap)] md:grid-cols-2",
  wrap: "flex flex-wrap gap-3",
} as const;

export function SectionCollection<T extends ElementType = "div">({
  as,
  variant = "stack",
  className,
  children,
}: SectionCollectionProps<T>) {
  const Component = as ?? "div";

  return <Component className={cn(variantClasses[variant], className)}>{children}</Component>;
}
