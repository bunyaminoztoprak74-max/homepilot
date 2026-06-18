import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-blenders-under-100");

export const metadata: Metadata = {
  title: { absolute: `Best Blenders Under $100 2026 | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-blenders-under-100" },
  openGraph: {
    title: `Best Blenders Under $100 2026 | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-blenders-under-100`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Blenders Under $100 2026 | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
