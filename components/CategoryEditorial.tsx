import type { Category } from "@/lib/types";

const editorial: Record<string, { title: string; paragraphs: string[] }[]> = {
  "robot-vacuums": [
    {
      title: "What matters",
      paragraphs: [
        "A robot vacuum is only useful if it can run often without becoming another chore. The most important factors are navigation, brush design, bin maintenance, app controls, and how well the robot handles the rooms you actually live in. A high-suction model with poor navigation can still miss debris, while a modest model with reliable mapping can keep hard floors looking consistently cleaner.",
        "For pet homes, brush design and bin capacity matter more than marketing claims. Hair wraps around rollers, fills bins quickly, and collects around chair legs. Self-empty docks are most valuable in those homes because they reduce the daily habit of emptying a tiny onboard dustbin. For apartments, a slim profile and quiet operation can matter more than an advanced dock."
      ]
    },
    {
      title: "How we evaluate",
      paragraphs: [
        "HomePilot evaluates robot vacuums by matching features to household problems. We separate mapping models from simple bounce-navigation models, self-empty systems from standard bins, and vacuum-only robots from vacuum-and-mop hybrids. We also look for practical ownership details: replacement filters, brush availability, dock footprint, app zoning, no-go areas, and whether the model is likely to handle pets, rugs, thresholds, and furniture.",
        "We do not publish static Amazon prices, star ratings, or review counts. Those values change constantly and should be confirmed on Amazon. Instead, our tables focus on durable buying criteria: who the product is best for, what tradeoffs to expect, and which features are likely to matter after the first week."
      ]
    },
    {
      title: "Who should buy",
      paragraphs: [
        "Buy a robot vacuum if you want maintenance cleaning between deeper vacuuming sessions. The best candidates are homes with mostly hard floors, low-pile rugs, pets that shed, open layouts, and owners who are willing to clear cords and small clutter before cleaning. If you have stairs, thick carpets, or lots of toys on the floor, keep a cordless or upright vacuum in the mix.",
        "Self-empty models are best for busy households and pet owners. Mapping models are best for multi-room homes. Slim budget models make sense for apartments and simple floor plans. Vacuum-and-mop robots are helpful for dust and light footprints, but they do not replace hand mopping sticky spills."
      ]
    },
    {
      title: "Alternatives to consider",
      paragraphs: [
        "A cordless stick vacuum is still the better tool for stairs, upholstery, car interiors, and concentrated messes. If your home has thick carpet or lots of furniture legs, a manual vacuum may deliver better results with less setup. A robot vacuum shines when it runs frequently and keeps dust from accumulating.",
        "If you mainly want mopping, compare dedicated robot mops or wet-dry floor cleaners. Hybrid robots are convenient, but most are maintenance moppers rather than scrubbers. The smartest setup for many homes is a robot vacuum for daily floors plus a cordless vacuum for edges, furniture, and deep cleaning."
      ]
    }
  ],
  "air-fryers": [
    {
      title: "What matters",
      paragraphs: [
        "The best air fryer is not always the biggest or the one with the longest preset list. Real-world usefulness comes from basket shape, usable cooking area, cleanup, counter fit, and whether the controls make repeatable cooking easy. Square baskets usually fit more food than round baskets, and a wide basket often cooks more evenly than a deep narrow one.",
        "For families, dual baskets solve a timing problem: proteins and sides rarely need the same temperature and cook time. For small kitchens, a compact single basket can be better because it is easier to store and clean. Viewing windows are useful when you cook foods that brown quickly, but they also add another surface to wipe."
      ]
    },
    {
      title: "How we evaluate",
      paragraphs: [
        "HomePilot compares air fryers by cooking workflow rather than hype. We look at capacity, basket geometry, cleanup, control layout, temperature range, and whether the appliance can realistically handle weeknight portions. We also consider whether a product is a better fit for snacks, family dinners, meal prep, or two-zone cooking.",
        "We avoid static Amazon prices, star ratings, and review counts. Those details can change by seller and date, so every product card sends readers to Amazon to check the current listing. Our editorial focus stays on durable buying criteria that remain useful even when prices move."
      ]
    },
    {
      title: "Who should buy",
      paragraphs: [
        "Buy an air fryer if you often cook frozen snacks, vegetables, chicken, leftovers, or small-batch meals and want faster preheating than a full oven. It is especially useful for weeknight cooking when you care about crisp texture but do not want to heat a large oven.",
        "Skip or delay buying one if you already use a convection toaster oven, cook mostly large sheet-pan meals, or have very limited counter and storage space. If you do buy, measure your counter depth and leave room around the exhaust."
      ]
    },
    {
      title: "Alternatives to consider",
      paragraphs: [
        "A toaster oven air fryer is a better choice if you want toast, sheet-pan meals, and wider cooking surfaces. A basket air fryer is better when you want speed, crisping, and easy shaking. Families that cook two foods at once should compare dual-basket models, while small households may prefer a compact basket that is easier to store.",
        "If you already own a strong convection oven and rarely cook small batches, an air fryer may be redundant. If you cook frozen snacks, chicken, vegetables, or leftovers several times a week, the convenience can be worth the counter space."
      ]
    }
  ],
  "espresso-machines": [
    {
      title: "What matters",
      paragraphs: [
        "Espresso is a system, not a single machine purchase. Grinder quality, fresh beans, water, dose consistency, puck prep, and cleaning habits all affect the cup. A beginner-friendly machine with a capable grinder can outperform a more expensive machine paired with stale pre-ground coffee.",
        "Manual and semi-automatic machines reward practice. Superautomatic machines prioritize convenience. Built-in grinder machines save counter space but can limit upgrade flexibility. Compact machines fit small kitchens, while larger machines often offer bigger drip trays, water tanks, and more stable workflows."
      ]
    },
    {
      title: "How we evaluate",
      paragraphs: [
        "HomePilot groups espresso products by workflow: compact beginner machines, all-in-one machines, standalone grinders, assisted workflow systems, and superautomatic machines. We compare what each product asks of the user every morning, because a machine that is too fussy will not survive daily use.",
        "We do not show static Amazon prices, ratings, or review counts. Those values should be checked on Amazon at purchase time. Our recommendations focus on machine type, grinder pairing, milk-drink workflow, footprint, and upgrade path."
      ]
    },
    {
      title: "Who should buy",
      paragraphs: [
        "Buy a semi-automatic espresso machine if you want control and are willing to learn. Buy a superautomatic machine if convenience matters more than puck prep. Buy a grinder before upgrading machines if your current setup cannot grind fine and consistently enough for espresso.",
        "Beginners should value repeatability over advanced features. A forgiving machine, a capable grinder, a scale, and fresh beans create a better starting point than chasing pressure numbers or cafe-style aesthetics alone."
      ]
    },
    {
      title: "Alternatives to consider",
      paragraphs: [
        "If you want coffee with almost no learning curve, a pod system or superautomatic machine may be a better fit than a semi-automatic espresso machine. If you enjoy process and control, a separate grinder and portafilter machine create a more flexible upgrade path.",
        "For milk drinks, compare steam wand usability before chasing advanced shot controls. For straight espresso, prioritize grind quality, temperature consistency, and repeatable puck prep. The right setup is the one you will use and clean every day."
      ]
    }
  ]
};

export function CategoryEditorial({ category }: { category: Category }) {
  const sections = editorial[category.slug] ?? [];

  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">Editorial guide</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950">
          How to choose {category.name.toLowerCase()}
        </h2>
      </div>
      {sections.map((section) => (
        <div key={section.title} className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold tracking-tight text-neutral-950">{section.title}</h3>
          <div className="mt-4 space-y-4 text-base leading-8 text-neutral-700">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
