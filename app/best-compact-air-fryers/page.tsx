import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-compact-air-fryers");

export const metadata: Metadata = {
  title: `Best Compact Air Fryers | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-compact-air-fryers" },
  openGraph: {
    title: `Best Compact Air Fryers | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-compact-air-fryers`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Compact Air Fryers | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
