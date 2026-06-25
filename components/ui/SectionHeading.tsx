import type { PropsWithChildren } from "react";

type SectionHeadingProps = PropsWithChildren<{
  eyebrow?: string;
}>;

export function SectionHeading({ eyebrow, children }: SectionHeadingProps) {
  return (
    <div>
      {eyebrow ? (
        <p
          className="uppercase tracking-[0.25em] text-muted"
          style={{ fontSize: "var(--layout-section-heading-eyebrow-size)" }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className=""
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--layout-section-heading-title-size)",
          fontWeight: "var(--layout-section-heading-title-weight)"  
          // lineHeight: "1.05",
        }}
      >
        {children}
      </h2>
    </div>
  );
}
