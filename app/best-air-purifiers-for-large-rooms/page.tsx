import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-air-purifiers-for-large-rooms");

export const metadata: Metadata = {
  title: { absolute: `Best Air Purifiers for Large Rooms 2026 | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-air-purifiers-for-large-rooms" },
  openGraph: {
    title: `Best Air Purifiers for Large Rooms 2026 | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-air-purifiers-for-large-rooms`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Air Purifiers for Large Rooms 2026 | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
