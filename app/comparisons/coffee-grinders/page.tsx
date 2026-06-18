import type { Metadata } from "next";
import { ComparisonHub } from "@/components/ComparisonHub";

export const metadata: Metadata = {
  title: "Best Coffee Grinders Comparison",
  description: "Compare HomePilot coffee grinders top picks side by side — features, value, and who each model is best for.",
  alternates: { canonical: "/comparisons/coffee-grinders" }
};

export default function Page() {
  return (
    <ComparisonHub
      category="coffee-grinders"
      title="Best Coffee Grinders Comparison"
      description="A focused comparison of the top coffee grinders picks by use case, budget, and practical fit."
    />
  );
}
