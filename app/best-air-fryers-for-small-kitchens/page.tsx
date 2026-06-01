import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-air-fryers-for-small-kitchens");

export const metadata: Metadata = {
  title: "Best Air Fryers for Small Kitchens | HomePilot",
  description: page?.description,
  alternates: { canonical: "/best-air-fryers-for-small-kitchens" }
};

export default function BestAirFryersForSmallKitchensPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
