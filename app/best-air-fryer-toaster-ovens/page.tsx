import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-air-fryer-toaster-ovens");

export const metadata: Metadata = {
  title: `Best Air Fryer Toaster Ovens | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-air-fryer-toaster-ovens" },
  openGraph: {
    title: `Best Air Fryer Toaster Ovens | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-air-fryer-toaster-ovens`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Air Fryer Toaster Ovens | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
