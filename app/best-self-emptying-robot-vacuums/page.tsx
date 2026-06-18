import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-self-emptying-robot-vacuums");

export const metadata: Metadata = {
  title: `Best Self-Emptying Robot Vacuums | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-self-emptying-robot-vacuums" },
  openGraph: {
    title: `Best Self-Emptying Robot Vacuums | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-self-emptying-robot-vacuums`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Self-Emptying Robot Vacuums | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
