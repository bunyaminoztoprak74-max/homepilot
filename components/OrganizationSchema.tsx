import { JsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/lib/content";

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "HomePilot",
        url: siteUrl,
        slogan: "Expert buying guides for home products.",
        sameAs: [],
        publishingPrinciples: `${siteUrl}/editorial-process`,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Editorial contact",
          url: `${siteUrl}/contact`
        }
      }}
    />
  );
}
