import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-easy-clean-air-fryers");

export const metadata: Metadata = {
  title: `Best Easy-Clean Air Fryers | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-easy-clean-air-fryers" },
  openGraph: {
    title: `Best Easy-Clean Air Fryers | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-easy-clean-air-fryers`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Easy-Clean Air Fryers | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
