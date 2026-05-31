import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "HomePilot terms and affiliate disclosure.",
  alternates: { canonical: "/terms" }
};

export default function Page() {
  return (
    <TrustPage title="Terms" description="Terms for using HomePilot buying guides and affiliate links.">
      <p>
        HomePilot provides editorial buying guides for informational purposes only. Product availability, pricing, seller terms, warranties, shipping, and return policies can change and should be verified on Amazon or the relevant retailer before purchase.
      </p>
      <p>
        As an Amazon Associate we may earn from qualifying purchases. Affiliate relationships do not permit us to publish fake prices, fake ratings, or fake reviews.
      </p>
    </TrustPage>
  );
}
