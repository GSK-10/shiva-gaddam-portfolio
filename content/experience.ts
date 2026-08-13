export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
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
    tech: ["LISA", "Kubernetes", "Podman", "Helm", "Linux", "Oracle DB"],
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
    tech: ["LISA", "JMS", "XML", "LDAP", "Linux"],
  },
];
