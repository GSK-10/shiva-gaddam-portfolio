export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend & APIs",
    items: ["JavaScript", "TypeScript", "Node.js", "Express.js", "REST APIs", "MongoDB"],
  },
  {
    title: "Cloud & Infrastructure",
    items: ["Linux", "Kubernetes", "Docker", "Helm", "Podman", "Oracle Cloud Infrastructure"],
  },
  {
    title: "Automation & QA",
    items: ["LISA", "WebLogic", "JMS", "XML", "LDAP", "Release Validation"],
  },
  {
    title: "Problem Solving",
    items: ["Data Structures", "Algorithms", "Debugging", "System Thinking", "Distributed Systems"],
  },
];
