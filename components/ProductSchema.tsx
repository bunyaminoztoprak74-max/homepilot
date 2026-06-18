import { JsonLd } from "@/components/JsonLd";
import type { Product } from "@/lib/types";

// IMPORTANT: Do not mark these list items as schema.org "Product".
// Google's Product structured data requires "offers", "review", or
// "aggregateRating" with real price/rating values. HomePilot does not
// publish static prices, star ratings, or review counts (see
// /affiliate-disclosure), so a "Product" type here would always be
// incomplete and trigger Search Console "Product" errors. Using
// "WebPage" keeps these as a valid, descriptive ItemList without any
// fabricated price or rating data, while still linking to the live
// retailer listing for current pricing and availability.
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
            "@type": "WebPage",
            name: product.name,
            image: product.image,
            url: product.amazonUrl,
            description: product.editorialSummary
          }
        }))
      }}
    />
  );
}
