import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-espresso-grinders-for-home");

export const metadata: Metadata = {
  title: `Best Espresso Grinders for Home | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-espresso-grinders-for-home" },
  openGraph: {
    title: `Best Espresso Grinders for Home | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-espresso-grinders-for-home`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Espresso Grinders for Home | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
