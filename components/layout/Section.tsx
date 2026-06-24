import type { PropsWithChildren } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
      className={[
        "relative py-16 sm:py-20 lg:py-24",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-border/70 before:to-transparent",
        className,
      ].join(" ")}
    >
      <Container>
        <div className={["mx-auto max-w-7xl", contentClassName].join(" ")}>
          <SectionHeading eyebrow={eyebrow}>{title}</SectionHeading>
          <div className="mt-6">{children}</div>
        </div>
      </Container>
    </section>
  );
}
