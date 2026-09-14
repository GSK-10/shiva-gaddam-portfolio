import type { Metadata } from "next";
import { Notes } from "@/components/sections/Notes";
import { sectionCopy, siteConfig, siteSeo } from "@/content/portfolio";

const notesTitle = `Engineering Notes | ${siteConfig.name}`;
const notesDescription = sectionCopy.notes.tagline;
const notesUrl = `${siteSeo.url}/notes`;

export const metadata: Metadata = {
  title: notesTitle,
  description: notesDescription,
  alternates: {
    canonical: notesUrl,
  },
  openGraph: {
    title: notesTitle,
    description: notesDescription,
    url: notesUrl,
    siteName: siteConfig.name,
    locale: siteSeo.locale,
    type: "website",
    images: [siteSeo.shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: notesTitle,
    description: notesDescription,
    images: [siteSeo.shareImage.url],
  },
};

export default function NotesPage() {
  return (
    <main>
      <Notes />
    </main>
  );
}
