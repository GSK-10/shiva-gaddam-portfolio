export type SkillGroup = {
  title: string;
  items: {
    label: string;
    featured?: boolean;
  }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Software development",
    items: [
      { label: "Python", featured: true },
      { label: "Java", featured: true },
      { label: "JavaScript" },
      { label: "C / C++" },
      { label: "SQL" },
      { label: "Bash / Shell" },
      { label: "OOP" },
      { label: "DSA" },
    ],
  },
  {
    title: "Backend and APIs",
    items: [
      { label: "Node.js" },
      { label: "Flask" },
      { label: "REST APIs", featured: true },
      { label: "Postman" },
      { label: "Cypress" },
      { label: "Microservices" },
      { label: "Service integration" },
    ],
  },
  {
    title: "Cloud and containers",
    items: [
      { label: "Linux", featured: true },
      { label: "Kubernetes", featured: true },
      { label: "Podman", featured: true },
      { label: "Docker" },
      { label: "Helm", featured: true },
      { label: "WebLogic Operator" },
      { label: "Containerized environments" },
    ],
  },
  {
    title: "Release and operations",
    items: [
      { label: "Environment provisioning", featured: true },
      { label: "Patch validation" },
      { label: "Regression automation", featured: true },
      { label: "Deployment debugging", featured: true },
      { label: "Git" },
      { label: "GitLab" },
      { label: "Troubleshooting" },
    ],
  },
  {
    title: "Data and messaging",
    items: [
      { label: "Oracle DB", featured: true },
      { label: "MySQL" },
      { label: "MongoDB" },
      { label: "JMS", featured: true },
      { label: "XML" },
      { label: "LDAP", featured: true },
      { label: "Database connectivity" },
    ],
  },
  {
    title: "Reliability testing",
    items: [
      { label: "LISA", featured: true },
      { label: "SSL debugging", featured: true },
      { label: "Suite execution" },
      { label: "Log analysis" },
      { label: "Test data updates" },
      { label: "Assertions" },
      { label: "Automation documentation" },
    ],
  },
];
