import heritage from "@/assets/cat-heritage.jpg";
import waterfalls from "@/assets/cat-waterfalls.jpg";
import coast from "@/assets/cat-coast.jpg";
import forts from "@/assets/cat-forts.jpg";
import hills from "@/assets/cat-hills.jpg";
import nature from "@/assets/cat-nature.jpg";
import culture from "@/assets/cat-culture.jpg";
import mustVisit from "@/assets/cat-must-visit.jpg";

const map: Record<string, string> = {
  "Heritage & Spiritual": heritage,
  Waterfalls: waterfalls,
  "Coast & Beaches": coast,
  "History & Forts": forts,
  "Hills & Adventure": hills,
  "Nature & Wildlife": nature,
  "Culture & Local Life": culture,
  "Must Visit": mustVisit,
};

export const categoryImage = (category: string) => map[category] ?? mustVisit;

export const categoryAlt = (name: string, category: string) =>
  `${name} — ${category.toLowerCase()} destination in Andhra Pradesh`;
