import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-air-fryers-for-apartments");

export const metadata: Metadata = {
  title: `Best Air Fryers for Apartments | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-air-fryers-for-apartments" },
  openGraph: {
    title: `Best Air Fryers for Apartments | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-air-fryers-for-apartments`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Air Fryers for Apartments | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
