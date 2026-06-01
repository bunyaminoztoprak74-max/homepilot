import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-robot-vacuums-for-tile-floors");

export const metadata: Metadata = {
  title: `Best Robot Vacuums for Tile Floors | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-robot-vacuums-for-tile-floors" },
  openGraph: {
    title: `Best Robot Vacuums for Tile Floors | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-robot-vacuums-for-tile-floors`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Robot Vacuums for Tile Floors | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
