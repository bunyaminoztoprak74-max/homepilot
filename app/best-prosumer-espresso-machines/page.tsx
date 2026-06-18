import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-prosumer-espresso-machines");

export const metadata: Metadata = {
  title: `Best Prosumer Espresso Machines | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-prosumer-espresso-machines" },
  openGraph: {
    title: `Best Prosumer Espresso Machines | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-prosumer-espresso-machines`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Prosumer Espresso Machines | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
