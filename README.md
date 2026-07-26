# HomePilot

Premium affiliate website for robot vacuums, air fryers, and espresso machines.

## Local commands

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Content

Product administration is JSON-only:

- `data/products.json`
- `data/categories.json`
- `data/guides.json`
- `data/comparisons.json`

Retailer URLs are stored per product in `data/products.json` as `amazonUrl` and `ebayUrl`. Amazon URLs use the `affiliater07c-20` Associates tracking ID.

## Deploy

HomePilot uses its existing Vercel project. Complete and validate the full batch locally, then push one final commit to let that existing project deploy once. Do not create a second Vercel project.

## Optional GA4 affiliate-click tracking

Set `NEXT_PUBLIC_GA4_ID` to the measurement ID of a HomePilot GA4 web data stream. The site then loads GA4 and sends an `affiliate_click` event with `retailer`, `product_id`, `placement`, and `page_path`. Without this variable, the site works normally and does not load Google Analytics.

Use `.env.example` as the local configuration template. Configure the same variable in the existing hosting project only after a dedicated HomePilot GA4 stream exists.
