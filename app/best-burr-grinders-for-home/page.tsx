import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-burr-grinders-for-home");

export const metadata: Metadata = {
  title: { absolute: `Best Burr Grinders for Home Use 2026 | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-burr-grinders-for-home" },
  openGraph: {
    title: `Best Burr Grinders for Home Use 2026 | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-burr-grinders-for-home`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Burr Grinders for Home Use 2026 | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
