import type { PropsWithChildren } from "react";

type SectionHeadingProps = PropsWithChildren<{
  eyebrow?: string;
}>;

export function SectionHeading({ eyebrow, children }: SectionHeadingProps) {
  return (
    <div>
      {eyebrow ? (
        <p
          className="mb-3 uppercase tracking-[0.32em] text-muted"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--layout-section-heading-eyebrow-size)",
          }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="uppercase tracking-[0.1em]"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--layout-section-heading-title-size)",
          fontWeight: "var(--layout-section-heading-title-weight)",
        }}
      >
        {children}
      </h2>
    </div>
  );
}
