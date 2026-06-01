export type Category = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  intro: string;
  buyingGuide: string[];
  faq: FAQItem[];
};

export type Product = {
  id: string;
  category: string;
  name: string;
  asin: string;
  affiliateUrl: string;
  image: string;
  priceText: string;
  comparisonBadge: string;
  bestFor: string;
  features: string[];
  pros: string[];
  cons: string[];
  affiliateNote: string;
  editorialSummary: string;
  whyPicked: string;
  whoShouldBuy: string;
  whoShouldSkip: string;
  keyTradeoffs: string[];
};

export type Guide = {
  slug: string;
  category: string;
  title: string;
  description: string;
  toc: string[];
  productIds: string[];
  bestFor: string[];
  pros: string[];
  cons: string[];
  alternatives: string[];
  body: string[];
  faq: FAQItem[];
};

export type FAQItem = {
  question: string;
  answer: string;
};
