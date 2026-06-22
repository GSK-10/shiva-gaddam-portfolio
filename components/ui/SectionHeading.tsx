import type { PropsWithChildren } from "react";

type SectionHeadingProps = PropsWithChildren<{
  eyebrow?: string;
}>;

export function SectionHeading({ eyebrow, children }: SectionHeadingProps) {
  return (
    <div>
      {eyebrow ? <p className="text-sm uppercase tracking-wide text-muted">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold">{children}</h2>
    </div>
  );
}

