import type { Metadata } from "next";
import { ComparisonHub } from "@/components/ComparisonHub";

export const metadata: Metadata = {
  title: "Best Air Purifiers Comparison",
  description: "Compare HomePilot air purifiers top picks side by side — features, value, and who each model is best for.",
  alternates: { canonical: "/comparisons/air-purifiers" }
};

export default function Page() {
  return (
    <ComparisonHub
      category="air-purifiers"
      title="Best Air Purifiers Comparison"
      description="A focused comparison of the top air purifiers picks by use case, budget, and practical fit."
    />
  );
}
