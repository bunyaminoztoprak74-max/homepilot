import { BestCategoryPage, bestCategoryMetadata } from "@/components/BestCategoryPage";

const config = {
  categorySlug: "air-fryers",
  title: "Best Air Fryers 2026: Top Picks Tested & Compared",
  description: "Best air fryers of 2026 — tested for crispiness, counter fit, cleanup, and usable cooking area. Honest picks for families, small kitchens, and budget buyers.",
  path: "/best-air-fryers"
};

export const metadata = bestCategoryMetadata(config);

export default function Page() {
  return <BestCategoryPage config={config} />;
}
