# HomePilot Content Model

HomePilot is data-first so future automation can update recommendations without changing page code.

- Add or edit products in `data/products.json`.
- Add category copy in `data/categories.json`.
- Add or revise guide pages in `data/guides.json`.
- Add category comparison rows in `data/comparisons.json`.
- MDX is enabled for future long-form editorial pages in `content/`.

Affiliate rules baked into templates:

- No hardcoded prices.
- No fake ratings.
- No fake reviews.
- Product buttons support Amazon and eBay retailer links. Amazon links use the configured Amazon Associates tracking ID.
