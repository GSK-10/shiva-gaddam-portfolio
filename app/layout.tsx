import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivagaddam.dev"),
  title: "Shiva Gaddam | Software Engineer",
  description: "Backend | Distributed Systems | Automation | Cloud",
  openGraph: {
    title: "Shiva Gaddam | Software Engineer",
    description: "Backend | Distributed Systems | Automation | Cloud",
    images: [
      {
        url: "/images/share_preview_image.jpg",
        width: 1200,
        height: 630,
        alt: "Shiva Gaddam | Software Engineer preview image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiva Gaddam | Software Engineer",
    description: "Backend | Distributed Systems | Automation | Cloud",
    images: [
      {
        url: "/images/share_preview_image.jpg",
        width: 1200,
        height: 630,
        alt: "Shiva Gaddam | Software Engineer preview image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
