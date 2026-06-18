import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-chef-knives-under-100");

export const metadata: Metadata = {
  title: { absolute: `Best Chef Knives Under $100 2026 | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-chef-knives-under-100" },
  openGraph: {
    title: `Best Chef Knives Under $100 2026 | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-chef-knives-under-100`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Chef Knives Under $100 2026 | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
