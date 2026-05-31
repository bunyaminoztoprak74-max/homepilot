import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "HomePilot privacy policy.",
  alternates: { canonical: "/privacy" }
};

export default function Page() {
  return (
    <TrustPage title="Privacy Policy" description="A simple privacy summary for HomePilot readers.">
      <p>
        HomePilot is a content website. We may use basic analytics, hosting logs, and affiliate link tracking provided by third-party services. Affiliate links may send readers to Amazon, where Amazon&apos;s own privacy and cookie policies apply.
      </p>
      <p>
        Do not submit sensitive personal information through contact forms or email. If newsletter features are enabled later, signup details should be handled by the selected email provider&apos;s privacy terms.
      </p>
    </TrustPage>
  );
}
