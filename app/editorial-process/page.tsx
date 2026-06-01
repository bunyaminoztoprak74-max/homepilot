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
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Selection standards</h2>
        <p className="mt-3">
          We keep shortlists narrow on purpose. A product must map to a clear reader need, such as pet-hair maintenance, compact cooking, family capacity, beginner espresso workflow, or lower-maintenance ownership. Products that do not add a distinct use case are left out.
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
