import type { CSSProperties } from "react";
import { heroContent, heroHighlights } from "@/content/hero";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { HeroOrbitReveal } from "@/components/ui/HeroOrbitReveal";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mt-[var(--layout-hero-start-offset)] flex min-h-[var(--layout-hero-min-height)] items-center overflow-hidden py-[var(--layout-hero-padding-y)]"
      style={{
        borderBottom: "1px solid var(--surface-border)",
      }}
    >
      <Container>
        <div className="theme-shell relative mx-auto max-w-[var(--layout-content-width)] rounded-[var(--layout-surface-radius)] border px-[var(--layout-hero-shell-padding)] py-[calc(var(--layout-hero-shell-padding)*1.2)] lg:rounded-none lg:border-transparent lg:bg-transparent lg:shadow-none">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-55"
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

          <div className="grid items-center gap-[var(--layout-hero-grid-gap)] lg:grid-cols-[minmax(0,1.28fr)_minmax(16rem,0.72fr)]">
            <div className="max-w-3xl">
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
                <span
                  className="inline-flex items-center gap-3 rounded-[var(--layout-pill-radius)] border px-4 py-2 font-medium uppercase tracking-[0.12em] text-foreground"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--layout-hero-eyebrow-size)",
                    borderColor: "var(--surface-border)",
                    backgroundColor: "var(--accent-soft)",
                    color: "rgb(var(--color-primary))",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="rounded-full bg-current"
                    style={{
                      width: "var(--layout-hero-eyebrow-dot-size)",
                      height: "var(--layout-hero-eyebrow-dot-size)",
                    }}
                  />
                  <span>{heroContent.eyebrow.primary}</span>
                  <span aria-hidden="true" className="opacity-70">
                    |
                  </span>
                  <span>{heroContent.eyebrow.secondary}</span>
                </span>
              </div>
              <h1
                className="motion-fade-up mt-8 max-w-4xl tracking-[-0.03em]"
                style={{
                  "--motion-delay": "220ms",
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--layout-hero-name-size)",
                  fontWeight: "var(--layout-hero-name-weight)",
                  lineHeight: 0.95,
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
                className="motion-fade-up mt-6 max-w-2xl text-balance text-[1.6rem] leading-none text-foreground sm:text-[1.95rem]"
                style={{ "--motion-delay": "320ms", fontFamily: "var(--font-serif)" } as CSSProperties}
              >
                {heroContent.statement.prefix} <em className="text-primary italic">{heroContent.statement.accent}</em>{" "}
                {heroContent.statement.suffix}
              </p>

              <div
                className="motion-fade-up mt-8 flex flex-wrap gap-3"
                style={{ "--motion-delay": "420ms" } as CSSProperties}
              >
                <Button
                  href="#experience"
                  style={{
                    borderRadius: "var(--layout-hero-button-radius)",
                    paddingInline: "1.25rem",
                    paddingBlock: "0.625rem",
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
                    paddingInline: "1.25rem",
                    paddingBlock: "0.625rem",
                  }}
                >
                  View Resume
                </Button>
              </div>
              
              <div
                className="motion-fade-up mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm"
                style={{ "--motion-delay": "520ms" } as CSSProperties}
              >
                {siteConfig.profileLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative inline-flex items-center gap-1 pb-1 text-muted transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "rgb(var(--color-primary))",
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 translate-y-[-1px] transition-transform duration-200 ease-out group-hover:translate-x-[1px] group-hover:translate-y-[-2px]" />
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                      style={{
                        height: "var(--layout-navbar-link-underline-height)",
                        backgroundImage: "var(--nav-link-underline)",
                      }}
                    />
                  </a>
                ))}
              </div>

              <div
                className="motion-fade-up mt-6 flex max-w-3xl flex-wrap gap-3"
                style={{ "--motion-delay": "580ms" } as CSSProperties}
              >
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center border px-3.5 py-1.5 text-[0.84rem] text-foreground"
                    style={{
                      fontFamily: "var(--font-mono)",
                      borderRadius: "var(--layout-hero-button-radius)",
                      borderColor: "var(--surface-border)",
                      backgroundColor: "rgb(var(--color-foreground) / 0.05)",
                      color: "rgb(var(--color-foreground))",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative hidden min-h-[22rem] items-center justify-center lg:flex">
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
          
        </div>
      </Container>
    </section>
  );
}
