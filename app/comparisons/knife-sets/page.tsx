import type { Metadata } from "next";
import { ComparisonHub } from "@/components/ComparisonHub";

export const metadata: Metadata = {
  title: "Best Knife Sets Comparison",
  description: "Compare HomePilot knife sets top picks side by side — features, value, and who each model is best for.",
  alternates: { canonical: "/comparisons/knife-sets" }
};

export default function Page() {
  return (
    <ComparisonHub
      category="knife-sets"
      title="Best Knife Sets Comparison"
      description="A focused comparison of the top knife sets picks by use case, budget, and practical fit."
    />
  );
}
