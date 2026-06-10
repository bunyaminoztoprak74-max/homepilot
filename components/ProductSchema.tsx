import { JsonLd } from "@/components/JsonLd";
import type { Product } from "@/lib/types";
import { buildEbayAffiliateUrl } from "@/lib/ebay-config";

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
            url: product.amazonUrl,
            sku: product.asin,
            description: product.editorialSummary,
            category: product.category,
            // No static prices/ratings are published per site policy; offers
            // link to live retailer listings for current pricing.
            offers: [
              {
                "@type": "Offer",
                url: product.amazonUrl,
                seller: { "@type": "Organization", name: "Amazon" },
                availability: "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                url: buildEbayAffiliateUrl(product.ebayUrl, `${product.id}-schema`),
                seller: { "@type": "Organization", name: "eBay" },
                availability: "https://schema.org/InStock"
              }
            ]
          }
        }))
      }}
    />
  );
}
