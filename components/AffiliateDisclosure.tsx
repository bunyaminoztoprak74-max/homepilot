export function AffiliateDisclosure({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs leading-5 text-neutral-500">
        As an Amazon Associate and eBay Partner Network affiliate, we may earn from qualifying purchases. Check current pricing and seller details on the retailer&apos;s site.
      </p>
    );
  }

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4 text-sm leading-6 text-neutral-600">
      <strong className="font-semibold text-neutral-950">Affiliate disclosure:</strong> As an Amazon Associate and eBay Partner Network affiliate, we may earn from qualifying purchases made through links on this site. Product prices, ratings, review counts, availability, and seller terms change often, so we do not publish static prices or star ratings unless they come from a compliant live source. Always confirm the current listing details on Amazon or eBay before buying.
    </div>
  );
}
