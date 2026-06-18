import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-robot-vacuums-with-mop");

export const metadata: Metadata = {
  title: `Best Robot Vacuums with Mop | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-robot-vacuums-with-mop" },
  openGraph: {
    title: `Best Robot Vacuums with Mop | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-robot-vacuums-with-mop`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Robot Vacuums with Mop | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
