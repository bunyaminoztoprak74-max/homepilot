import type { MetadataRoute } from "next";
import categories from "@/data/categories.json";
import guides from "@/data/guides.json";
import articles from "@/data/articles.json";
import seoPages from "@/data/seo-pages.json";
import authors from "@/data/authors.json";
import { siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    // Category hub pages — best-{slug}
    ...categories.map((category) => ({
      url: `${siteUrl}/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9
    })),
    // Comparison pages — comparisons/{slug}
    ...categories.map((category) => ({
      url: `${siteUrl}/comparisons/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85
    })),
    { url: `${siteUrl}/authors`, lastModified: now, changeFrequency: "monthly", priority: 0.45 },
    ...authors.map((author) => ({
      url: `${siteUrl}/authors/${author.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.45
    })),
    ...["about", "contact", "privacy-policy", "terms", "affiliate-disclosure", "editorial-process", "how-we-test"].map((path) => ({
      url: `${siteUrl}/${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5
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
