export type SiteLink = {
  label: string;
  href: string;
};

export type SiteSeo = {
  url: string;
  title: string;
  description: string;
  locale: string;
  themeColor: {
    light: string;
    dark: string;
  };
  shareImage: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const siteConfig = {
  name: "Shiva Kumar Reddy Gaddam",
  role: "Software Engineer",
  headline:
    "Software Engineer building dependable backend systems, automation, and tools that make teams move faster.",
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

export const siteSeo: SiteSeo = {
  url: "https://www.shivagaddam.dev",
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.headline,
  locale: "en_US",
  themeColor: {
    light: "#f7fbff",
    dark: "#111726",
  },
  shareImage: {
    url: "/images/share_preview_1200x630_final.png",
    width: 1200,
    height: 630,
    alt: "Shiva Gaddam | Software Engineer preview image",
  },
};
