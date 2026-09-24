import type { MetadataRoute } from "next";
import { siteSeo } from "@/content/portfolio";

/** Both public routes. Add an entry here whenever a route is added under app/. */
const routes = ["/", "/notes"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, siteSeo.url).toString(),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.6,
  }));
}
