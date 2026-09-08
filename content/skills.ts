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

export const skillsMarquee = [
  // Languages
  "C/C++",
  "Python",
  "Java",
  "JavaScript",
  "SQL",

  // Infrastructure & DevOps
  "Linux",
  "Docker",
  "Kubernetes",
  "Git",
  "GitLab",

  // Frameworks & Databases
  "Node.js",
  "React",
  "Oracle DB",
  "MySQL",

  // Backend / Spring Boot Learning
  "Spring Boot",
  "REST APIs",

  // AWS Learning
  "AWS",,
  "Distributed Systems",
  
  // Work Strengths
  "Automation",
];

/*

// Final Version
export const skillsMarquee = [
  // Languages
  "C/C++",
  "Python",
  "Java",
  "JavaScript",
  "SQL",
  // "Bash/Shell",

  // Infrastructure & DevOps
  "Linux",
  "Docker",
  // "Podman",
  "Kubernetes",
  "Git",
  "GitLab",

  // Frameworks & Databases
  "Node.js",
  "React",
  // "Flask",
  "Oracle DB",
  "MySQL",
  // "MongoDB",

  // Backend / Spring Boot Learning
  "Spring Boot",
  "Spring MVC",
  "REST APIs",
  "Spring Data JPA",
  "Hibernate",
  // "JUnit",
  // "Mockito",

  // AWS Learning
  "AWS",
  // "AWS Fundamentals",
  // "IAM",
  // "EC2",
  // "S3",
  // "CloudWatch",

  // Core Concepts
  // "DSA",
  // "OOP",
  // "DBMS",
  // "Computer Networks",
  "Distributed Systems",
  // "Microservices",
  // "Agile/Scrum",

  // Work Strengths
  "Automation",
  // "Debugging",
  "API Testing",
  // "Regression Testing",
  // "Backend Systems",
  // "Cloud-Native Basics",
];

// Mini Version
export const skillsMarquee = [
  "Java",
  "Spring Boot",
  "REST APIs",
  "Spring MVC",
  "Spring Data JPA",
  "Hibernate",
  "JUnit",
  "Mockito",
  "SQL",
  "MySQL",
  "Python",
  "Linux",
  "Git",
  "Docker",
  "Kubernetes",
  "AWS Fundamentals",
  "EC2",
  "S3",
  "IAM",
  "CloudWatch",
  "Automation",
  "Backend Systems",
  "Debugging",
  "API Testing",
];

// V1 
export const skillsMarquee = [
  "Java",
  "Spring Boot",
  "Spring MVC",
  "REST APIs",
  "Spring Data JPA",
  "Hibernate",
  "Spring Security",
  "JWT",
  "OAuth2 / OIDC",
  "JUnit",
  "Mockito",
  "Redis",
  "Kafka",
  "Microservices",
  "Resilience4j",
  "Spring Cloud",
  "API Gateway",
  "Actuator",
  "OpenAPI",
  "Docker",
  "Kubernetes",
  "AWS",
  "IAM",
  "EC2",
  "S3",
  "Lambda",
  "RDS",
  "VPC",
  "CloudWatch",
  "Linux",
  "Git",
  "GitLab CI",
  "Jenkins",
  "Python",
  "SQL",
];



*/

