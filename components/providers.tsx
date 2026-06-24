"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { PropsWithChildren } from "react";
import { defaultTheme } from "@/content/themes";

export function Providers({ children }: PropsWithChildren) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme={defaultTheme}
      enableSystem={false}
      disableTransitionOnChange
      themes={["light", "dark", "cosmic"]}
    >
      {children}
    </NextThemesProvider>
  );
}
