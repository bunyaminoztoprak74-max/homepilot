import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-robot-vacuums-under-300");

export const metadata: Metadata = {
  title: "Best Robot Vacuums Under $300 | HomePilot",
  description: page?.description,
  alternates: { canonical: "/best-robot-vacuums-under-300" }
};

export default function BestRobotVacuumsUnder300Page() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
