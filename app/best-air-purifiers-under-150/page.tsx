import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-air-purifiers-under-150");

export const metadata: Metadata = {
  title: { absolute: `Best Air Purifiers Under $150 2026 | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-air-purifiers-under-150" },
  openGraph: {
    title: `Best Air Purifiers Under $150 2026 | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-air-purifiers-under-150`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Air Purifiers Under $150 2026 | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
