import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-espresso-machines-for-beginners");

export const metadata: Metadata = {
  title: "Best Espresso Machines for Beginners | HomePilot",
  description: page?.description,
  alternates: { canonical: "/best-espresso-machines-for-beginners" }
};

export default function BestEspressoMachinesForBeginnersPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
