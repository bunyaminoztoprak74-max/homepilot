import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-automatic-espresso-machines");

export const metadata: Metadata = {
  title: `Best Automatic Espresso Machines | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-automatic-espresso-machines" },
  openGraph: {
    title: `Best Automatic Espresso Machines | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-automatic-espresso-machines`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Automatic Espresso Machines | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
