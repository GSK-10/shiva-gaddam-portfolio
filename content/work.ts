export type WorkCaseStudy = {
  title: string;
  focus: string;
  period: string;
  summary: string;
  challenge: string;
  contribution: string[];
  outcome: string[];
  tech: string[];
};

export const workCaseStudies: WorkCaseStudy[] = [
  {
    title: "Release Automation Across Distributed Services",
    focus: "Test Infrastructure",
    period: "2024-2025",
    summary:
      "Built repeatable end-to-end regression coverage for web services, messaging, directory services, socket-based integrations, and routing flows in a distributed activation platform.",
    challenge:
      "Release validation spanned four connected platform components, but environment-specific test data, certificates, service state, and integration dependencies made manual regression slow and inconsistent.",
    contribution: [
      "Built and maintained more than 100 LISA-based end-to-end workflows across four platform components covering web services, JMS/XML messaging, LDAP, socket-based integrations, and dynamic routing.",
      "Converted manual validation paths into reusable suites with environment-aware test data, assertions, service parameters, and repeatable execution steps.",
      "Diagnosed failures across SSL configuration, database connectivity, directory services, routing parameters, and changing service state before promoting stable workflows.",
      "Documented setup, execution, and troubleshooting guidance so later regression runs could reuse the same operational knowledge.",
    ],
    outcome: [
      "Reduced the release regression cycle by 80%, from approximately five days of manual effort to one day of automated execution.",
      "Established repeatable coverage across four core platform components in both on-premises and cloud-native test environments.",
      "Improved failure diagnosis through clearer suite logs, reusable test data, and documented recovery steps.",
    ],
    tech: ["Java", "LISA", "JMS", "XML", "LDAP", "SSL", "Linux"],
  },
  {
    title: "Cloud Native Upgrades & Deployments",
    focus: "SRE / Cloud-native reliability",
    period: "2025",
    summary:
      "Upgraded and validated container-native platform stacks across Kubernetes environments while preserving existing deployment behavior.",
    challenge:
      "Cloud-native releases required coordinated changes across orchestration, container runtime, packaging, operator, and image tooling without breaking existing platform instances.",
    contribution: [
      "Upgraded Kubernetes, Podman, Helm, operator, deployment-model, and image-building tooling across three private Kubernetes clusters.",
      "Validated existing instances after each change, investigated upgrade failures, and coordinated findings and rollout sequencing with development teams.",
      "Used Git and GitLab for change tracking and collaboration, gaining practical exposure to CI/CD fundamentals and the flow from versioned changes to deployment validation.",
      "Reviewed deployment guidance and compared behavior across development and product-like environments to isolate configuration and tooling boundaries.",
    ],
    outcome: [
      "Completed coordinated technology-stack upgrades across three private Kubernetes clusters while validating backward compatibility for existing instances.",
      "Improved release confidence by identifying dependency boundaries and resolving environment-specific upgrade issues before wider rollout.",
      "Built hands-on understanding of containerized delivery, Git-based collaboration, and foundational CI/CD practices around deployment validation.",
    ],
    tech: ["Java", "Kubernetes", "Podman", "Helm", "Git", "GitLab", "CI/CD", "WebLogic Operator", "WDT", "WIT"],
  },
  {
    title: "API, Security, And Routing Test Modernization",
    focus: "AI-assisted testing",
    period: "2025",
    summary:
      "Modernized routing and API validation through refreshed test data, stronger assertions, security-aware configuration, and reviewed AI-assisted development.",
    challenge:
      "Routing and API suites had to be adapted for newer environments where test data, assertions, service parameters, and SSL configuration no longer matched current behavior.",
    contribution: [
      "Updated 24 dynamic-routing and three ID-routing cases, including their test data, execution steps, assertions, and environment-specific properties.",
      "Created and exercised an API specification for REST fuzz testing and worked through SOAP fuzz-testing flows with SSL-aware configuration.",
      "Used Postman and Cypress reference implementations to understand expected API behavior and translate it into repeatable validation workflows.",
      "Used Cline to accelerate test-case development, then manually reviewed, corrected, and validated the generated work against application behavior.",
    ],
    outcome: [
      "Returned all 27 routing cases to executable suite form after updating data, assertions, and environment configuration.",
      "Expanded repeatable validation beyond service workflows into REST, SOAP, fuzz-testing, and SSL-related scenarios.",
      "Reduced investigation time by separating product behavior from failures caused by routing parameters, test data, certificates, and environment setup.",
    ],
    tech: ["Cline", "REST", "SOAP", "Postman", "Cypress", "SSL", "Dynamic Routing"],
  },
  {
    title: "Platform Environment Provisioning And Patching",
    focus: "SRE / Platform operations",
    period: "2024-2025",
    summary:
      "Provisioned and maintained Linux-based platform environments used for upgrade, integration, and release validation.",
    challenge:
      "Reliable release testing required multiple Linux environments to stay aligned across middleware, Java, database clients, permissions, configuration, and quarterly security patch levels.",
    contribution: [
      "Provisioned distributed platform environments on Linux VMs, installing middleware and database clients required by the product stack.",
      "Applied quarterly security updates across Java, application-server, and database-client layers while checking compatibility before regression began.",
      "Resolved setup blockers involving permissions, configuration, resources, database connectivity, and component startup across fresh and upgraded environments.",
      "Shared environment setup and operational troubleshooting practices with junior engineers supporting similar validation work.",
    ],
    outcome: [
      "Delivered release-ready environments across three quarterly patch cycles for on-premises validation.",
      "Reduced avoidable regression failures caused by mismatched patch levels, incomplete configuration, and unavailable dependencies.",
      "Improved team readiness by turning repeated setup and recovery work into reusable operational guidance.",
    ],
    tech: ["Linux", "WebLogic", "Oracle DB", "Java", "Shell", "Patch Management"],
  },
];
