import type { Metadata } from "next";
import { ComparisonHub } from "@/components/ComparisonHub";

export const metadata: Metadata = {
  title: "Best Robot Vacuums Comparison",
  description: "Compare HomePilot robot vacuum top picks by best-for use case, retailer links, and ownership tradeoffs.",
  alternates: { canonical: "/comparisons/robot-vacuums" }
};

export default function Page() {
  return (
    <ComparisonHub
      category="robot-vacuums"
      title="Best Robot Vacuums Comparison"
      description="A focused hub for comparing robot vacuums by pet hair, mapping, self-empty docks, hard floors, carpets, and budget fit."
    />
  );
}
