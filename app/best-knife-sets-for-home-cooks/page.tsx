import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-knife-sets-for-home-cooks");

export const metadata: Metadata = {
  title: { absolute: `Best Knife Sets for Home Cooks 2026 | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-knife-sets-for-home-cooks" },
  openGraph: {
    title: `Best Knife Sets for Home Cooks 2026 | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-knife-sets-for-home-cooks`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Knife Sets for Home Cooks 2026 | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
