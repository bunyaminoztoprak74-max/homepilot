import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-stainless-steel-air-fryers");

export const metadata: Metadata = {
  title: `Best Stainless Steel Air Fryers | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-stainless-steel-air-fryers" },
  openGraph: {
    title: `Best Stainless Steel Air Fryers | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-stainless-steel-air-fryers`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Stainless Steel Air Fryers | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
