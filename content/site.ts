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
    "Software Engineer building dependable automation, distributed platform environments, and cloud-native infrastructure.",

  /* About/contact content */
  about:
    "At Oracle, I worked where automation, infrastructure, and distributed systems meet. I turned repetitive release validation into 100+ automated workflows, helped move container-native stacks across private Kubernetes clusters, and debugged the failures between services, certificates, databases, and environments. I like engineering work that makes complex systems easier to trust.",
  aboutPanels: [
    {
      title: "Driver profile",
      items: [
        { label: "Location", value: "Hyderabad, India" },
        { label: "Experience", value: "Oracle - Software Engineer" },
        { label: "Focus", value: "Backend / Platform / Infrastructure" },
      ] satisfies DetailItem[],
    },
    {
      title: "Performance record",
      items: [
        { label: "Automation", value: "100+ end-to-end workflows" },
        { label: "Release time", value: "Reduced by 80%" },
        { label: "Clusters", value: "3 private Kubernetes clusters" },
      ] satisfies DetailItem[],
    },
  ] satisfies Array<{
    title: string;
    items: DetailItem[];
  }>,
  location: "Hyderabad, India",
  email: "shiva.kumar.reddy.gaddam19@gmail.com",
  resumeUrl: "/resume/shiva-kumar-reddy-gaddam-resume.pdf",
  contactIntro:
    "Open to software engineering roles across backend, platform, infrastructure, and automation teams.",
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
