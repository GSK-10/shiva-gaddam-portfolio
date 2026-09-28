export type Project = {
  title: string;
  label: string;
  category?: string;
  status?: "WIP" | "Active learning";
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
    title: "Professional Networking System",
    label: "Project 1",
    // category: "Independent Learning Project",
    status: "Active learning",
    kind: "network",
    description:
      "Building seven Spring Boot components with JWT-protected routes and service discovery for authentication, posts, connections, notifications, and media, backed by Kafka, Neo4j, and PostgreSQL.",
    tech: ["Java", "Spring Boot", "JWT", "Service Discovery", "Kafka", "Neo4j", "PostgreSQL"],
    imageUrl: "/images/projects/professional-networking.png",
    imageAlt: "Network graph of connected member profiles around a central user",
    // githubUrl: "https://github.com/GSK-10/professional-networking-system",
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
    imageAlt: "Speaker Diarization app upload screen with audio file, speaker count, sample, and record options",
    githubUrl: "https://github.com/GSK-10/speaker-diarization-system",
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
