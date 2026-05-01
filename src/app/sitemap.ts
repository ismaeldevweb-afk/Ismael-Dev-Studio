import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { servicePages } from "@/interfaces/data/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
      lastModified: new Date(),
    },
    ...servicePages.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      lastModified: new Date(),
    })),
  ];
}
