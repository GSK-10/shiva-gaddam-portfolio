import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/providers";
import { siteConfig, siteSeo } from "@/content/site";
import "./globals.css";

const THEME_STORAGE_KEY = "portfolio-theme";

const THEME_BOOTSTRAP_SCRIPT = `
  (() => {
    const storageKey = "${THEME_STORAGE_KEY}";
    const fallbackTheme = "light";
    const allowedThemes = new Set(["light", "dark", "ember"]);

    try {
      const storedTheme = window.localStorage.getItem(storageKey);
      const theme = storedTheme && allowedThemes.has(storedTheme) ? storedTheme : fallbackTheme;
      const root = document.documentElement;

      root.setAttribute("data-theme", theme);
      root.classList.toggle("dark", theme === "dark");
      root.style.colorScheme = theme === "light" ? "light" : "dark";
    } catch {
      document.documentElement.setAttribute("data-theme", fallbackTheme);
    }
  })();
`;

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

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
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
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${sans.variable} ${display.variable}`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
