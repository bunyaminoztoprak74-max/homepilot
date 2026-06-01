import type { MetadataRoute } from "next";
import categories from "@/data/categories.json";
import guides from "@/data/guides.json";
import articles from "@/data/articles.json";
import seoPages from "@/data/seo-pages.json";
import { siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/best-robot-vacuums`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/best-air-fryers`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/best-espresso-machines`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...["about", "contact", "privacy-policy", "terms", "affiliate-disclosure", "editorial-process", "how-we-test"].map((path) => ({
      url: `${siteUrl}/${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5
    })),
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
    })),
    ...seoPages.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75
    })),
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...articles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.55
    }))
  ];
}
