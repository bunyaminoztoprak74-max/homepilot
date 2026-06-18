import { BestCategoryPage, bestCategoryMetadata } from "@/components/BestCategoryPage";

const config = {
  categorySlug: "stand-mixers",
  title: "Best Stand Mixers 2026: KitchenAid & Alternatives Tested",
  description: "Compare the best stand mixers for baking bread, cakes, and cookies — ranked by power, capacity, and attachment ecosystem.",
  path: "/best-stand-mixers"
};

export const metadata = bestCategoryMetadata(config);

export default function Page() {
  return <BestCategoryPage config={config} />;
}
