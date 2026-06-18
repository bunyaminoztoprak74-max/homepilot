import { BestCategoryPage, bestCategoryMetadata } from "@/components/BestCategoryPage";

const config = {
  categorySlug: "air-fryers",
  title: "Best Air Fryers",
  description: "Compare real Amazon air fryer listings for compact kitchens, families, dual-basket cooking, and weeknight meals.",
  path: "/best-air-fryers"
};

export const metadata = bestCategoryMetadata(config);

export default function Page() {
  return <BestCategoryPage config={config} />;
}
