export type SiteLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  summary: string;
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
  { label: "Principles", href: "/#principles" },
  { label: "Notes", href: "/notes" },
  { label: "Contact", href: "/#contact" },
];

export const sectionCopy: Record<
  "about" | "work" | "projects" | "experience" | "principles" | "skills" | "contact" | "notes",
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
  projects: {
    index: "05",
    title: "Projects",
    eyebrow: "Selected builds",
    heading: "Engineering",
    accent: "projects.",
    tagline: "Academic and independent work translated into practical, end-to-end systems.",
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
    index: "06",
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
    index: "07",
    title: "Contact",
    eyebrow: "Open channel",
    heading: "Let's",
    accent: "connect.",
    tagline: "Have a role, project, or engineering problem in mind? Let's start a conversation.",
  },
  notes: {
    index: "01",
    title: "Notes",
    eyebrow: "Future work",
    heading: "Engineering",
    accent: "notes.",
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

/* Experiences are newest-first; the first entry receives the latest-event dot. */
export const experiences: Experience[] = [
  {
    company: "Oracle",
    role: "Software Engineer - QA Automation & Infrastructure",
    summary:
      "Software engineering, automation, and infrastructure responsibilities for an enterprise service activation platform.",
    location: "Hyderabad, India",
    start: "Aug 2024",
    end: "Oct 2025",
    bullets: [
      "Built and automated 100+ end-to-end workflows across 4 platform components, reducing regression time by 80% from 5 days to 1 day.",
      "Upgraded and supported Linux and cloud-native environments across 3 clusters, covering provisioning, security patches, and distributed-system debugging.",
    ],
    tech: ["Java", "LISA", "Kubernetes", "Podman", "Helm", "Linux", "Oracle DB"],
  },
  {
    company: "Oracle",
    role: "Project Intern",
    summary:
      "Test automation and environment support for distributed service workflows across Linux and containerized platforms.",
    location: "Hyderabad, India",
    start: "Jan 2024",
    end: "Jul 2024",
    bullets: [
      "Automated end-to-end workflows across 4 core components covering web services, JMS/XML messaging, LDAP, and dynamic routing.",
      "Collaborated with development teams on environment setup, infrastructure troubleshooting, and containerized deployment workflows.",
    ],
    tech: ["Java", "LISA", "JMS", "XML", "LDAP", "Linux"],
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
