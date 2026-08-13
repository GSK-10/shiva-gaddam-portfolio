import type { PropsWithChildren, ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type SectionProps = PropsWithChildren<{
  id: string;
  index?: string;
  eyebrow?: string;
  title: string;
  displayTitle?: ReactNode;
  tagline?: string;
  className?: string;
  contentClassName?: string;
}>;

export function Section({
  id,
  index,
  eyebrow,
  title,
  displayTitle,
  tagline,
  className = "",
  contentClassName = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-[var(--layout-section-padding-y)]",
        className,
      )}
    >
      <Container>
        <div
          className={cn(
            "mx-auto grid max-w-[var(--layout-content-width)] gap-8 border-t border-[color:var(--surface-border)] pt-7 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12",
            contentClassName,
          )}
        >
          <div className="lg:pr-5">
            <p
              className="flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {index ? <span className="text-primary">{index}</span> : null}
              {index ? <span aria-hidden="true" className="text-muted">/</span> : null}
              <span className="text-muted">{title}</span>
            </p>
            <div className="mt-5">
              <SectionHeading eyebrow={eyebrow}>{displayTitle ?? title}</SectionHeading>
              {tagline ? (
                <p className="mt-5 max-w-[18rem] text-sm leading-7 text-foreground sm:text-base">
                  {tagline}
                </p>
              ) : null}
            </div>
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </Container>
    </section>
  );
}
