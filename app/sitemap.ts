import type { MetadataRoute } from "next";
import { siteSeo } from "@/content/portfolio";

/**
 * Only routes that are publicly reachable belong here — a sitemap asks search
 * engines to index what it lists. /notes exists under app/ but its nav link is
 * intentionally disabled in content/portfolio.ts, so it is deliberately absent;
 * add it back here at the same time the nav link is re-enabled.
 */
const routes = ["/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, siteSeo.url).toString(),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.6,
  }));
}
