import categoriesJson from "@/data/categories.json";
import guidesJson from "@/data/guides.json";
import productsJson from "@/data/products.json";
import articlesJson from "@/data/articles.json";
import seoPagesJson from "@/data/seo-pages.json";
import type { Article, Category, Guide, Product, SeoPage } from "@/lib/types";

export const siteUrl = "https://homepilot-iota.vercel.app";
export const affiliateTag = "affiliater07c-20";

export const categories = categoriesJson as Category[];
export const guides = guidesJson as Guide[];
export const products = productsJson as Product[];
export const articles = articlesJson as Article[];
export const seoPages = seoPagesJson as SeoPage[];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getGuide(category: string, slug: string) {
  return guides.find((guide) => guide.category === category && guide.slug === slug);
}

export function getGuideProducts(guide: Guide) {
  return guide.productIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}

export function getProductsByIds(productIds: string[]) {
  return productIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));
}

export function getAffiliateUrl(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${affiliateTag}`;
}
