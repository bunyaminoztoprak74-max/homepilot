import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-blenders-for-smoothies");

export const metadata: Metadata = {
  title: { absolute: `Best Blenders for Smoothies 2026 | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-blenders-for-smoothies" },
  openGraph: {
    title: `Best Blenders for Smoothies 2026 | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-blenders-for-smoothies`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Blenders for Smoothies 2026 | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
