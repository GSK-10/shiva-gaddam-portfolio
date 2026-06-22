import type { PropsWithChildren } from "react";

type FadeInProps = PropsWithChildren<{
  className?: string;
}>;

export function FadeIn({ children, className = "" }: FadeInProps) {
  return <div className={className}>{children}</div>;
}

