import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";

export const metadata: Metadata = {
  title: "Editorial Process",
  description: "How HomePilot researches, structures, and maintains affiliate buying guides.",
  alternates: { canonical: "/editorial-process" }
};

export default function Page() {
  return (
    <TrustPage title="Editorial Process" description="Our editorial process is built around transparency, usefulness, and compliance.">
      <p>
        We organize every recommendation around durable product criteria instead of temporary claims. Prices, ratings, and review counts can change on Amazon, so HomePilot does not publish static Amazon price or rating data unless it comes from a compliant live source.
      </p>
      <p>
        Product selections are stored in structured JSON so they can be reviewed, replaced, and expanded without changing the site templates. This keeps the site scalable while preserving editorial consistency.
      </p>
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">How products are selected</h2>
        <p className="mt-3">
          We start with reader intent: pet hair, small kitchens, family meals, beginner espresso, low-maintenance ownership, compact storage, and similar practical buying scenarios. A product is included only when it maps to a clear use case and adds a useful comparison point. We avoid padding lists with near-duplicates just to make a page look larger.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Research methodology</h2>
        <p className="mt-3">
          Our research combines specification review, ownership-friction analysis, replacement-part checks, retailer listing verification, internal comparison tables, and editorial judgment about who should buy or skip a product. We review product fit by category-specific criteria such as mapping and dock maintenance for robot vacuums, usable basket capacity for air fryers, and grinder or milk workflow for espresso machines.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Selection standards</h2>
        <p className="mt-3">
          We keep shortlists narrow on purpose. A product must map to a clear reader need, such as pet-hair maintenance, compact cooking, family capacity, beginner espresso workflow, or lower-maintenance ownership. Products that do not add a distinct use case are left out.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Affiliate disclosure and independence</h2>
        <p className="mt-3">
          As an Amazon Associate we may earn from qualifying purchases. We may also link to other retailers such as eBay. Affiliate links do not determine the order of recommendations, and they do not allow us to publish unsupported claims. We do not show static Amazon prices, star ratings, or review counts unless they come from a compliant live source.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Update workflow</h2>
        <p className="mt-3">
          Updates start with the JSON data: ASIN, affiliate URL, image, best-for statement, why-we-picked-it note, skip guidance, and tradeoffs. This keeps recommendations reviewable without creating thin new URLs.
        </p>
      </section>
    </TrustPage>
  );
}
