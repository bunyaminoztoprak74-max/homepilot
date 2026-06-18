import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-coffee-grinders-for-espresso");

export const metadata: Metadata = {
  title: { absolute: `Best Coffee Grinders for Espresso 2026 | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-coffee-grinders-for-espresso" },
  openGraph: {
    title: `Best Coffee Grinders for Espresso 2026 | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-coffee-grinders-for-espresso`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Coffee Grinders for Espresso 2026 | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
