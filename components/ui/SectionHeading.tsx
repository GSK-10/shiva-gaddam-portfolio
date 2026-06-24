import type { PropsWithChildren } from "react";

type SectionHeadingProps = PropsWithChildren<{
  eyebrow?: string;
}>;

export function SectionHeading({ eyebrow, children }: SectionHeadingProps) {
  return (
    <div>
      {eyebrow ? <p className="text-xs uppercase tracking-[0.25em] text-muted md:text-sm">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold sm:text-3xl lg:text-[2.1rem]" style={{ fontFamily: "var(--font-display)" }}>
        {children}
      </h2>
    </div>
  );
}
