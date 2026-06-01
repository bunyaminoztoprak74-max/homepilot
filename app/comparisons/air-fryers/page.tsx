import type { Metadata } from "next";
import { ComparisonHub } from "@/components/ComparisonHub";

export const metadata: Metadata = {
  title: "Best Air Fryers Comparison",
  description: "Compare HomePilot air fryer top picks by capacity, kitchen size, cleanup, and retailer links.",
  alternates: { canonical: "/comparisons/air-fryers" }
};

export default function Page() {
  return (
    <ComparisonHub
      category="air-fryers"
      title="Best Air Fryers Comparison"
      description="A focused hub for comparing air fryers by compact kitchens, family meals, dual baskets, frozen foods, and easy cleanup."
    />
  );
}
