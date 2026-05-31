import { JsonLd } from "@/components/JsonLd";
import { getAffiliateUrl } from "@/lib/content";
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
            "@type": "Product",
            name: product.name,
            image: product.image,
            sku: product.asin,
            url: getAffiliateUrl(product.asin),
            brand: product.name.split(" ")[0],
            ...(product.rating && product.reviewCount
              ? {
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: product.rating,
                    reviewCount: product.reviewCount
                  }
                }
              : {}),
            ...(product.price
              ? {
                  offers: {
                    "@type": "Offer",
                    price: product.price.replace("$", ""),
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: getAffiliateUrl(product.asin)
                  }
                }
              : {})
          }
        }))
      }}
    />
  );
}
