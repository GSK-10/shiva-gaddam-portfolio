import type { MetadataRoute } from "next";
import { siteSeo } from "@/content/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteSeo.url).toString(),
    host: siteSeo.url,
  };
}
