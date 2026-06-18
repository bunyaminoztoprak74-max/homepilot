import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-espresso-machines-for-lattes");

export const metadata: Metadata = {
  title: `Best Espresso Machines for Lattes | HomePilot`,
  description: page?.description,
  alternates: { canonical: "/best-espresso-machines-for-lattes" },
  openGraph: {
    title: `Best Espresso Machines for Lattes | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-espresso-machines-for-lattes`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Espresso Machines for Lattes | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
