import type { Metadata } from "next";
import { ComparisonHub } from "@/components/ComparisonHub";

export const metadata: Metadata = {
  title: "Best Blenders Comparison",
  description: "Compare HomePilot blenders top picks side by side — features, value, and who each model is best for.",
  alternates: { canonical: "/comparisons/blenders" }
};

export default function Page() {
  return (
    <ComparisonHub
      category="blenders"
      title="Best Blenders Comparison"
      description="A focused comparison of the top blenders picks by use case, budget, and practical fit."
    />
  );
}
