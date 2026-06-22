export type Project = {
  title: string;
  description: string;
  tech: string[];
  bullets: string[];
  githubUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    title: "Speaker Diarization and Emotion Recognition",
    description:
      "Built a modular speech-processing pipeline for multi-speaker diarization, timestamped transcription, and sentiment analysis.",
    tech: ["Python", "Flask", "Whisper", "SpeechBrain", "Scikit-learn"],
    bullets: [
      "Integrated speech-to-text, speaker embeddings, clustering, and Flask APIs into a working pipeline.",
      "Generated timestamped speaker-wise transcripts for real-world multi-speaker audio.",
      "Published related work in SSRG IJEEE 2025.",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Publications Management System",
    description:
      "Built a MERN application for managing and retrieving faculty publication records with a restructured MongoDB schema.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    bullets: [
      "Designed a full-stack system for the university CSE department.",
      "Improved data organization by restructuring the database schema to reduce redundancy.",
    ],
    githubUrl: "",
    liveUrl: "",
  },
];

