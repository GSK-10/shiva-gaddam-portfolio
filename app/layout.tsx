import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, JetBrains_Mono, Orbitron, Oxanium } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BackToTop } from "@/components/ui/BackToTop";
import { Providers } from "@/components/theme";
import { siteConfig, siteSeo } from "@/content/portfolio";
import "./globals.css";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteSeo.url,
      description: siteSeo.description,
    },
    {
      "@type": "Person",
      name: siteConfig.name,
      url: siteSeo.url,
      jobTitle: siteConfig.role,
      description: siteSeo.description,
      homeLocation: {
        "@type": "Place",
        name: siteConfig.location,
      },
      sameAs: siteConfig.profileLinks
        .map((link) => link.href)
        .filter((href) => !href.startsWith("mailto:")),
    },
  ],
};

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-mono",
});

const serif = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-serif",
});

const display = Orbitron({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteSeo.url),
  title: siteSeo.title,
  description: siteSeo.description,
  alternates: {
    canonical: siteSeo.url,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    url: siteSeo.url,
    siteName: siteConfig.name,
    locale: siteSeo.locale,
    title: siteSeo.title,
    description: siteSeo.description,
    images: [siteSeo.shareImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteSeo.title,
    description: siteSeo.description,
    images: [siteSeo.shareImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteSeo.themeColor.light },
    { media: "(prefers-color-scheme: dark)", color: siteSeo.themeColor.dark },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${sans.variable} ${mono.variable} ${serif.variable} ${display.variable}`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
