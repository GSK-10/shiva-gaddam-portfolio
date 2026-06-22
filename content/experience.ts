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
      "Worked with Kubernetes, Podman, Helm, Linux VMs, WebLogic, Oracle DB clients, and internal release environments.",
      "Debugged SSL, database connectivity, service configuration, and distributed component integration issues.",
      "Coordinated upgrade and rollout validation across 3 private Kubernetes clusters.",
    ],
    tech: ["Kubernetes", "Podman", "Helm", "Linux", "Oracle DB", "LISA"],
  },
  {
    company: "Oracle",
    role: "Project Intern",
    location: "Hyderabad, India",
    start: "Jan 2024",
    end: "Jul 2024",
    bullets: [
      "Automated workflows for core components of a distributed service activation platform using LISA.",
      "Worked on web services, JMS/XML messaging, LDAP flows, dynamic routing, environment setup, and deployment workflows.",
    ],
    tech: ["LISA", "JMS", "XML", "LDAP", "Linux"],
  },
];

