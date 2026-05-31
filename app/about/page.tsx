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
    </TrustPage>
  );
}
