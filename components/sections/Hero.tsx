import type { CSSProperties } from "react";
import { heroContent, heroHighlights, siteConfig } from "@/content/portfolio";
import { Button, Container } from "@/components/ui";
import { HeroProfileCard } from "@/components/ui/HeroProfileCard";
import { BriefcaseBusiness, FileText, Github, Globe, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const heroLinks = siteConfig.profileLinks.filter((link) =>
    ["Email", "LinkedIn", "GitHub"].includes(link.label),
  );

  return (
    <section
      id="hero"
      className="section-tone-alternate relative mt-2 flex items-start overflow-hidden border-b border-[color:var(--surface-border)] py-8 sm:mt-4 sm:py-12 lg:mt-6 lg:min-h-[min(52rem,calc(100svh-8rem))] lg:items-center"
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
        <div className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-7 lg:py-6">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 5 96 L 95 96"
              pathLength="100"
              fill="none"
              stroke="url(#hero-trace-gradient-bottom)"
              strokeWidth="0.35"
              strokeLinecap="round"
              opacity="0.32"
            />
            <path
              d="M 5 96 L 95 96"
              pathLength="100"
              fill="none"
              stroke="url(#hero-trace-gradient-bottom)"
              strokeWidth="0.95"
              strokeLinecap="round"
              strokeDasharray="22 78"
              className="motion-trace-oscillate"
            />
            <defs>
              <linearGradient id="hero-trace-gradient-bottom" x1="50%" y1="100%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="var(--accent-2)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid items-start gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-6">
            <div className="max-w-3xl pt-1 sm:pt-3 lg:pl-3 lg:pt-4">
              <div className="mb-5 flex justify-center sm:mb-6 lg:hidden">
                <HeroProfileCard
                  className="w-24 sm:w-28 md:w-32"
                  delay="180ms"
                  defaultImage={heroContent.orbitReveal.defaultImage}
                  defaultAlt={heroContent.orbitReveal.defaultAlt}
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
                <div className="inline-flex items-center gap-2 sm:gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-6 w-6 shrink-0 rotate-45 sm:h-7 sm:w-7 items-center justify-center"
                    style={{
                      backgroundColor: "var(--hero-cta-bg)",
                      color: "var(--hero-cta-text)",
                      transformOrigin: "center",
                    }}
                  >
                    <span
                      className="-rotate-45 font-serif text-xs font-semibold sm:text-sm lg:text-base"
                    >
                      #1
                    </span>
                  </span>
                  <span
                    className="inline-flex items-center gap-x-2 whitespace-nowrap border px-2.5 py-2 font-mono text-[length:min(0.6875rem,calc((100vw_-_8.5rem)/21.5))] font-medium uppercase tracking-[0.1em] text-primary sm:gap-x-3 sm:px-4 sm:text-sm sm:tracking-[0.22em] lg:text-base"
                    style={{
                      borderColor: "var(--surface-border)",
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
                className="motion-fade-up mt-5 max-w-4xl font-display text-[length:min(2rem,calc((100vw_-_4.5rem)/10.8))] font-extrabold uppercase leading-none tracking-[0.075rem] sm:mt-6 sm:text-[2.5rem] sm:tracking-[0.1rem] md:text-5xl lg:mt-7 lg:text-[length:min(3.6rem,calc(5.2vw_-_0.6rem))] lg:tracking-[0.125rem]"
                style={{
                  "--motion-delay": "220ms",
                } as CSSProperties}
              >
                {heroContent.displayName.lines.map((line, index) => {
                  const isAccent = heroContent.displayName.accentLineIndex === index;

                  return (
                    <span
                      key={line}
                      className="block whitespace-nowrap sm:whitespace-normal lg:whitespace-nowrap"
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
                className="motion-fade-up mt-5 max-w-2xl border-l-2 border-[color:rgb(var(--color-primary)/0.48)] pl-4 font-mono text-sm leading-6 text-foreground sm:mt-6 sm:text-base sm:leading-7 lg:mt-8 lg:text-lg"
                style={{
                  "--motion-delay": "320ms",
                } as CSSProperties}
              >
                {heroContent.statement.prefix}{" "}
                <span className="text-primary">{heroContent.statement.reliabilityAccent}</span>{" "}
                {heroContent.statement.bridge}{" "}
                <span className="text-primary">{heroContent.statement.experienceAccent}</span>{" "}
                {heroContent.statement.suffix}
              </p>

              <div
                className="motion-fade-up mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6 lg:mt-8"
                style={{ "--motion-delay": "420ms" } as CSSProperties}
              >
                <Button href="#work" className="gap-2">
                  <BriefcaseBusiness aria-hidden="true" className="h-4 w-4" />
                  View My Work
                </Button>
                <Button
                  href={siteConfig.resumeUrl}
                  variant="secondary"
                  target="_blank"
                  rel="noreferrer"
                  className="gap-2"
                >
                  <FileText aria-hidden="true" className="h-4 w-4 text-primary" />
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
                    className="theme-button-glow inline-flex h-10 w-10 items-center justify-center border text-muted transition duration-200 hover:-translate-y-px hover:border-[color:rgb(var(--color-primary)/0.5)] hover:bg-[color:var(--accent-soft)] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    style={{
                      clipPath: "polygon(0.55rem 0, 100% 0, calc(100% - 0.55rem) 100%, 0 100%)",
                      borderColor: "var(--surface-border)",
                      backgroundColor: "rgb(var(--color-background) / 0.3)",
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative hidden min-h-[18rem] items-center justify-center pt-8 lg:flex">
              <HeroProfileCard
                className="w-60"
                delay="240ms"
                defaultImage={heroContent.orbitReveal.defaultImage}
                defaultAlt={heroContent.orbitReveal.defaultAlt}
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
            className="motion-fade-up mt-6 border-t border-[color:var(--surface-border)] pt-3 sm:mt-7 sm:pt-4 lg:mt-16"
            style={{ "--motion-delay": "580ms" } as CSSProperties}
          >
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:grid-cols-5">
              {heroHighlights.map((item) => (
                <div
                  key={item.label}
                  className="min-w-0 border-l border-[color:var(--surface-border)] pl-4"
                >
                  <div
                    className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
                  >
                    {item.label}
                  </div>
                  <div
                    className="mt-1 font-serif text-[1.1rem] leading-tight text-foreground"
                  >
                    {item.value}
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
