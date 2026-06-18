import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-roomba-alternatives");

export const metadata: Metadata = {
  title: `Best Roomba Alternatives | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-roomba-alternatives" },
  openGraph: {
    title: `Best Roomba Alternatives | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-roomba-alternatives`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Roomba Alternatives | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
