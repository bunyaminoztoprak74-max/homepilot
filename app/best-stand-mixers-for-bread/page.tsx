import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-stand-mixers-for-bread");

export const metadata: Metadata = {
  title: { absolute: `Best Stand Mixers for Bread 2026 | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-stand-mixers-for-bread" },
  openGraph: {
    title: `Best Stand Mixers for Bread 2026 | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-stand-mixers-for-bread`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Stand Mixers for Bread 2026 | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
