import { JsonLd } from "@/components/JsonLd";
import type { Product } from "@/lib/types";

export function ProductSchema({ products }: { products: Product[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Thing",
            name: product.name,
            image: product.image,
            url: product.affiliateUrl,
            identifier: product.asin,
            description: product.editorialSummary
          }
        }))
      }}
    />
  );
}
