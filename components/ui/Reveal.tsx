"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger this block against its siblings. */
  delay?: string;
};

/**
 * Reveals its children once they scroll into view. The hidden state lives in
 * `.js .reveal` (see globals.css) so that visitors without JavaScript — and the
 * prerendered HTML crawlers read — still get fully visible content.
 */
export function Reveal({ children, className, delay = "0ms" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Older browsers: show immediately rather than trapping content at opacity 0.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ "--motion-delay": delay } as CSSProperties}
    >
      {children}
    </div>
  );
}
