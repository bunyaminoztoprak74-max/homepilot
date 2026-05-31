import { BestCategoryPage, bestCategoryMetadata } from "@/components/BestCategoryPage";

const config = {
  categorySlug: "robot-vacuums",
  title: "Best Robot Vacuums",
  description: "Compare real Amazon robot vacuum listings for self-empty docks, LiDAR mapping, pet hair, and lower-maintenance floor care.",
  path: "/best-robot-vacuums"
};

export const metadata = bestCategoryMetadata(config);

export default function Page() {
  return <BestCategoryPage config={config} />;
}
