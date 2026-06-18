/**
 * eBay Partner Network (EPN) configuration.
 *
 * To update your tracking identity, change the values below — every eBay
 * link on the site is generated through `buildEbayAffiliateUrl`, so a
 * single edit here updates tracking everywhere.
 *
 * Where to find/verify these values:
 * - Campaign ID: https://partner.ebay.com -> Campaigns ("My campaigns")
 * - Reference ID (mkrid) / Tool ID: https://partner.ebay.com -> Tools -> Link Generator
 *   (generate one link for ebay.com US and copy the `mkrid` and `toolid`
 *   values it produces if they differ from the defaults below).
 */
export const EBAY_CAMPAIGN_ID = "5339156325";

/** Default EPN reference id for ebay.com (US). Verify in the EPN Link Generator. */
export const EBAY_MKRID = "711-53200-19255-0";

/** Default EPN tool id used by the Link Generator. */
export const EBAY_TOOL_ID = "10001";

/** eBay site id for ebay.com (US). */
export const EBAY_SITE_ID = "0";

/**
 * Builds an EPN-tracked eBay URL from a plain ebay.com URL (search or item
 * page). Existing query parameters on the input URL are preserved.
 *
 * @param targetUrl A URL on ebay.com (e.g. a search results or item URL).
 * @param customId Optional per-placement identifier (e.g. product id or
 *   page slug) so clicks can be segmented in EPN reports.
 */
export function buildEbayAffiliateUrl(targetUrl: string, customId?: string): string {
  if (!targetUrl) return targetUrl;

  let url: URL;
  try {
    url = new URL(targetUrl);
  } catch {
    return targetUrl;
  }

  url.searchParams.set("mkcid", "1");
  url.searchParams.set("mkrid", EBAY_MKRID);
  url.searchParams.set("siteid", EBAY_SITE_ID);
  url.searchParams.set("campid", EBAY_CAMPAIGN_ID);
  url.searchParams.set("toolid", EBAY_TOOL_ID);
  url.searchParams.set("mkevt", "1");

  if (customId) {
    url.searchParams.set("customid", customId.slice(0, 256));
  }

  return url.toString();
}
