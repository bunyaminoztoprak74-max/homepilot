import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | HomePilot",
  description: "HomePilot affiliate disclosure and retailer link policy.",
  alternates: { canonical: "/affiliate-disclosure" }
};

export default function AffiliateDisclosurePage() {
  return (
    <TrustPage
      title="Affiliate Disclosure"
      description="HomePilot may earn commissions from qualifying purchases through retailer links."
    >
      <p>
        As an Amazon Associate we may earn from qualifying purchases. HomePilot is also a member of the eBay
        Partner Network and may earn a commission on qualifying purchases made through eBay links on this site,
        at no extra cost to you. These links help fund the site without charging readers to access buying guides.
      </p>
      <p>
        Affiliate relationships do not allow us to publish fake prices, fake star ratings, fake review counts,
        or unsupported product claims. HomePilot does not display static prices, star ratings, or review counts
        unless they come from a compliant live source. Product cards direct readers to retailer pages so current
        pricing, availability, seller terms, shipping, and return policies can be confirmed before purchase.
      </p>
      <p>
        Our editorial recommendations focus on durable buying criteria: who a product is best for, where it
        may disappoint, what tradeoffs matter, and whether the product fits a realistic household use case.
      </p>
    </TrustPage>
  );
}
