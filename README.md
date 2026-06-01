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

Retailer URLs are stored per product in `data/products.json` as `amazonUrl`, `ebayUrl`, and `walmartUrl`. Amazon URLs use the `affiliater07c-20` Associates tracking ID.

## Deploy

This project is ready for Vercel. Import the repository, keep the default Next.js settings, and deploy.
