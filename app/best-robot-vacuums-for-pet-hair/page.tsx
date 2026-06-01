import type { Metadata } from "next";
import { SeoIntentPage } from "@/components/SeoIntentPage";
import { getProductsByIds, getSeoPage } from "@/lib/content";

const page = getSeoPage("best-robot-vacuums-for-pet-hair");

export const metadata: Metadata = {
  title: "Best Robot Vacuums for Pet Hair | HomePilot",
  description: page?.description,
  alternates: { canonical: "/best-robot-vacuums-for-pet-hair" }
};

export default function BestRobotVacuumsForPetHairPage() {
  return <SeoIntentPage page={page!} products={getProductsByIds(page!.productIds)} />;
}
