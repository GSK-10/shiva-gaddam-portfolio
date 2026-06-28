import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/content/site";
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
  metadataBase: new URL("https://shivagaddam.dev"),
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.headline,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.headline,
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
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.headline,
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }} />
      </head>
      <body className={`${sans.variable} ${display.variable}`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
