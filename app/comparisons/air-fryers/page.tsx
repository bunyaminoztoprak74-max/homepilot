import type { Metadata } from "next";
import { ComparisonHub } from "@/components/ComparisonHub";

export const metadata: Metadata = {
  title: "Air Fryer Comparison: Size, Type and Best Uses",
  description: "Compare air fryers by usable basket area, capacity, single or dual zones, counter footprint, controls, cleanup, temperature range, and workflow.",
  alternates: { canonical: "/comparisons/air-fryers" }
};

export default function Page() {
  return (
    <ComparisonHub
      category="air-fryers"
      title="Air Fryer Comparison: Size, Type and Best Uses"
      description="Quick answer: choose a wide single basket for simple everyday cooking, dual baskets for two foods with separate timing, or a toaster-oven style model for larger flat foods. Compare usable area, counter footprint, controls, cleanup, temperature range, and normal portion size."
    />
  );
}
