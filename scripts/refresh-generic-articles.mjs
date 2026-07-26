import fs from "node:fs";

const file = new URL("../data/articles.json", import.meta.url);
const articles = JSON.parse(fs.readFileSync(file, "utf8"));

const focusBySlug = {
  "how-often-should-you-clean-a-robot-vacuum": "match bin, filter, sensor, wheel, and brush cleaning intervals to floor type, pets, and weekly runtime",
  "robot-vacuum-maintenance-checklist": "turn brush, filter, wheel, sensor, dock, and battery care into a repeatable weekly and monthly checklist",
  "robot-vacuum-for-pet-hair-guide": "compare anti-tangle rollers, bin capacity, filtration, dock bags, and replacement-part availability for shedding homes",
  "robot-vacuum-vs-cordless-vacuum": "compare automated daily pickup with stronger manual spot cleaning, stairs, upholstery, and deep carpet work",
  "self-emptying-robot-vacuum-worth-it": "weigh fewer bin-emptying trips against dock footprint, bag cost, noise, and extra maintenance",
  "robot-vacuum-mapping-explained": "understand LiDAR, camera, and basic navigation differences before paying for room maps and no-go zones",
  "robot-vacuum-for-hardwood-floors": "prioritize soft rollers, controlled mopping, debris pickup, wheel care, and protection from trapped grit",
  "robot-vacuum-for-carpet-buying-guide": "check carpet height, brush design, suction behavior, edge pickup, and whether the robot can cross thresholds",
  "robot-vacuum-with-mop-pros-cons": "separate useful light maintenance mopping from unrealistic expectations about stains, edges, and deep cleaning",
  "robot-vacuum-dock-maintenance": "keep charging contacts, evacuation channels, bags, wash trays, and dock sensors clean and dry",
  "robot-vacuum-battery-life-guide": "evaluate runtime, recharge-and-resume behavior, battery access, heat exposure, and realistic replacement timing",
  "robot-vacuum-navigation-types": "compare random, gyroscope, camera, and LiDAR navigation by coverage, privacy, light requirements, and price",
  "robot-vacuum-for-small-apartments": "balance compact dock size, furniture clearance, noise, navigation, and easy storage in limited space",
  "robot-vacuum-replacement-parts": "verify exact model compatibility, filter seals, brush direction, battery voltage, and long-term parts supply",
  "robot-vacuum-schedule-tips": "schedule high-traffic rooms around household routines while avoiding cables, wet spills, pets, and sleeping hours",
  "robot-vacuum-no-go-zones": "use app boundaries and physical barriers to protect cables, pet bowls, fragile rugs, stairs, and problem furniture",
  "air-fryer-vs-convection-oven": "compare preheat time, usable cooking area, batch size, energy use, cleanup, and counter space",
  "how-to-choose-air-fryer-size": "choose by usable basket area and normal portion size rather than relying on quart capacity alone",
  "air-fryer-basket-vs-oven-style": "compare fast basket airflow with oven-style racks, visibility, capacity, footprint, and cleaning effort",
  "air-fryer-cleaning-checklist": "clean the basket, tray, heating area, vents, and exterior safely without damaging the nonstick coating",
  "dual-basket-air-fryer-worth-it": "decide whether synchronized zones solve real meal timing needs enough to justify extra width and cleanup",
  "air-fryer-for-family-meals": "match usable basket area, family portions, batch tolerance, counter footprint, and single- versus dual-zone cooking",
  "air-fryer-for-small-kitchens": "measure counter depth, cabinet clearance, cord position, ventilation space, and realistic storage before buying",
  "air-fryer-for-frozen-foods": "prioritize even airflow, useful presets, basket shaking, temperature control, and easy cleanup for quick meals",
  "air-fryer-wattage-explained": "connect wattage with circuit capacity, heat-up speed, appliance size, and actual cooking performance",
  "air-fryer-accessories-worth-buying": "separate useful racks, pans, liners, and thermometers from accessories that block airflow or duplicate basics",
  "air-fryer-meal-prep-guide": "plan batch order, cooling, storage, reheating, food safety, and cleanup for several meals at once",
  "air-fryer-safety-tips": "manage ventilation, hot surfaces, grease, parchment, electrical load, and unattended cooking risks",
  "air-fryer-nonstick-care": "protect the basket with soft tools, mild cleaning, correct liners, and sensible temperature use",
  "air-fryer-for-two-people": "choose enough usable area for two portions without paying for unnecessary footprint or repeated batches",
  "air-fryer-reheating-leftovers": "restore crispness with lower temperatures, short checks, proper spacing, and food-specific timing",
  "espresso-machine-buying-guide": "match machine type, grinder needs, milk workflow, warm-up time, maintenance, and upgrade path to daily habits",
  "espresso-machine-vs-nespresso": "compare control, convenience, capsule cost, grinder needs, milk workflow, waste, and drink consistency",
  "espresso-grinder-buying-guide": "prioritize fine adjustment, repeatability, retention, burr alignment, workflow, and serviceable parts",
  "beginner-espresso-setup": "build around an espresso-capable grinder, suitable machine, scale, fitted tamper, water, and cleaning tools",
  "manual-vs-automatic-espresso-machine": "weigh hands-on control and learning against one-touch convenience, milk automation, and cleaning complexity",
  "espresso-machine-with-grinder-worth-it": "compare integrated convenience and counter savings with grinder adjustment range, repair risk, and upgrade limits",
  "espresso-machine-for-lattes": "prioritize steam power, recovery time, pitcher clearance, grinder pairing, and repeatable milk workflow",
  "espresso-machine-cleaning-routine": "organize daily rinsing, weekly detergent cleaning, milk-system care, backflushing, and descaling",
  "espresso-machine-pressure-explained": "separate pump ratings from useful brew pressure, puck resistance, flow, grind size, and machine design",
  "espresso-machine-small-kitchen-guide": "measure width, depth, overhead clearance, water access, grinder space, and knock-box workflow",
  "espresso-machine-milk-frothing-guide": "control milk temperature, steam position, vortex, stretching, texture, and immediate wand cleaning",
  "espresso-machine-under-500-tradeoffs": "expect compromises in temperature control, steam recovery, included grinder quality, materials, and serviceability",
  "espresso-machine-under-1000-tradeoffs": "look for better temperature stability, steam performance, controls, build, and workflow rather than cosmetic extras",
  "espresso-machine-water-quality": "balance hardness, alkalinity, taste, corrosion protection, scale risk, filters, and descaling frequency",
  "espresso-machine-maintenance-costs": "budget for filters, detergent, descaler, gaskets, grinder care, water treatment, and possible repairs",
  "coffee-bar-setup-small-space": "plan machine and grinder clearance, power, water, tool storage, preparation flow, and easy cleanup",
  "how-to-compare-home-products": "compare durable fit, maintenance, parts, warranty, and return terms instead of unstable ratings or popularity",
  "amazon-affiliate-price-checking": "verify live price, seller, shipping, returns, included accessories, and availability directly with the retailer",
  "home-product-buying-checklist": "confirm dimensions, power, maintenance, consumables, warranty, returns, parts, and household fit before ordering"
};

const categoryNouns = {
  "robot-vacuums": "robot vacuum",
  "air-fryers": "air fryer",
  "espresso-machines": "espresso setup"
};

function metaDescription(title, focus) {
  const cleanTitle = title.replace(/[?!:]+$/, "");
  const text = `${cleanTitle}. Practical guidance to ${focus}.`;
  if (text.length <= 155) return text;
  return `${cleanTitle}. Compare practical fit, upkeep, ownership tradeoffs, and current retailer details before choosing.`;
}

let changed = 0;
for (const article of articles) {
  const hasLegacyTemplate = article.body.some((paragraph) =>
    paragraph.startsWith("Before buying, compare maintenance steps, replacement parts")
  );
  const focus = focusBySlug[article.slug] ?? (
    hasLegacyTemplate
      ? `understand ${article.title.toLowerCase()} through practical fit, upkeep, safety, and buying criteria`
      : undefined
  );
  if (!focus) continue;

  const noun = categoryNouns[article.category] ?? "home product";
  article.description = metaDescription(article.title, focus);
  article.body = [
    `${article.title} is easiest to answer by starting with the household job, not a popularity list. This guide helps you ${focus}. The right decision depends on how often the product will be used, the space around it, and the maintenance you will realistically complete.`,
    `For ${article.title}, begin with one observable constraint in your home. Measure the available space, note the normal workload, and identify the failure or inconvenience you most want to remove. That evidence keeps the ${noun} decision tied to a real routine instead of an oversized feature list.`,
    `Use the relevant criteria together: ${focus}. A strong option should solve the main need without creating a larger storage, cleaning, noise, compatibility, or operating-cost problem after the first week.`,
    `Before acting on ${article.title}, check model-specific details. Confirm dimensions, included parts, electrical requirements, consumable availability, warranty language, and return terms. Retailer listings change, so verify current price, seller, shipping, and availability on the day of purchase.`,
    `Plan ownership for ${article.title} before checkout. Estimate the cleaning steps, replacement schedule, storage location, and time required for normal use. If two choices perform the core job similarly, the one with easier maintenance and widely available parts is usually the safer long-term fit.`,
    `For a final ${article.title} decision, make a short list of two or three products and record why each fits or fails your routine. Reject any option that misses a must-have constraint, then compare the remaining choices using live retailer information rather than a single rating, temporary discount, or headline specification.`
  ];
  changed += 1;
}

const scheduleLink = {
  label: "How often should you run a robot vacuum?",
  href: "/blog/how-often-should-you-run-a-robot-vacuum"
};
for (const slug of [
  "how-often-should-you-clean-a-robot-vacuum",
  "robot-vacuum-maintenance-checklist",
  "robot-vacuum-schedule-tips",
  "robot-vacuum-cleaning-schedule-for-pet-owners",
  "robot-vacuum-maintenance-costs-explained"
]) {
  const article = articles.find((item) => item.slug === slug);
  if (article && !article.internalLinks.some((link) => link.href === scheduleLink.href)) {
    article.internalLinks.unshift(scheduleLink);
  }
}

for (const article of articles) {
  if (article.description.length > 160) {
    const shortened = article.description.slice(0, 157);
    article.description = `${shortened.slice(0, shortened.lastIndexOf(" "))}…`;
  }
}

fs.writeFileSync(file, `${JSON.stringify(articles, null, 2)}\n`.replace(/\n/g, "\r\n"));
console.log(`Refreshed ${changed} generic articles.`);
