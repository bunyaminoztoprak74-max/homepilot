import type { Metadata } from "next";
import { ComparisonHub } from "@/components/ComparisonHub";

export const metadata: Metadata = {
  title: "Best Stand Mixers Comparison",
  description: "Compare HomePilot stand mixers top picks side by side — features, value, and who each model is best for.",
  alternates: { canonical: "/comparisons/stand-mixers" }
};

export default function Page() {
  return (
    <ComparisonHub
      category="stand-mixers"
      title="Best Stand Mixers Comparison"
      description="A focused comparison of the top stand mixers picks by use case, budget, and practical fit."
    />
  );
}
