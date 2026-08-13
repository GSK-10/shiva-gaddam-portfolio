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
      className={`motion-scale-in group relative border border-[color:var(--surface-border)] bg-[color:rgb(var(--color-primary)/0.03)] ${className}`}
      style={
        {
          "--motion-delay": delay,
          width: `min(${size}, 100%)`,
          height: `calc(${size} * 1.22)`,
          opacity: 0.94,
          clipPath: "polygon(0 0, calc(100% - 1.2rem) 0, 100% 1.2rem, 100% 100%, 0 100%)",
          boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.05), 0 0 0 1px var(--hero-panel-glow)",
          transform: "rotate(-4deg)",
          transformOrigin: "center",
        } as CSSProperties
      }
    >
      <span className="absolute inset-[0.25rem] overflow-hidden border border-[color:rgb(var(--color-primary)/0.18)] sm:inset-[0.35rem] lg:inset-[0.55rem]">
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
            sizes="(min-width: 1024px) 300px, 144px"
            priority
          />
          <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(3,8,14,0.34))]" />
          <span
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgb(0 0 0 / 0.08) 58%, transparent 100%)",
            }}
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
                "linear-gradient(180deg, rgb(var(--color-primary) / 0.07), transparent 42%), linear-gradient(135deg, var(--surface-card-muted), rgb(var(--color-background)))",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
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
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "rgb(var(--color-muted))",
              }}
            >
              {revealMarker}
            </span>
            <span
              aria-label={revealWord}
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                fontSize: "var(--layout-hero-orbit-word-size)",
                letterSpacing: "0.08em",
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

      <span className="pointer-events-none absolute inset-0 border border-[color:var(--surface-border)] opacity-90" />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgb(var(--color-primary) / 0.7), transparent)" }}
      />

    </button>
  );
}
