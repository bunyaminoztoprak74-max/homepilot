import { BestCategoryPage, bestCategoryMetadata } from "@/components/BestCategoryPage";

const config = {
  categorySlug: "coffee-grinders",
  title: "Best Coffee Grinders 2026: Top Burr Grinders Tested & Compared",
  description: "Compare the best burr coffee grinders for espresso, pour over, and drip — ranked by grind consistency, ease of use, and value.",
  path: "/best-coffee-grinders"
};

export const metadata = bestCategoryMetadata(config);

export default function Page() {
  return <BestCategoryPage config={config} />;
}
