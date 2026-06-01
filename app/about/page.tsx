import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about HomePilot and its editorial approach to home product buying guides.",
  alternates: { canonical: "/about" }
};

export default function Page() {
  return (
    <TrustPage title="About HomePilot" description="HomePilot publishes expert buying guides for home products.">
      <p>
        HomePilot helps readers compare robot vacuums, air fryers, and espresso machines without the clutter that often surrounds affiliate recommendations. Our goal is to make product research calmer, faster, and more useful.
      </p>
      <p>
        We focus on practical buying criteria: who a product is best for, which tradeoffs matter, what ownership looks like over time, and when a cheaper or simpler alternative may be the smarter choice.
      </p>
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">What HomePilot is built to do</h2>
        <p className="mt-3">
          HomePilot is intentionally small. We do not publish hundreds of near-duplicate pages or chase every keyword variation. Instead, each category has a focused buying guide, a comparison page, and a limited set of product recommendations that can be maintained over time.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">How we protect reader trust</h2>
        <p className="mt-3">
          Affiliate links may earn commissions, but our product pages avoid fake prices, fake ratings, fake review counts, and unsupported claims. Readers should always confirm live Amazon listing details before buying.
        </p>
      </section>
    </TrustPage>
  );
}
