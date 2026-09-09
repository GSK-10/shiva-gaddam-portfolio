export type SiteLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
};

export type SectionCopy = {
  index: string;
  title: string;
  eyebrow: string;
  heading: string;
  accent: string;
  tagline: string;
};

export const siteConfig = {
  name: "Shiva Kumar Reddy Gaddam",
  role: "Software Engineer",
  headline:
    "Software Engineer building dependable automation, distributed platform environments, and cloud-native infrastructure.",
  location: "Hyderabad, India",
  email: "shiva.kumar.reddy.gaddam19@gmail.com",
  resumeUrl: "/resume/shiva-kumar-reddy-gaddam-resume.pdf",
  /* Rendered as separate <p> blocks in the About section: one idea per paragraph. */
  about: [
    "Hi, I’m Shiva Kumar Reddy Gaddam, a software engineer who worked for a year and a half in Oracle’s Communications division on an enterprise service activation platform, gaining hands-on experience with backend workflows, automation, Linux environments, cloud-native deployments, and production-like debugging. Working across these layers taught me to look beyond isolated code and understand how complete systems behave, fail, and recover.",
    "My interests lie in backend and platform engineering, particularly in building dependable systems with Java, Spring Boot, SQL, REST APIs, and cloud technologies such as AWS. I bring an enterprise systems perspective to development, valuing software that is observable, maintainable, and designed for real-world operation.",
  ],
  aboutPanels: [
    {
      title: "Player profile",
      items: [
        { label: "Location", value: "Hyderabad, India" },
        { label: "Experience", value: "Oracle - Software Engineer" },
        { label: "Focus", value: "Backend / Platform / Infrastructure" },
        { label: "Core stack", value: "Java, Python, Linux, Kubernetes" },
        { label: "Status", value: "Immediate joiner", pulse: true },
      ],
    },
    {
      title: "Currently working on",
      items: [
        { label: "Frameworks", value: "Spring Boot" },
        { label: "Cloud", value: "AWS" },
      ],
    },
  ],
  /* Mini stat cards under the About grid: value is the headline, note is the detail. */
  aboutStats: [
    {
      icon: "graduation",
      value: "9.52 CGPA",
      label: "B.Tech CSE - Gold Medalist",
      note: "VNR VJIET, 2024",
    },
    {
      icon: "swords",
      value: "Knight",
      label: "LeetCode",
      note: "Max Rating: 2035",
    },
    {
      icon: "target",
      value: "100+",
      label: "Automated Workflows",
      note: "Release cycle: 80% (5 days to 1 day)",
    },
  ] as const,
  /* Copy for the contact form card. Submission composes a mailto: draft — swap
     handleSubmit in Contact.tsx for a POST if a form endpoint is added later. */
  contactForm: {
    title: "Send a message",
    fields: {
      name: { label: "Name", placeholder: "Your name" },
      email: { label: "Email", placeholder: "you@domain.com" },
      message: { label: "Message", placeholder: "What are you working on?" },
    },
    submit: "Send message",
    note: "Opens a draft in your email client.",
  },
  contactIntro:
    "Open to software engineering roles across backend, platform, infrastructure, and automation teams.",
  profileLinks: [
    { label: "Email", href: "mailto:shiva.kumar.reddy.gaddam19@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shivakumar19/" },
    { label: "GitHub", href: "https://github.com/GSK-10" },
    { label: "Codolio", href: "https://codolio.com/profile/GSK-10" },
  ] satisfies SiteLink[],
};

export const siteSeo = {
  url: "https://shivagaddam.dev",
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.headline,
  locale: "en_US",
  themeColor: { light: "#f2f4f7", dark: "#080c12" },
  shareImage: {
    url: "/images/share_preview_1200x630_final_comp.png",
    width: 1200,
    height: 630,
    alt: "Shiva Gaddam | Software Engineer preview image",
  },
};

export const navigationItems = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Principles", href: "/#principles" },
  { label: "Notes", href: "/notes" },
  { label: "Contact", href: "/#contact" },
];

export const sectionCopy: Record<
  "about" | "work" | "experience" | "principles" | "skills" | "contact" | "notes",
  SectionCopy
> = {
  about: {
    index: "01",
    title: "About",
    eyebrow: "Player profile",
    heading: "About",
    accent: "me.",
    tagline: "Build it. Break it. Understand it. Make it dependable.",
  },
  work: {
    index: "02",
    title: "Work",
    eyebrow: "Sanitized case studies",
    heading: "Featured",
    accent: "Engineering Work.",
    tagline: "Sanitized explanations of my contribution. Internal names, architecture details, and business information have been omitted or generalized.",
  },
  experience: {
    index: "03",
    title: "Experience",
    eyebrow: "Career history",
    heading: "Career",
    accent: "timeline.",
    tagline: "Shortened for scanning. Full details on the resume.",
  },
  principles: {
    index: "05",
    title: "Principles",
    eyebrow: "How I think",
    heading: "Engineering",
    accent: "principles.",
    tagline: "Short version: I like systems that are observable, repeatable, and calm under pressure.",
  },
  skills: {
    index: "04",
    title: "Skills",
    eyebrow: "Technical toolkit",
    heading: "Technical",
    accent: "capabilities.",
    tagline: "A recruiter-readable inventory, with SDE/SRE-relevant strengths brought forward.",
  },
  contact: {
    index: "06",
    title: "Contact",
    eyebrow: "Open channel",
    heading: "Contact",
    accent: "signal.",
    tagline: "Open to SDE and SRE roles where automation, reliability, and careful debugging matter.",
  },
  notes: {
    index: "01",
    title: "Notes",
    eyebrow: "Future work",
    heading: "Engineering",
    accent: "notes.",
    tagline: "A future space for short writeups on debugging, automation, release validation, and reliability thinking.",
  },
};

export const heroHighlights = [
  { label: "Exp", value: "1.5+ yrs" },
  { label: "Spec", value: "Distributed Systems" },
  { label: "Core", value: "Backend" },
  { label: "Infra", value: "Cloud-Native" },
  { label: "Ops", value: "Automation" },
];

export const heroContent = {
  eyebrow: { primary: "Ex-Oracle", secondary: "Software Engineer" },
  displayName: { lines: ["Shiva Kumar", "Reddy Gaddam"], accentLineIndex: 1 },
  statement: {
    prefix: "I build",
    accent: "reliable",
    suffix: "software systems that scale.",
  },
  orbitReveal: {
    defaultImage: "/images/hero-orbit-reveal.png",
    defaultAlt: "Portrait of Shiva Kumar Reddy Gaddam",
    revealAriaLabel: "Reveal ADAPT message",
    resetAriaLabel: "Show portrait again",
    revealQuote: "Systems evolve.",
    revealMarker: "I",
    revealWord: "ADAPT",
    revealAccentIndex: 3,
  },
};

export const experiences: Experience[] = [
  {
    company: "Oracle",
    role: "Software Engineer - QA Automation & Infrastructure",
    location: "Hyderabad, India",
    start: "Aug 2024",
    end: "Oct 2025",
    bullets: [
      "Built and automated 100+ end-to-end workflows across 4 platform components including web services, messaging, directory services, and dynamic routing.",
      "Reduced release regression cycle time by 80%, from 5 days to 1 day, across on-premises and Cloud Native environments.",
      "Upgraded Kubernetes, Podman, and Helm stacks across 3 clusters while preserving backward compatibility and coordinating rollouts with development teams.",
      "Provisioned distributed platform environments across Linux VMs, installing middleware and database clients and applying quarterly security patches across 3 release cycles.",
      "Resolved SSL configuration, database connectivity, and service parameter failures across distributed components, and mentored junior engineers on platform operations.",
    ],
    tech: ["Java", "LISA", "Kubernetes", "Podman", "Helm", "Linux", "Oracle DB"],
  },
  {
    company: "Oracle",
    role: "Project Intern",
    location: "Hyderabad, India",
    start: "Jan 2024",
    end: "Jul 2024",
    bullets: [
      "Automated end-to-end workflows for 4 core components of a distributed service activation platform using LISA.",
      "Covered web services, JMS/XML messaging, LDAP directory services, and dynamic routing across Linux-based and containerized environments.",
      "Collaborated with development teams on environment setup, infrastructure debugging, and deployment workflows.",
    ],
    tech: ["Java", "LISA", "JMS", "XML", "LDAP", "Linux"],
  },
];

export const principles = [
  {
    title: "Prefer proof over noise",
    detail:
      "I trust small reproducible checks, logs, and failure patterns more than broad claims. A fix feels real only when it survives the next run.",
  },
  {
    title: "Build for operators too",
    detail:
      "Good software is not just code that works once. It should be diagnosable, repeatable, and friendly to the person who has to debug it later.",
  },
  {
    title: "Keep learning close to delivery",
    detail:
      "I learn fastest by wiring concepts into working systems: automation suites, Linux environments, cloud-native upgrades, and API validation flows.",
  },
];

export const notes = [
  {
    title: "Debugging Distributed Test Failures",
    theme: "Reliability",
    summary:
      "Notes on reading logs, isolating SSL/configuration drift, and turning repeated failures into reusable troubleshooting steps.",
  },
  {
    title: "Cloud Native Upgrade Checklist",
    theme: "SRE",
    summary:
      "A practical checklist mindset for Kubernetes, Podman, Helm, operators, image tooling, and environment sanity validation.",
  },
  {
    title: "Automation Data Hygiene",
    theme: "SDE",
    summary:
      "How I think about keeping test data, assertions, environment properties, and suite execution aligned across releases.",
  },
];
