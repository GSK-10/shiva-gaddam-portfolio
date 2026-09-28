export type SiteLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  functionalFocus?: string;
  summary: string;
  location: string;
  start: string;
  end: string;
  tech: string[];
};

export type SectionCopy = {
  index: string;
  title: string;
  heading: string;
  accent: string;
  tagline?: string;
};

/* Optional button-style slanted edges for interactive Work and Project cards. */
export const ENABLE_SLANTED_CARDS = false;

export const siteConfig = {
  name: "Shiva Kumar Reddy Gaddam",
  role: "Software Engineer",
  headline:
    "Software Engineer building dependable automation, distributed platform environments, and cloud-native infrastructure.",
  location: "Bengaluru, India",
  email: "shiva.kumar.reddy.gaddam19@gmail.com",
  resumeUrl: "/resume/shiva-kumar-reddy-gaddam-resume.pdf",
  /* Rendered as separate <p> blocks in the About section: one idea per paragraph. */
  about: [
    "Hi, I’m Shiva Kumar Reddy Gaddam, a software engineer who spent nearly two years in Oracle’s Communications division, starting as an intern and continuing full-time, working on an enterprise service activation platform. My work spanned backend workflows, automation, Linux environments, and cloud-native deployments, along with debugging failures across services, databases, messaging systems, and deployment tooling.",
    "That experience taught me how distributed systems behave, fail, and recover. I’m now applying that operational perspective while developing deeper expertise in Java, Spring Boot, SQL, REST APIs, AWS, and backend and platform engineering.",
  ],
  aboutPanels: [
    {
      title: "Player profile",
      items: [
        { label: "Location", value: "Bengaluru, India" },
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
        { label: "Cloud", value: "GCP & AWS" },
      ],
    },
  ],
  /* Evidence points displayed beneath the About copy. */
  aboutStats: [
    {
      title: "B.Tech CSE Gold Medalist",
      detail: "VNR VJIET · 2024",
    },
    {
      title: "Knight LeetCode",
      detail: "Max rating: 2036",
    },
    {
      title: "100+ Automated Workflows",
      detail: "80% reduced release cycles · 5 days to 1 day",
    },
  ] as const,
  /* Contact form copy. Submission currently opens a pre-filled email draft. */
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
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  // Temporarily hidden while these sections are being refined.
  // { label: "Principles", href: "/#principles" },
  // { label: "Notes", href: "/notes" },
  { label: "Contact", href: "/#contact" },
];

export const sectionCopy: Record<
  "about" | "work" | "projects" | "experience" | "principles" | "skills" | "contact" | "notes",
  SectionCopy
> = {
  about: {
    index: "01",
    title: "About",
    heading: "About",
    accent: "me.",
    tagline: "Build it. Break it. Understand it. Make it dependable.",
  },
  work: {
    index: "02",
    title: "Work",
    heading: "Featured Engineering",
    accent: "Work.",
    tagline: "Sanitized explanations of my contribution. Internal names, architecture details, and business information have been omitted or generalized.",
  },
  experience: {
    index: "03",
    title: "Experience",
    heading: "Career",
    accent: "Timeline.",
    tagline: "Shortened for scanning. Full details on the resume.",
  },
  skills: {
    index: "04",
    title: "Skills",
    heading: "Technical",
    accent: "Capabilities.",
    // tagline: "A recruiter-readable inventory, with SDE/SRE-relevant strengths brought forward.",
  },
  projects: {
    index: "05",
    title: "Projects",
    heading: "Engineering",
    accent: "Projects.",
    tagline: "Academic and independent work translated into practical, end-to-end systems.",
  },
  principles: {
    index: "07",
    title: "Principles",
    heading: "Engineering",
    accent: "Principles.",
    tagline: "Short version: I like systems that are observable, repeatable, and calm under pressure.",
  },
  contact: {
    index: "06",
    title: "Contact",
    heading: "Let's",
    accent: "Connect.",
    tagline: "Have a role, project, or engineering problem in mind? Let's start a conversation.",
  },
  notes: {
    index: "01",
    title: "Notes",
    heading: "Engineering",
    accent: "Notes.",
    tagline: "A future space for short write-ups on Engineering Learnings & Resources.",
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
  eyebrow: { primary: "Software Engineer", secondary: "Ex-Oracle" },
  displayName: { lines: ["Shiva Kumar", "Reddy Gaddam"], accentLineIndex: 1 },
  statement: {
    prefix: "I build",
    reliabilityAccent: "reliable",
    bridge: "backend and platform systems, backed by enterprise",
    experienceAccent: "automation and infrastructure",
    suffix: "experience.",
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

/* Experiences are newest-first; the first entry receives the latest-event dot. */
export const experiences: Experience[] = [
  {
    company: "Oracle",
    role: "Software Engineer",
    functionalFocus: "Automation & Infrastructure",
    summary:
      "Worked in Oracle Communications on an enterprise service activation platform spanning distributed service workflows, Linux environments, and cloud-native deployments.",
    location: "Hyderabad, India",
    start: "Aug 2024",
    end: "Oct 2025",
    tech: ["Java", "Linux", "Kubernetes", "Podman", "Helm", "LISA", "Oracle DB"],
  },
  {
    company: "Oracle",
    role: "Project Intern",
    // functionalFocus: "Test Automation & Platform Environments",
    summary:
      "Built automation coverage for service workflows involving web services, JMS/XML messaging, LDAP, and dynamic routing while supporting Linux environment setup and deployment troubleshooting.",
    location: "Hyderabad, India",
    start: "Jan 2024",
    end: "Jul 2024",
    tech: ["Java", "Linux", "JMS", "XML", "LDAP", "LISA"],
  },
];

export const principles = [
  {
    title: "Keep it simple",
    detail:
      "Just because we can, doesn't mean we should. I like to understand what we're solving and what we're giving up before writing the first line.",
  },
  {
    title: "Build it reliable",
    detail:
      "Things will break — that's expected. I try to build systems where when something fails, it's easy to find out why and get it back on track.",
  },
  {
    title: "Adapt, don't defend",
    detail:
      "Requirements change, assumptions turn out wrong. I'd rather adjust the approach early than hold on to something just because I already built it.",
  },
  {
    title: "Automate & build software others can maintain",
    detail:
      "I value automating repetitive tasks, reusable components, clear failure behavior & code other engineers can understand & maintain.",
  },
];

export const notes = [
  {
    title: "Distributed Systems",
    theme: "Reliability",
    summary:
      "Practical observations on how distributed services communicate, fail, and recover.",
    points: [
      "Follow a request across service boundaries before diagnosing an isolated component.",
      "Treat timeouts, retries, partial failures, and duplicate delivery as expected system behavior.",
      "Use logs, traces, and correlation identifiers to reconstruct what happened across services.",
    ],
    resources: [
      "Designing Data-Intensive Applications",
      "Google Site Reliability Engineering",
      "Distributed Systems course notes and architecture exercises",
    ],
    skills: ["Distributed Systems", "REST APIs", "Kafka", "Observability", "Reliability"],
  },
  {
    title: "Cloud-Native Learning Curve",
    theme: "Platform Learning",
    summary:
      "A growing map of the concepts behind containers, orchestration, and dependable deployments.",
    points: [
      "Learn the container lifecycle before adding orchestration and managed cloud services.",
      "Connect Kubernetes objects to the operational problem each one is designed to solve.",
      "Validate configuration, networking, storage, and observability as part of every deployment flow.",
    ],
    resources: [
      "Kubernetes documentation",
      "AWS Skill Builder learning paths",
      "Helm and cloud-native deployment exercises",
    ],
    skills: ["Kubernetes", "Docker", "Helm", "Linux", "AWS"],
  },
  {
    title: "Automation",
    theme: "Engineering Efficiency",
    summary:
      "Notes on turning repetitive engineering work into understandable and maintainable workflows.",
    points: [
      "Automate repeatable decisions, while keeping inputs and failure states visible.",
      "Build reusable components instead of copying environment-specific execution logic.",
      "Treat useful logs, clean test data, and actionable failures as part of the automation itself.",
    ],
    resources: [
      "Java and Python automation references",
      "CI/CD pipeline documentation",
      "Reusable testing and troubleshooting checklists",
    ],
    skills: ["Java", "Python", "CI/CD", "Test Automation", "Troubleshooting"],
  },
];
