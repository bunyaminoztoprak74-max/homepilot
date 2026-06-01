import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-compact-espresso-machines");

export const metadata: Metadata = {
  title: `Best Compact Espresso Machines | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-compact-espresso-machines" },
  openGraph: {
    title: `Best Compact Espresso Machines | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-compact-espresso-machines`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Compact Espresso Machines | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
