"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Image from "next/image";

type HeroOrbitRevealProps = {
  className?: string;
  size: string;
  delay?: string;
  defaultImage: string;
  defaultAlt: string;
  hintLabel: string;
  revealAriaLabel: string;
  resetAriaLabel: string;
  revealQuote: string;
  revealMarker: string;
  revealWord: string;
  revealAccentIndex: number;
};

export function HeroOrbitReveal({
  className = "",
  size,
  delay = "0ms",
  defaultImage,
  defaultAlt,
  hintLabel,
  revealAriaLabel,
  resetAriaLabel,
  revealQuote,
  revealMarker,
  revealWord,
  revealAccentIndex,
}: HeroOrbitRevealProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      type="button"
      aria-pressed={revealed}
      aria-label={revealed ? resetAriaLabel : revealAriaLabel}
      onClick={() => setRevealed((value) => !value)}
      className={`motion-scale-in group relative rounded-full border border-[color:var(--surface-border)] bg-[color:var(--accent-soft)] ${className}`}
      style={
        {
          "--motion-delay": delay,
          width: size,
          height: size,
          opacity: 0.88,
          boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.05)",
        } as CSSProperties
      }
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span
          className={`absolute inset-0 transition-[opacity,filter,transform] duration-500 ease-out ${
            revealed ? "opacity-0 blur-md scale-[1.03]" : "opacity-100 blur-0 scale-100"
          }`}
        >
          <Image
            src={defaultImage}
            alt={defaultAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 384px, 168px"
            priority
          />
        </span>

        <span
          className={`absolute inset-0 transition-[opacity,filter,transform] duration-500 ease-out ${
            revealed ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-[0.98]"
          }`}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 grid place-content-center justify-items-center gap-[clamp(0.35rem,2vw,0.85rem)] px-[14%] py-[16%] text-center"
            style={{
              background:
                "radial-gradient(circle at 50% 38%, var(--surface-card-muted), rgb(var(--color-background)) 78%)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "var(--layout-hero-orbit-quote-size)",
                lineHeight: 1.18,
                color: "rgb(var(--color-foreground))",
                maxWidth: "11ch",
              }}
            >
              {revealQuote}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--layout-hero-orbit-marker-size)",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgb(var(--color-muted))",
              }}
            >
              {revealMarker}
            </span>
            <span
              aria-label={revealWord}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "var(--layout-hero-orbit-word-size)",
                letterSpacing: "0.14em",
                lineHeight: 1,
                color: "rgb(var(--color-foreground))",
              }}
            >
              {revealWord.split("").map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  style={{
                    color: index === revealAccentIndex ? "rgb(var(--color-primary))" : undefined,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </span>
        </span>
      </span>

      <span className="pointer-events-none absolute inset-0 rounded-full border border-[color:var(--surface-border)] opacity-80" />

      <span
        className={`pointer-events-none absolute bottom-[8%] left-1/2 -translate-x-1/2 rounded-[var(--layout-pill-radius)] border border-[color:var(--surface-border)] bg-[color:var(--surface-card)]/84 px-3 py-1 text-[0.66rem] uppercase tracking-[0.12em] text-foreground transition-all duration-300 ease-out ${
          revealed
            ? "translate-y-1 opacity-0"
            : "translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
        }`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {hintLabel}
      </span>
    </button>
  );
}
