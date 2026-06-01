import type { Metadata } from "next";
import { ComparisonHub } from "@/components/ComparisonHub";

export const metadata: Metadata = {
  title: "Best Espresso Machines Comparison",
  description: "Compare HomePilot espresso machine top picks by beginner workflow, milk drinks, grinder needs, and retailer links.",
  alternates: { canonical: "/comparisons/espresso-machines" }
};

export default function Page() {
  return (
    <ComparisonHub
      category="espresso-machines"
      title="Best Espresso Machines Comparison"
      description="A focused hub for comparing espresso machines by beginner setup, milk drinks, built-in grinders, automatic workflows, and compact kitchens."
    />
  );
}
