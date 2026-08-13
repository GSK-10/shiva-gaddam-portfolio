export type Note = {
  title: string;
  theme: string;
  summary: string;
};

export const notes: Note[] = [
  {
    title: "Debugging Distributed Test Failures",
    theme: "Reliability",
    summary:
      "Notes on reading logs, isolating SSL/configuration drift, and turning repeated failures into reusable troubleshooting steps.",
  },
  {
    title: "Cloud Native Upgrade Checklist",
    theme: "SRE",
    summary:
      "A practical checklist mindset for Kubernetes, Podman, Helm, operators, image tooling, and environment sanity validation.",
  },
  {
    title: "Automation Data Hygiene",
    theme: "SDE",
    summary:
      "How I think about keeping test data, assertions, environment properties, and suite execution aligned across releases.",
  },
];
