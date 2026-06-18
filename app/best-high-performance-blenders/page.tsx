import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-high-performance-blenders");

export const metadata: Metadata = {
  title: { absolute: `Best High-Performance Blenders 2026 | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-high-performance-blenders" },
  openGraph: {
    title: `Best High-Performance Blenders 2026 | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-high-performance-blenders`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best High-Performance Blenders 2026 | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
