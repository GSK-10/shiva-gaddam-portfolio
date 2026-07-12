import type { CSSProperties } from "react";
import { heroContent, heroHighlights } from "@/content/hero";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { HeroOrbitReveal } from "@/components/ui/HeroOrbitReveal";
import { Github, Globe, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const heroLinks = siteConfig.profileLinks.filter((link) =>
    ["Email", "LinkedIn", "GitHub"].includes(link.label),
  );

  return (
    <section
      id="hero"
      className="relative mt-[var(--layout-hero-start-offset)] flex min-h-[var(--layout-hero-min-height)] items-center overflow-hidden py-[var(--layout-hero-padding-y)]"
      style={{
        borderBottom: "1px solid var(--surface-border)",
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[58%] hidden w-[12%] lg:block"
        style={{
          background: "linear-gradient(180deg, rgb(var(--color-primary) / 0.08), transparent 88%)",
          transform: "skewX(-12deg)",
          transformOrigin: "top",
        }}
      />
      <Container>
        <div className="relative mx-auto max-w-[var(--layout-content-width)] px-[var(--layout-hero-shell-padding)] py-[calc(var(--layout-hero-shell-padding)*0.85)]">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 1 50.5 L 1 5.2 A 3.2 3.2 0 0 1 4.2 2 L 94.8 2 A 3.2 3.2 0 0 1 98 5.2 L 98 95.8 A 3.2 3.2 0 0 1 94.8 99 L 4.2 99 A 3.2 3.2 0 0 1 1 95.8 L 1 50.5"
              pathLength="100"
              fill="none"
              stroke="url(#hero-trace-gradient-top)"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeDasharray="3 97"
              className="motion-trace-loop"
            />
            {/* <rect
              x="2"
              y="2"
              width="96"
              height="96"
              rx="8.2"
              pathLength="100"
              fill="none"
              stroke="url(#hero-trace-gradient-bottom)"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeDasharray="30 70"
              className="motion-trace-loop"
              style={{ animationDelay: "-6s" } as CSSProperties}
            /> */}
            <defs>
              <linearGradient id="hero-trace-gradient-top" x1="50%" y1="0%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="var(--accent-2)" />
              </linearGradient>
              <linearGradient id="hero-trace-gradient-bottom" x1="50%" y1="100%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="var(--accent-2)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid items-start gap-[var(--layout-hero-grid-gap)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="max-w-3xl pt-1 sm:pt-4">
              <div className="mb-6 flex justify-center lg:hidden">
                <HeroOrbitReveal
                  size="var(--layout-hero-orbit-size-mobile)"
                  delay="180ms"
                  defaultImage={heroContent.orbitReveal.defaultImage}
                  defaultAlt={heroContent.orbitReveal.defaultAlt}
                  hintLabel={heroContent.orbitReveal.hintLabel}
                  revealAriaLabel={heroContent.orbitReveal.revealAriaLabel}
                  resetAriaLabel={heroContent.orbitReveal.resetAriaLabel}
                  revealQuote={heroContent.orbitReveal.revealQuote}
                  revealMarker={heroContent.orbitReveal.revealMarker}
                  revealWord={heroContent.orbitReveal.revealWord}
                  revealAccentIndex={heroContent.orbitReveal.revealAccentIndex}
                />
              </div>

              <div
                className="motion-fade-up flex flex-wrap items-center gap-2"
                style={{ "--motion-delay": "140ms" } as CSSProperties}
              >
                <div className="inline-flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-7 w-7 shrink-0 rotate-45 items-center justify-center"
                    style={{
                      backgroundColor: "var(--hero-cta-bg)",
                      color: "var(--hero-cta-text)",
                      transformOrigin: "center",
                    }}
                  >
                    <span
                      className="-rotate-45 font-semibold"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "var(--layout-hero-eyebrow-size)",
                      }}
                    >
                      #1
                    </span>
                  </span>
                  <span
                    className="inline-flex items-center gap-3 border px-4 py-2 font-medium uppercase tracking-[0.22em] text-foreground"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--layout-hero-eyebrow-size)",
                      borderColor: "var(--surface-border)",
                      color: "rgb(var(--color-primary))",
                    }}
                  >
                    <span>{heroContent.eyebrow.primary}</span>
                    <span aria-hidden="true" className="opacity-70">
                      |
                    </span>
                    <span>{heroContent.eyebrow.secondary}</span>
                  </span>
                </div>
              </div>

              <h1
                className="motion-fade-up mt-6 max-w-4xl uppercase tracking-[0.04em]"
                style={{
                  "--motion-delay": "220ms",
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--layout-hero-name-size)",
                  fontWeight: "var(--layout-hero-name-weight)",
                  lineHeight: 0.9,
                } as CSSProperties}
              >
                {heroContent.displayName.lines.map((line, index) => {
                  const isAccent = heroContent.displayName.accentLineIndex === index;

                  return (
                    <span
                      key={line}
                      className="block"
                      style={{
                        color: isAccent ? "rgb(var(--color-primary))" : undefined,
                      }}
                    >
                      {line}
                    </span>
                  );
                })}
              </h1>
              
              <p
                className="motion-fade-up mt-5 max-w-2xl border-l-2 border-[color:rgb(var(--color-primary)/0.48)] pl-4 text-pretty leading-[1.65] text-foreground"
                style={{
                  "--motion-delay": "320ms",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--layout-hero-copy-size)",
                } as CSSProperties}
              >
                {heroContent.statement.prefix} <em className="text-primary italic">{heroContent.statement.accent}</em>{" "}
                {heroContent.statement.suffix}
              </p>

              <div
                className="motion-fade-up mt-5 flex flex-wrap items-center gap-2.5"
                style={{ "--motion-delay": "420ms" } as CSSProperties}
              >
                <Button
                  href="#projects"
                  style={{
                    borderRadius: "var(--layout-hero-button-radius)",
                    paddingInline: "1.12rem",
                    paddingBlock: "0.72rem",
                  }}
                >
                  View My Work
                </Button>
                <Button
                  href={siteConfig.resumeUrl}
                  variant="secondary"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    borderRadius: "var(--layout-hero-button-radius)",
                    paddingInline: "1.12rem",
                    paddingBlock: "0.72rem",
                  }}
                >
                  View Resume
                </Button>
                <div className="ml-1 flex items-center gap-2">
                  {heroLinks.map((link) => {
                    const Icon =
                      link.label === "Email"
                        ? Mail
                        : link.label === "LinkedIn"
                          ? Linkedin
                          : link.label === "GitHub"
                            ? Github
                            : Globe;

                    return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    className="inline-flex h-10 w-10 items-center justify-center border text-muted transition-colors duration-200 hover:border-[color:rgb(var(--color-primary)/0.5)] hover:text-primary"
                    style={{
                      clipPath: "polygon(0.55rem 0, 100% 0, calc(100% - 0.55rem) 100%, 0 100%)",
                      borderColor: "var(--surface-border)",
                      backgroundColor: "rgb(var(--color-background) / 0.3)",
                      boxShadow: "var(--hero-cta-shadow)",
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative hidden min-h-[25rem] items-start justify-center lg:flex">
              <HeroOrbitReveal
                size="var(--layout-hero-orbit-size)"
                delay="240ms"
                defaultImage={heroContent.orbitReveal.defaultImage}
                defaultAlt={heroContent.orbitReveal.defaultAlt}
                hintLabel={heroContent.orbitReveal.hintLabel}
                revealAriaLabel={heroContent.orbitReveal.revealAriaLabel}
                resetAriaLabel={heroContent.orbitReveal.resetAriaLabel}
                revealQuote={heroContent.orbitReveal.revealQuote}
                revealMarker={heroContent.orbitReveal.revealMarker}
                revealWord={heroContent.orbitReveal.revealWord}
                revealAccentIndex={heroContent.orbitReveal.revealAccentIndex}
              />
            </div>
          </div>

          <div
            className="motion-fade-up mt-6 border-t border-[color:var(--surface-border)] pt-3"
            style={{ "--motion-delay": "580ms" } as CSSProperties}
          >
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:grid-cols-5">
              {heroHighlights.map((item, index) => (
                <div
                  key={item}
                  className="min-w-0 border-l border-[color:var(--surface-border)] pl-4"
                >
                  <div
                    className="text-[0.52rem] uppercase tracking-[0.28em] text-muted"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {["Exp", "Spec", "Core", "Infra", "Ops"][index] ?? "Info"}
                  </div>
                  <div
                    className="mt-1 text-[0.98rem] uppercase leading-tight text-foreground"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
