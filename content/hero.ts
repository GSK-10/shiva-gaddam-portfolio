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
    revealedImage: string;
    defaultAlt: string;
    revealedAlt: string;
    hintLabel: string;
    revealAriaLabel: string;
    resetAriaLabel: string;
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
    lines: ["Shiva Kumar Reddy", "Gaddam"],
    accentLineIndex: 1,
  },
  statement: {
    prefix: "I build",
    accent: "reliable",
    suffix: "software systems that scale.",
  },
  orbitReveal: {
    defaultImage: "/images/hero-orbit-reveal.png",
    revealedImage: "/images/hero-orbit-placeholder.png",
    defaultAlt: "Portrait of Shiva Kumar Reddy Gaddam",
    revealedAlt: "ADAPT motto artwork",
    hintLabel: "Click Me",
    revealAriaLabel: "Reveal ADAPT artwork",
    resetAriaLabel: "Show portrait again",
  },
};
