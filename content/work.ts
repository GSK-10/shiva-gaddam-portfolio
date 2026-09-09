export type WorkCaseStudy = {
  title: string;
  focus: string;
  period: string;
  summary: string;
  challenge: string;
  contribution: string[];
  outcome: string[];
  evidence: string;
  tech: string[];
};

export const workCaseStudies: WorkCaseStudy[] = [
  {
    title: "Release Automation Across Distributed Services",
    focus: "Test Infrastructure",
    period: "2024-2025",
    summary:
      "Automation work for web services, messaging, directory, telnet/socket, and routing flows in a distributed activation platform.",
    challenge:
      "Regression coverage depended on manual setup, environment-specific data, and suites that could fail because of SSL, LDAP, database, or service-state drift.",
    contribution: [
      "Updated and executed LISA-based workflows across WS, JMS, JSRP, JNEP, LDAP, telnet/socket, dynamic routing, and ID routing areas.",
      "Debugged failing steps, assertions, certificates, test data, and environment properties before promoting stable suites.",
      "Documented setup notes, recurring automation issues, execution steps, and fixes in internal knowledge pages for reuse.",
    ],
    outcome: [
      "Helped move release regression from a multi-day manual cycle toward repeatable suite execution.",
      "Produced cleaner suite logs and reusable troubleshooting notes for future runs.",
      "Expanded coverage around component-level and end-to-end service behavior without exposing implementation details.",
    ],
    evidence: "Status reports reference 30/33, 32/33, 26/26, and 27-case suite executions after debugging and data updates.",
    tech: ["Java", "LISA", "JMS", "XML", "LDAP", "SSL", "Linux"],
  },
  {
    title: "Platform Environment Provisioning And Patching",
    focus: "SRE / Platform Operations",
    period: "2024-2025",
    summary:
      "Provisioned Linux-based test environments, middleware, database clients, and quarterly patch updates for release validation.",
    challenge:
      "Fresh and upgraded environments needed consistent middleware, database client, Java, and WebLogic patch levels before reliable testing could begin.",
    contribution: [
      "Installed middleware and 19c database clients on Linux VMs and applied quarterly CPU patches across Java, WebLogic, and database client layers.",
      "Prepared additional environments for upgrade and regression testing while resolving setup blockers such as permissions, configuration, and resource constraints.",
      "Supported another engineer's VM setup and shared operational context for launching and validating platform components.",
    ],
    outcome: [
      "Improved readiness of test environments for on-premises release validation.",
      "Reduced avoidable test noise caused by patch/configuration mismatch.",
      "Converted setup experience into practical support and knowledge transfer for newer contributors.",
    ],
    evidence: "Source docs repeatedly mention middleware, DB client, Java/WLS patching, VM setup, and sanity validation work.",
    tech: ["Linux", "WebLogic", "Oracle DB", "Java", "Shell", "Patch Management"],
  },
  {
    title: "Cloud Native Stack Upgrade Validation",
    focus: "SRE / Cloud Native Reliability",
    period: "2025",
    summary:
      "Validated cloud-native stack upgrades and component behavior across Kubernetes-oriented release environments.",
    challenge:
      "Cloud-native environments required coordinated upgrades across container runtime, orchestration, deployment tooling, and operator layers while preserving existing instance behavior.",
    contribution: [
      "Performed tech stack upgrades covering Kubernetes, Podman, Helm, WebLogic Operator, WebLogic Deploy Tooling, and image tooling.",
      "Investigated upgrade issues with collaborators and compared behavior between development and product-like environments.",
      "Reviewed deployment documentation and used the work to deepen understanding of Kubernetes-hosted product components.",
    ],
    outcome: [
      "Supported release confidence for cloud-native deployments.",
      "Identified tooling dependencies and upgrade boundaries that mattered for existing instances.",
      "Built stronger operational fluency across containers, operators, and deployment flows.",
    ],
    evidence: "Status reports describe multiple cloud-native tech stack upgrades, issue debugging, and deployment guide review.",
    tech: ["Java", "Kubernetes", "Podman", "Helm", "WebLogic Operator", "WDT", "WIT"],
  },
  {
    title: "API, Security, And Routing Test Modernization",
    focus: "AI-Assisted Testing",
    period: "2025",
    summary:
      "Modernized API and routing validation through refreshed test data, stronger assertions, and AI-assisted test development with Cline.",
    challenge:
      "Routing and API cases needed refreshed test data, correct assertions, SSL-aware configuration, and repeatable execution in new environments.",
    contribution: [
      "Updated dynamic routing and ID routing cases, test steps, assertions, and environment-specific properties for the latest release branch.",
      "Created and exercised an API spec for REST fuzzing and also worked through SOAP fuzz execution flows.",
      "Used Cline to accelerate test-case development, then reviewed, corrected, and validated the tests against expected application behavior.",
      "Used Postman and Cypress reference code to understand API behavior and translate it into validation workflows.",
    ],
    outcome: [
      "Brought 27 routing cases into executable suite form after data and assertion updates.",
      "Added practical API/security-testing exposure alongside service workflow automation.",
      "Clarified failure causes around routing parameters, cartridge data, SSL setup, and environment configuration.",
    ],
    evidence: "Source docs mention 24 dynamic routing plus 3 ID routing cases, REST fuzz spec work, SOAP fuzz execution, and API validation.",
    tech: ["Cline", "REST", "SOAP", "Postman", "Cypress", "SSL", "Dynamic Routing"],
  },
];
