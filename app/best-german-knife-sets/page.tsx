import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-german-knife-sets");

export const metadata: Metadata = {
  title: { absolute: `Best German Kitchen Knife Sets 2026 | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-german-knife-sets" },
  openGraph: {
    title: `Best German Kitchen Knife Sets 2026 | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-german-knife-sets`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best German Kitchen Knife Sets 2026 | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
