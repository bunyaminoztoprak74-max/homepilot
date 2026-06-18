import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-blenders-for-soups");

export const metadata: Metadata = {
  title: { absolute: `Best Blenders for Soups 2026 | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-blenders-for-soups" },
  openGraph: {
    title: `Best Blenders for Soups 2026 | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-blenders-for-soups`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Blenders for Soups 2026 | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
