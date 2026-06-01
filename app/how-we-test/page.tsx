import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";

export const metadata: Metadata = {
  title: "How We Test",
  description: "How HomePilot evaluates robot vacuums, air fryers, and espresso machines.",
  alternates: { canonical: "/how-we-test" }
};

export default function Page() {
  return (
    <TrustPage title="How We Test" description="HomePilot evaluates products by real household fit, ownership tradeoffs, and category-specific criteria.">
      <p>
        For robot vacuums, we prioritize navigation, brush design, dock maintenance, obstacle handling, replacement parts, and fit for pets or apartments. For air fryers, we compare usable basket area, cleanup, controls, counter fit, and cooking workflow. For espresso machines, we evaluate workflow, grinder needs, milk steaming, footprint, and upgrade path.
      </p>
      <p>
        We use Amazon product pages for product availability and affiliate destinations, but we avoid static Amazon prices, ratings, and reviews in our own pages. Readers should confirm live listing details directly on Amazon before purchase.
      </p>
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">What we evaluate before recommending</h2>
        <p className="mt-3">
          Every recommendation is reviewed for fit, ownership friction, maintenance, replacement-part availability, and whether the product has a clear reason to exist in the shortlist. We prefer useful tradeoff notes over vague best-product claims.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">What we do not claim</h2>
        <p className="mt-3">
          HomePilot does not claim live lab scores, fake star ratings, or permanent pricing. When exact listing details matter, we direct readers to Amazon so they can verify the current seller, price, availability, and return terms.
        </p>
      </section>
    </TrustPage>
  );
}
