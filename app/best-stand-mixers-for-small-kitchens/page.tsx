import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-stand-mixers-for-small-kitchens");

export const metadata: Metadata = {
  title: { absolute: `Best Stand Mixers for Small Kitchens 2026 | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-stand-mixers-for-small-kitchens" },
  openGraph: {
    title: `Best Stand Mixers for Small Kitchens 2026 | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-stand-mixers-for-small-kitchens`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Stand Mixers for Small Kitchens 2026 | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
