import { BestCategoryPage, bestCategoryMetadata } from "@/components/BestCategoryPage";

const config = {
  categorySlug: "espresso-machines",
  title: "Best Espresso Machines 2026: Top Picks Tested & Compared",
  description: "Best espresso machines of 2026 — tested for extraction consistency, steam performance, and daily workflow. Beginner to prosumer picks with real comparison data.",
  path: "/best-espresso-machines"
};

export const metadata = bestCategoryMetadata(config);

export default function Page() {
  return <BestCategoryPage config={config} />;
}
