export type HeroContent = {
  eyebrow: {
    primary: string;
    secondary: string;
  };
  status?: string;
  displayName: {
    lines: string[];
    accentLineIndex?: number;
  };
  statement: {
    prefix: string;
    accent: string;
    suffix: string;
  };
  orbitReveal: {
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
};

/* Hero copy lives here so section-level edits stay separate
   from global site metadata and SEO. */
export const heroHighlights = ["1.5+ yrs", "Distributed Systems", "Backend", "Cloud", "Automation"];

export const heroContent: HeroContent = {
  eyebrow: {
    primary: "Ex-Oracle",
    secondary: "Software Engineer",
  },
  // status: "Available",
  displayName: {
    lines: ["Shiva Kumar", "Reddy Gaddam"],
    accentLineIndex: 1,
  },
  statement: {
    prefix: "I build",
    accent: "reliable",
    suffix: "software systems that scale.",
  },
  orbitReveal: {
    defaultImage: "/images/hero-orbit-reveal.png",
    defaultAlt: "Portrait of Shiva Kumar Reddy Gaddam",
    hintLabel: "Click Me",
    revealAriaLabel: "Reveal ADAPT message",
    resetAriaLabel: "Show portrait again",
    revealQuote: "Changes happen.",
    revealMarker: "I",
    revealWord: "ADAPT",
    revealAccentIndex: 3,
  },
};
