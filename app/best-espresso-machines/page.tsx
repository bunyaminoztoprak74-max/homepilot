import { BestCategoryPage, bestCategoryMetadata } from "@/components/BestCategoryPage";

const config = {
  categorySlug: "espresso-machines",
  title: "Best Espresso Machines",
  description: "Compare real Amazon espresso machines and grinder picks for beginners, all-in-one setups, and better coffee at home.",
  path: "/best-espresso-machines"
};

export const metadata = bestCategoryMetadata(config);

export default function Page() {
  return <BestCategoryPage config={config} />;
}
