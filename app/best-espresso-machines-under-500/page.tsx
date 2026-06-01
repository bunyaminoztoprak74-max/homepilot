import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-espresso-machines-under-500");

export const metadata: Metadata = {
  title: "Best Espresso Machines Under $500 | HomePilot",
  description: page?.description,
  alternates: { canonical: "/best-espresso-machines-under-500" }
};

export default function BestEspressoMachinesUnder500Page() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
