"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { PropsWithChildren } from "react";
import { defaultTheme, themeKeys } from "@/content/themes";

export function Providers({ children }: PropsWithChildren) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme={defaultTheme}
      enableSystem={false}
      disableTransitionOnChange
      storageKey="portfolio-theme"
      themes={[...themeKeys]}
    >
      {children}
    </NextThemesProvider>
  );
}
