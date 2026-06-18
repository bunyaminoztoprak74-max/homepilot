import { BestCategoryPage, bestCategoryMetadata } from "@/components/BestCategoryPage";

const config = {
  categorySlug: "knife-sets",
  title: "Best Knife Sets 2026: Chef Knives & Sets Tested & Compared",
  description: "Compare the best kitchen knife sets and chef knives — German vs Japanese steel, budget picks, and premium options.",
  path: "/best-knife-sets"
};

export const metadata = bestCategoryMetadata(config);

export default function Page() {
  return <BestCategoryPage config={config} />;
}
