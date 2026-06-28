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
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-border/70 before:to-transparent",
        className,
      )}
    >
      <Container>
        <div className={cn("mx-auto max-w-[var(--layout-content-width)]", contentClassName)}>
          <SectionHeading eyebrow={eyebrow}>{title}</SectionHeading>
          <div className="mt-[var(--layout-section-gap)]">{children}</div>
        </div>
      </Container>
    </section>
  );
}
