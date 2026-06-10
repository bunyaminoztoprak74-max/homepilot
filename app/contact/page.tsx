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
        For editorial corrections, product suggestions, or partnership questions, reach out directly:
      </p>
      <ul className="mt-2 space-y-1">
        <li><strong>Name:</strong> Bünyamin Öztoprak</li>
        <li><strong>Email:</strong> <a href="mailto:bztoprak1@gmail.com" className="underline">bztoprak1@gmail.com</a></li>
      </ul>
      <p className="mt-4">
        If you are reporting a product issue, include the product name, Amazon ASIN, page URL, and what should be corrected.
      </p>
    </TrustPage>
  );
}
