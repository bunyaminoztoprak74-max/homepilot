import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-japanese-chef-knives");

export const metadata: Metadata = {
  title: { absolute: `Best Japanese Chef Knives 2026 | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-japanese-chef-knives" },
  openGraph: {
    title: `Best Japanese Chef Knives 2026 | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-japanese-chef-knives`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Japanese Chef Knives 2026 | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
