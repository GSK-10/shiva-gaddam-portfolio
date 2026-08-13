export type Project = {
  title: string;
  kind: string;
  year?: string;
  description: string;
  tech: string[];
  bullets: string[];
  publication?: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Speaker Diarization and Emotion Recognition",
    kind: "Machine Learning / Research",
    year: "2025",
    description:
      "Built a modular speech-processing pipeline for multi-speaker diarization, timestamped transcription, and sentiment analysis.",
    tech: ["Python", "Flask", "Whisper", "SpeechBrain", "Scikit-learn"],
    bullets: [
      "Integrated Transformer-based speech-to-text with speaker embeddings for multi-speaker diarization.",
      "Developed a Flask backend coordinating audio preprocessing, embedding extraction, and spectral clustering.",
      "Generated timestamped, speaker-wise transcripts for real-world multi-speaker audio.",
    ],
    publication: "SSRG IJEEE 2025",
  },
  {
    title: "Publications Management System",
    kind: "Full-stack Engineering",
    year: "2024",
    description:
      "Built a MERN application for managing and retrieving faculty publication records with a restructured MongoDB schema.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    bullets: [
      "Built the system for the university CSE department to store, manage, and retrieve faculty publications.",
      "Restructured the MongoDB schema to reduce redundancy and improve data organization.",
    ],
  },
];
