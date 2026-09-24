"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Appears once the reader has scrolled past #about and returns them to the top.
 *
 * Deliberately a scroll check rather than an IntersectionObserver on #about: an
 * observer only fires when the threshold is actually crossed, so arriving past
 * the section in one jump — a deep link like /#projects, or a restored scroll
 * position — would leave the button hidden. This evaluates the real position on
 * mount and on every scroll, so it is correct from any entry point. Reads are
 * coalesced into one rAF per frame.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const evaluate = () => {
      frame = 0;
      const about = document.getElementById("about");
      if (!about) return;
      const threshold = about.getBoundingClientRect().bottom + window.scrollY;
      setVisible(window.scrollY > threshold);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(evaluate);
    };

    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    // `scrollend` also covers programmatic jumps (scrollTo with behavior:"instant",
    // scroll restoration) which do not always emit a scroll event. Ignored by
    // browsers that do not support it, where the scroll listener is enough.
    window.addEventListener("scrollend", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("scrollend", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      onClick={() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      }}
      /* Deliberately not `.theme-shell`: that class sets `position: relative` and
         is defined after Tailwind's utilities, so it would override `fixed`.
         Styled like the secondary "View resume" button so it recedes into the
         page rather than pulling the eye. No clip-path here: it cuts along the
         element box and would clip the 1px border away with it. */
      className={`fixed bottom-5 right-4 z-40 inline-flex h-11 w-11 items-center justify-center border border-[color:var(--surface-border)] bg-[color:var(--surface-card)] text-foreground shadow-[var(--shadow-card)] transition-[opacity,transform,color,border-color,background-color] duration-300 hover:border-[color:rgb(var(--color-primary)/0.5)] hover:bg-[color:var(--accent-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:rgb(var(--color-primary)/0.68)] sm:bottom-7 sm:right-7 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      } motion-reduce:transition-none`}
    >
      <ArrowUp aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
    </button>
  );
}
