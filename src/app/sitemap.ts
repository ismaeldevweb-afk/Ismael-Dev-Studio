import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { servicePages } from "@/interfaces/data/site-content";

const baseUrl = siteUrl.replace(/\/$/, "");

function createUrl(path = "") {
  if (!path) {
    return `${baseUrl}/`;
  }

  return `${baseUrl}/${path.replace(/^\/+/, "")}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: createUrl(),
      changeFrequency: "weekly",
      priority: 1,
      lastModified,
    },
    ...servicePages.map((page) => ({
      url: createUrl(page.slug),
      changeFrequency: "monthly" as const,
      priority: 0.85,
      lastModified,
    })),
  ];
}
