import categoriesJson from "@/data/categories.json";
import guidesJson from "@/data/guides.json";
import productsJson from "@/data/products.json";
import type { Category, Guide, Product } from "@/lib/types";

export const siteUrl = "https://homepilot.vercel.app";
export const affiliateTag = "YOURTAG-20";

export const categories = categoriesJson as Category[];
export const guides = guidesJson as Guide[];
export const products = productsJson as Product[];

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

export function getAffiliateUrl(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${affiliateTag}`;
}
