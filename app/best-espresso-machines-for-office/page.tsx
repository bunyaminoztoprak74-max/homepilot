import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-espresso-machines-for-office");

export const metadata: Metadata = {
  title: { absolute: `Best Office Espresso Machines 2026 — Easy & Consistent | HomePilot` },
  description: page?.description,
  alternates: { canonical: "/best-espresso-machines-for-office" },
  openGraph: {
    title: `Best Office Espresso Machines 2026 — Easy & Consistent | HomePilot`,
    description: page?.description,
    url: `https://homepilot-iota.vercel.app/best-espresso-machines-for-office`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Office Espresso Machines 2026 — Easy & Consistent | HomePilot`,
    description: page?.description
  }
};

export default function SeoPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
