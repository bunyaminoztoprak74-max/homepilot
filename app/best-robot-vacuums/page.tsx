import { BestCategoryPage, bestCategoryMetadata } from "@/components/BestCategoryPage";

const config = {
  categorySlug: "robot-vacuums",
  title: "Best Robot Vacuums 2026: Top Picks Tested & Compared",
  description: "Best robot vacuums of 2026 — tested for pet hair, LiDAR mapping, self-empty docks, and hardwood floors. Honest picks with real performance data and current Amazon pricing.",
  path: "/best-robot-vacuums"
};

export const metadata = bestCategoryMetadata(config);

export default function Page() {
  return <BestCategoryPage config={config} />;
}
