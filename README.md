# HomePilot

Premium Amazon affiliate website for robot vacuums, air fryers, and espresso machines.

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

Affiliate URLs use:

```text
https://www.amazon.com/dp/ASIN?tag=YOURTAG-20
```

Replace `YOURTAG-20` before production deployment.

## Deploy

This project is ready for Vercel. Import the repository, keep the default Next.js settings, and deploy.
