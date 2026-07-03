export type SiteLink = {
  label: string;
  href: string;
};

export type DetailItem = {
  label: string;
  value: string;
};

export type SiteSeo = {
  url: string;
  title: string;
  description: string;
  locale: string;
  twitterHandle?: string;
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
  /* Core identity content */
  name: "Shiva Kumar Reddy Gaddam",
  role: "Software Engineer",
  headline:
    "Software Engineer experienced in backend systems, distributed systems, APIs, automation, and cloud-native platform work.",

  /* About/contact content */
  about:
    "I spent about one and a half years at Oracle working across automation, distributed platform environments, and Kubernetes-heavy release workflows. That work pushed me from testing systems at scale to understanding how backend and platform systems should be built, debugged, and made dependable.",
  aboutPanels: [
    {
      title: "Open to",
      items: [
        { label: "Location", value: "Hyderabad, India" },
        { label: "Previously", value: "Oracle - SWE" },
        { label: "Focus", value: "Backend / Platform / SRE" },
      ] satisfies DetailItem[],
    },
    {
      title: "Currently",
      items: [
        { label: "Building", value: "Spring Boot APIs" },
        { label: "Learning", value: "System design and AWS" },
        { label: "Practicing", value: "DSA and problem solving" },
      ] satisfies DetailItem[],
    },
  ] satisfies Array<{
    title: string;
    items: DetailItem[];
  }>,
  location: "Hyderabad, India",
  email: "shiva.kumar.reddy.gaddam19@gmail.com",
  resumeUrl: "/resume/shiva-kumar-reddy-gaddam-resume.pdf",
  contactIntro: "Open to software engineering roles across backend, platform, and automation teams.",
  profileLinks: [
    { label: "Email", href: "mailto:shiva.kumar.reddy.gaddam19@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shivakumar19/" },
    { label: "GitHub", href: "https://github.com/GSK-10" },
    { label: "Codolio", href: "https://codolio.com/profile/GSK-10" },
  ] satisfies SiteLink[],
};

export const siteSeo: SiteSeo = {
  url: "https://shivagaddam.dev",
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.headline,
  locale: "en_US",
  twitterHandle: undefined,
  themeColor: {
    light: "#f7fbff",
    dark: "#111726",
  },
  shareImage: {
    url: "/images/share_preview_1200x630_final_comp.png",
    width: 1200,
    height: 630,
    alt: "Shiva Gaddam | Software Engineer preview image",
  },
};
