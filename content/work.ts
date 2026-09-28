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
    focus: "Automation / Release regression",
    period: "2024-2025",
    summary:
      "Built repeatable release-regression coverage across HTTP, HTTPS, JMS, LDAP, and dynamic-routing workflows in a distributed service-activation platform.",
    challenge:
      "Across two release-regression cycles, changing test data, prerequisites, assertions, certificates, and environment configuration made manual validation slow and inconsistent.",
    contribution: [
      "Automated and maintained more than 100 LISA-based service-activation workflows across HTTP, HTTPS, JMS, LDAP, and dynamic-routing integrations.",
      "Reworked test data, prerequisites, assertions, environment properties, and execution steps so suites could run repeatably across newer environments.",
      "Resolved SSL and environment blockers while expanding coverage and completing more than 25 web-service cases for a release branch.",
      "Documented setup, execution, and troubleshooting guidance so later regression runs could reuse the same operational knowledge.",
    ],
    outcome: [
      "Reduced a representative release-regression cycle by 80%, from approximately five days of manual effort to one day of automated execution.",
      "Restored repeatable automation across two release cycles and both on-premises and cloud-native test environments.",
      "Improved failure diagnosis through stable prerequisites, reusable test data, clearer assertions, and documented recovery steps.",
    ],
    tech: ["Java", "LISA", "HTTP/HTTPS", "JMS", "LDAP", "SSL", "Dynamic Routing", "Linux"],
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
      "Used Git and GitLab for change tracking and collaboration, gaining practical exposure to CI/CD fundamentals from versioned changes through deployment validation.",
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
    title: "Routing, API, And SSL Integration Reliability",
    focus: "Integration and reliability validation",
    period: "2025",
    summary:
      "Diagnosed routing failures and strengthened API and SSL integration coverage across distributed service workflows.",
    challenge:
      "Some work orders remained stuck in an intermediate state, while SSL, endpoint, routing, and test-data differences made it difficult to separate product defects from environment failures.",
    contribution: [
      "Investigated stuck work orders by correlating logs, routing parameters, component settings, database state, and service connectivity across the distributed flow.",
      "Applied a targeted routing and configuration fix, then added LISA regression cases to verify that work orders completed successfully.",
      "Configured an external integration in SSL and non-SSL environments, set up application-server certificates, and validated REST endpoints and work-order submission flows with Postman.",
      "Refreshed test data, prerequisites, assertions, and environment properties; Cline supported parts of test development, with all generated work manually reviewed and validated.",
    ],
    outcome: [
      "Restored successful order processing for the affected routing path and added regression coverage to protect the corrected behaviour.",
      "Expanded repeatable validation across REST endpoints, SSL and non-SSL integrations, certificates, and end-to-end work-order submission.",
      "Improved defect triage by distinguishing product behaviour from failures caused by configuration, connectivity, certificates, and test data.",
    ],
    tech: ["Java", "LISA", "REST", "Postman", "SSL", "Dynamic Routing", "WebLogic", "Oracle DB", "Cline"],
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
      "Updated Java, WebLogic, and Oracle 19c client environments across three quarterly patch cycles while checking compatibility before regression began.",
      "Resolved setup blockers involving permissions, configuration, resources, database connectivity, and component startup across fresh and upgraded environments.",
      "Shared environment setup and operational troubleshooting practices with junior engineers supporting similar validation work.",
    ],
    outcome: [
      "Completed product certification and regression verification across three quarterly patch cycles.",
      "Reduced avoidable regression failures caused by mismatched patch levels, incomplete configuration, and unavailable dependencies.",
      "Improved team readiness by turning repeated setup and recovery work into reusable operational guidance.",
    ],
    tech: ["Linux", "WebLogic", "Oracle DB", "Java", "Shell", "Patch Management"],
  },
];
