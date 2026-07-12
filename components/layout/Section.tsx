import type { PropsWithChildren } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type SectionProps = PropsWithChildren<{
  id: string;
  eyebrow?: string;
  title: string;
  className?: string;
  contentClassName?: string;
}>;

export function Section({ id, eyebrow, title, className = "", contentClassName = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-[var(--layout-section-padding-y)]",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[rgb(var(--color-primary)/0.45)] before:to-transparent",
        className,
      )}
    >
      <Container>
        <div className={cn("mx-auto max-w-[var(--layout-content-width)]", contentClassName)}>
          <div className="mb-[var(--layout-section-gap)] flex items-end justify-between gap-4 border-b border-[color:var(--surface-border)] pb-5">
            <SectionHeading eyebrow={eyebrow}>{title}</SectionHeading>
            <span
              className="hidden text-[0.68rem] uppercase tracking-[0.28em] text-muted md:inline-block"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {id}
            </span>
          </div>
          <div className="mt-[var(--layout-section-gap)]">{children}</div>
        </div>
      </Container>
    </section>
  );
}
