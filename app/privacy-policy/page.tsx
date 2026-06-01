import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";

export const metadata: Metadata = {
  title: "Privacy Policy | HomePilot",
  description: "How HomePilot handles privacy, analytics, affiliate links, and reader data.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <TrustPage title="Privacy Policy" description="A simple privacy summary for HomePilot readers.">
      <p>
        HomePilot is a content website that publishes buying guides and retailer links. We do not sell user
        accounts, collect payment information, or operate a checkout. When readers click a retailer link, they
        leave HomePilot and interact with that retailer under the retailer&apos;s own privacy, cookie, and commerce
        policies.
      </p>
      <p>
        We may use basic hosting logs, analytics, and affiliate reporting to understand site performance,
        traffic sources, and whether links are working. Those systems may process browser, device, referral,
        and click information. We use that information to maintain the site, improve guides, and keep
        recommendations useful.
      </p>
      <p>
        Amazon and eBay links may include tracking parameters that help attribute qualifying purchases or clicks.
        HomePilot does not receive your full shopping cart, payment details, or private retailer account
        information from those links.
      </p>
    </TrustPage>
  );
}
