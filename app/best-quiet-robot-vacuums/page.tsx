import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-quiet-robot-vacuums");

export const metadata: Metadata = {
  title: `Best Quiet Robot Vacuums | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-quiet-robot-vacuums" },
  openGraph: {
    title: `Best Quiet Robot Vacuums | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-quiet-robot-vacuums`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Quiet Robot Vacuums | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
