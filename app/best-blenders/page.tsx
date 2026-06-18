import { BestCategoryPage, bestCategoryMetadata } from "@/components/BestCategoryPage";

const config = {
  categorySlug: "blenders",
  title: "Best Blenders 2026: High-Performance & Personal Blenders Compared",
  description: "Compare the best blenders for smoothies, soups, and frozen drinks — from Vitamix to personal single-serve models.",
  path: "/best-blenders"
};

export const metadata = bestCategoryMetadata(config);

export default function Page() {
  return <BestCategoryPage config={config} />;
}
