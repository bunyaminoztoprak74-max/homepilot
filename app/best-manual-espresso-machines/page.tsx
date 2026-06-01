import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-manual-espresso-machines");

export const metadata: Metadata = {
  title: `Best Manual Espresso Machines | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-manual-espresso-machines" },
  openGraph: {
    title: `Best Manual Espresso Machines | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-manual-espresso-machines`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Manual Espresso Machines | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
