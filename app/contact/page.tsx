import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact HomePilot.",
  alternates: { canonical: "/contact" }
};

export default function Page() {
  return (
    <TrustPage title="Contact" description="Questions, corrections, and product suggestions are welcome.">
      <p>
        For editorial corrections, product suggestions, or partnership questions, use the contact channel listed by the site owner wherever HomePilot is published.
      </p>
      <p>
        If you are reporting a product issue, include the product name, Amazon ASIN, page URL, and what should be corrected.
      </p>
    </TrustPage>
  );
}
