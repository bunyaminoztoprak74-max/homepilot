# HomePilot SEO Batch Report — 13 July 2026

## Scope

- Site: HomePilot
- Repository: `D:\Projects\HomePilot`
- Production property: `https://homepilot-iota.vercel.app/`
- Business model: Amazon Associates and eBay Partner Network affiliate content
- Processing model: local validation, one final commit, one push, existing Vercel project only

## Search baseline

Google Search Console, last 28 days:

- Clicks: 2
- Impressions: 813
- CTR: 0.2%
- Average position: 18.5
- Visible query themes: home espresso setup, robot vacuum schedules, robot vacuum emptying frequency, no-go zones, floor bumps, and espresso machine pump troubleshooting

Bing Webmaster Tools, last 3 months:

- Clicks: 0
- Impressions: 0
- CTR: 0%

## Completed work

- Preserved the existing local `images.unoptimized: true` change so HomePilot does not consume Vercel Image Optimization transformations.
- Corrected category hub URLs in the sitemap from duplicate `/best-{category}` entries to the real `/{category}` routes.
- Removed the invalid WebSite SearchAction that pointed to a non-existent `/search` route.
- Linked WebSite and Organization structured data with stable `@id` values.
- Replaced the internal developer-facing homepage FAQ with a reader-facing product-selection explanation.
- Replaced unsupported “tested” claims in priority SEO descriptions with comparison-based language.
- Replaced the unverified “Updated Monthly” homepage badge with accurate retailer and price-change context.

## Validation

- ESLint: passed with 0 errors and 0 warnings.
- TypeScript: passed.
- Production build: passed; 321 routes generated.
- Sitemap crawl: 308 unique URLs checked; 0 duplicates and 0 failures.
- Affiliate CTAs retain `nofollow sponsored noopener` attributes.
- No BAT files are present.

## Priority growth opportunities

1. Strengthen the robot-vacuum maintenance cluster around schedule, emptying frequency, no-go zones, and obstacle clearance.
2. Expand the “home espresso setup” and espresso pump troubleshooting clusters with direct internal links to relevant buying guides.
3. Add a custom domain before broader link acquisition; the current `vercel.app` hostname limits brand ownership and migration stability.
4. Monitor CTR for pages ranking near positions 10–20 and test titles only after enough impressions accumulate.
5. Build Bing visibility from zero using the corrected sitemap and IndexNow only after a stable custom domain decision.
