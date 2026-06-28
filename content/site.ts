export type SiteLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Shiva Kumar Reddy Gaddam",
  role: "Software Engineer",
  headline:
    "Software engineer building dependable backend systems, automation, and tools that make teams move faster.",
  about:
    "I am Shiva, a software engineer from Hyderabad with experience at Oracle and a strong interest in backend engineering, automation, and thoughtful product building.",
  location: "Hyderabad, India",
  email: "shiva.kumar.reddy.gaddam19@gmail.com",
  resumeUrl: "/resume.pdf",
  contactIntro: "Open to software engineering roles across backend, platform, and automation teams.",
  profileLinks: [
    { label: "Email", href: "mailto:shiva.kumar.reddy.gaddam19@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shivakumar19/" },
    { label: "GitHub", href: "https://github.com/GSK-10" },
  ] satisfies SiteLink[],
};
