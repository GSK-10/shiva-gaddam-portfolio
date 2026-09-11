export type SkillGroup = {
  title: string;
  items: { label: string; featured?: boolean }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Software development & fundamentals",
    items: [
      { label: "Java", featured: true },
      { label: "Python", featured: true },
      { label: "JavaScript" },
      { label: "C / C++" },
      { label: "SQL" },
      { label: "Bash / Shell" },
      { label: "OOP" },
      { label: "DSA" },
      { label: "DBMS" },
      { label: "Computer Networks" },
    ],
  },
  {
    title: "Frameworks, backend & APIs",
    items: [
      { label: "Spring Boot" },
      { label: "Spring Data JPA" },
      { label: "Node.js" },
      { label: "Flask" },
      { label: "React" },
      { label: "REST APIs", featured: true },
      { label: "Microservices" },
      { label: "Service integration" },
      { label: "Distributed Systems", featured: true },
    ],
  },
  {
    title: "Cloud & containers",
    items: [
      { label: "AWS - IAM, EC2, S3, CloudWatch" },
      { label: "OCI" },
      { label: "Linux", featured: true },
      { label: "Kubernetes", featured: true },
      { label: "Docker" },
      { label: "Podman", featured: true },
      { label: "Helm", featured: true },
      { label: "WebLogic Operator" },
    ],
  },
  {
    title: "Developer tools & operations",
    items: [
      { label: "Git" },
      { label: "GitLab" },
      { label: "IntelliJ IDEA" },
      { label: "Cline" },
      { label: "AI-Assisted Development Workflows" },
      { label: "Environment provisioning", featured: true },
      { label: "Patch validation" },
      { label: "Deployment debugging", featured: true },
      { label: "Troubleshooting" },
      { label: "Agile / Scrum" },
    ],
  },
  {
    title: "Data & messaging",
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
    title: "Automation & reliability",
    items: [
      { label: "LISA", featured: true },
      { label: "Regression automation", featured: true },
      { label: "SSL debugging", featured: true },
      { label: "Suite execution" },
      { label: "Log analysis" },
      { label: "Test data updates" },
      { label: "Assertions" },
      { label: "Automation documentation" },
    ],
  },
];

/*
Alternative grouping preset — Iteration 10 resume

Languages:
  C/C++, Java, Python, JavaScript, SQL, Bash/Shell
Cloud & Infrastructure:
  AWS (IAM, EC2, S3, CloudWatch), OCI, Linux, Docker, Podman, Kubernetes
Backend & Frameworks:
  Spring Boot, Spring Data JPA, REST APIs, Node.js, React, Flask
Databases:
  Oracle DB, MySQL, MongoDB
Developer Tools:
  Git, GitLab, IntelliJ IDEA, Cline, AI-Assisted Development Workflows
Core Concepts:
  DSA, OOP, DBMS, Computer Networks, Distributed Systems, Microservices, Agile/Scrum

Previous portfolio grouping

Software development; Backend and APIs; Cloud and containers;
Release and operations; Data and messaging; Reliability testing.
The detailed previous items remain recoverable from Git history.
*/

export const skillsMarquee = [
  "C/C++",
  "Python",
  "Java",
  "JavaScript",
  "SQL",
  "Linux",
  "Docker",
  "Kubernetes",
  "Git",
  "GitLab",
  "Node.js",
  "React",
  "Oracle DB",
  "MySQL",
  "Spring Boot",
  "REST APIs",
  "AWS",
  "Distributed Systems",
  "Automation",
];
