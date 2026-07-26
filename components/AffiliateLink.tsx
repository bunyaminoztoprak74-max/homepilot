"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

type AffiliateLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  retailer: "amazon" | "ebay";
  productId?: string;
  placement: string;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function AffiliateLink({
  retailer,
  productId,
  placement,
  onClick,
  ...props
}: AffiliateLinkProps) {
  function trackClick(event: MouseEvent<HTMLAnchorElement>) {
    const payload = {
      event: "affiliate_click",
      retailer,
      product_id: productId ?? "unknown",
      placement,
      page_path: window.location.pathname
    };

    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(payload);
    window.gtag?.("event", "affiliate_click", {
      retailer,
      product_id: payload.product_id,
      placement,
      page_path: payload.page_path
    });
    onClick?.(event);
  }

  return <a {...props} data-affiliate={retailer} data-placement={placement} onClick={trackClick} />;
}
