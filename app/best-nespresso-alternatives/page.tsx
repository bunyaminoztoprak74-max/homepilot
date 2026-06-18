import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-nespresso-alternatives");

export const metadata: Metadata = {
  title: { absolute: `Best Nespresso Alternatives 2026 — Tested vs Capsule | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-nespresso-alternatives" },
  openGraph: {
    title: `Best Nespresso Alternatives 2026 — Tested vs Capsule | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-nespresso-alternatives`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Nespresso Alternatives 2026 — Tested vs Capsule | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
