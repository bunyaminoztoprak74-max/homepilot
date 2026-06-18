import { BestCategoryPage, bestCategoryMetadata } from "@/components/BestCategoryPage";

const config = {
  categorySlug: "air-purifiers",
  title: "Best Air Purifiers 2026: True HEPA Purifiers Tested & Compared",
  description: "Compare the best True HEPA air purifiers for allergies, pets, and smoke — ranked by CADR, noise, and real-world performance.",
  path: "/best-air-purifiers"
};

export const metadata = bestCategoryMetadata(config);

export default function Page() {
  return <BestCategoryPage config={config} />;
}
