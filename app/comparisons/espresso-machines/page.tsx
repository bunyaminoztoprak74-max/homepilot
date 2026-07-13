import type { Metadata } from "next";
import { ComparisonHub } from "@/components/ComparisonHub";

export const metadata: Metadata = {
  title: "Espresso Machine Comparison: Find Your Best Setup",
  description: "Compare espresso machines by boiler design, grinder needs, milk workflow, temperature control, counter space, learning curve, and maintenance.",
  alternates: { canonical: "/comparisons/espresso-machines" }
};

export default function Page() {
  return (
    <ComparisonHub
      category="espresso-machines"
      title="Espresso Machine Comparison: Find Your Best Setup"
      description="Quick answer: choose a semi-automatic machine for control, an assisted machine for a gentler learning curve, or a superautomatic for one-touch convenience. Compare boiler design, grinder needs, milk workflow, temperature stability, counter space, cleaning, and repairability before buying."
    />
  );
}
