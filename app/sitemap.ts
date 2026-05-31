import type { MetadataRoute } from "next";
import categories from "@/data/categories.json";
import guides from "@/data/guides.json";
import { siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...categories.map((category) => ({
      url: `${siteUrl}/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),
    ...guides.map((guide) => ({
      url: `${siteUrl}/${guide.category}/${guide.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
