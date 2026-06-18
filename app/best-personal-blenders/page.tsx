import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-personal-blenders");

export const metadata: Metadata = {
  title: { absolute: `Best Personal Blenders 2026 | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-personal-blenders" },
  openGraph: {
    title: `Best Personal Blenders 2026 | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-personal-blenders`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Personal Blenders 2026 | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
