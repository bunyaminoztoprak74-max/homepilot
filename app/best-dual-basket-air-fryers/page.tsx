import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-dual-basket-air-fryers");

export const metadata: Metadata = {
  title: { absolute: `Best Dual Basket Air Fryers 2026 — Two-Zone Tested | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-dual-basket-air-fryers" },
  openGraph: {
    title: `Best Dual Basket Air Fryers 2026 — Two-Zone Tested | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-dual-basket-air-fryers`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Dual Basket Air Fryers 2026 — Two-Zone Tested | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
