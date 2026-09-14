export type Project = {
  title: string;
  label: string;
  category?: string;
  status?: "WIP";
  kind: "network" | "audio" | "publications";
  description: string;
  tech: string[];
  imageUrl?: string;
  imageAlt?: string;
  githubUrl?: string;
  liveUrl?: string;
  publicationUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Distributed Professional Network",
    label: "Project 1",
    category: "Learning Project",
    status: "WIP",
    kind: "network",
    description:
      "Currently building a distributed social platform to practise Spring Boot microservices, event-driven communication, observability, and Kubernetes deployment.",
    tech: ["Java", "Spring Boot", "Spring Cloud", "Kafka", "Kubernetes", "Jenkins", "ELK", "Zipkin"],
    imageUrl: "/images/projects/distributed-network-preview.png",
    imageAlt: "Abstract visualization of interconnected nodes representing a distributed professional network",
  },
  {
    title: "Speaker Diarization System",
    label: "Project 2",
    category: "Research Project",
    kind: "audio",
    description:
      "A modular multi-speaker audio pipeline for diarization, timestamped transcription, and sentiment analysis, backed by Flask and spectral clustering.",
    tech: ["Python", "Flask", "Whisper", "SpeechBrain", "Scikit-learn"],
    imageUrl: "/images/projects/speaker-diarization-preview.png",
    imageAlt: "Abstract layered audio tracks representing the speaker diarization pipeline",
    publicationUrl:
      "https://www.internationaljournalssrg.org/IJEEE/paper-details?Id=1043",
  },
  {
    title: "Publications Management System",
    label: "Project 3",
    category: "Academic Project",
    kind: "publications",
    description:
      "A full-stack application for a university CSE department to store, manage, search, and retrieve faculty publications through a restructured data model.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    imageUrl: "/images/projects/publications-management-preview.png",
    imageAlt: "Abstract digital archive representing the publications management system",
  },
];
