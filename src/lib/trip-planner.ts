import {
  districts,
  getDistrict,
  placeDetails,
  places,
  type Place,
  type Stay,
} from "@/data/destinations";

export type BudgetTier = "low" | "medium" | "high";
export type TravelMode = "bus" | "cab" | "own";

export type TripInput = {
  fromCity: string;
  boardingPoint: string;
  districtSlug: string;
  days: number;
  travellers: number;
  budget: number;
  tier: BudgetTier;
  interests: string[];
  mode: TravelMode;
};

export type DayPlan = {
  day: number;
  places: Place[];
  schedule: { time: string; activity: string }[];
};

export type CostLine = { label: string; amount: number; note: string };

export type TripPlan = {
  input: TripInput;
  districtName: string;
  days: DayPlan[];
  stays: { tier: string; hotel: string; price: string; food: string; distance: string }[];
  costs: CostLine[];
  total: number;
  withinBudget: boolean;
  tips: string[];
};

const tierRates: Record<BudgetTier, { stay: number; food: number; local: number; label: string }> = {
  low: { stay: 900, food: 350, local: 400, label: "Budget" },
  medium: { stay: 2400, food: 700, local: 900, label: "Comfort" },
  high: { stay: 6000, food: 1500, local: 2200, label: "Premium" },
};

const modeRates: Record<TravelMode, { perKm: number; label: string }> = {
  bus: { perKm: 1.6, label: "APSRTC / private bus" },
  cab: { perKm: 14, label: "App cab or hired taxi" },
  own: { perKm: 7, label: "Own car or bike (fuel + tolls)" },
};

// Rough one-way road distance from a few common boarding cities to each district HQ.
const approxDistanceKm = (fromCity: string, districtName: string) => {
  const seed = `${fromCity.toLowerCase().trim()}|${districtName.toLowerCase()}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) hash = (hash * 31 + seed.charCodeAt(i)) % 100000;
  return 120 + (hash % 380); // 120–500 km
};

const genericStays = (tier: BudgetTier) => {
  const rate = tierRates[tier];
  return [
    {
      tier: rate.label,
      hotel: "Town lodge near the bus stand",
      price: `Rs ${Math.round(rate.stay * 0.7)}–${Math.round(rate.stay * 1.2)}`,
      food: "Attached South Indian mess, meals plate",
      distance: "Central, walkable to transport",
    },
    {
      tier: rate.label,
      hotel: "Tourism department guest house",
      price: `Rs ${Math.round(rate.stay * 0.9)}–${Math.round(rate.stay * 1.5)}`,
      food: "Breakfast included, dinner on request",
      distance: "Close to the main sightseeing cluster",
    },
  ];
};

export const planTrip = (input: TripInput): TripPlan => {
  const district = getDistrict(input.districtSlug) ?? districts[0]!;
  const pool = places.filter((p) => p.districtSlug === district.slug);

  const matches = (p: Place) => input.interests.length === 0 || input.interests.includes(p.category);
  const ranked = [
    ...pool.filter(matches),
    ...pool.filter((p) => !matches(p)),
  ];

  const perDay = input.tier === "low" ? 4 : input.tier === "medium" ? 3 : 2;
  const days: DayPlan[] = [];
  let cursor = 0;

  for (let d = 1; d <= input.days; d += 1) {
    const dayPlaces = ranked.slice(cursor, cursor + perDay);
    cursor += perDay;
    const slots = ["08:30", "11:00", "14:30", "16:30", "18:00"];
    const schedule: { time: string; activity: string }[] = [];

    if (d === 1) {
      schedule.push({
        time: "06:00",
        activity: `Board at ${input.boardingPoint || input.fromCity} — depart ${input.fromCity} for ${district.hq}`,
      });
    } else {
      schedule.push({ time: "07:30", activity: "Breakfast at the stay, then start the day route" });
    }

    dayPlaces.forEach((p, i) => {
      schedule.push({ time: slots[i] ?? "17:30", activity: `Visit ${p.name} · ${p.category}` });
      if (i === 1) schedule.push({ time: "13:00", activity: "Local lunch — Andhra thali / tiffin stop" });
    });

    schedule.push({
      time: "19:30",
      activity:
        d === input.days
          ? `Dinner and return journey to ${input.fromCity}`
          : `Dinner and overnight stay near ${district.hq}`,
    });

    days.push({ day: d, places: dayPlaces, schedule });
  }

  const rate = tierRates[input.tier];
  const mode = modeRates[input.mode];
  const distance = approxDistanceKm(input.fromCity, district.name);
  const travel = Math.round(distance * 2 * mode.perKm * (input.mode === "own" ? 1 : input.travellers));
  const nights = Math.max(0, input.days - 1);
  const rooms = Math.max(1, Math.ceil(input.travellers / 2));
  const stayCost = nights * rooms * rate.stay;
  const foodCost = input.days * input.travellers * rate.food;
  const localCost = input.days * rate.local;
  const entryCost = input.days * perDay * 40 * input.travellers;

  const costs: CostLine[] = [
    {
      label: `Travel — ${mode.label}`,
      amount: travel,
      note: `~${distance} km each way from ${input.fromCity}, round trip`,
    },
    {
      label: `Stay — ${rate.label}`,
      amount: stayCost,
      note: `${nights} night(s) × ${rooms} room(s)`,
    },
    { label: "Food", amount: foodCost, note: `${input.days} day(s) × ${input.travellers} traveller(s)` },
    { label: "Local transport & sightseeing", amount: localCost, note: "Autos, jeeps, ropeway, boating" },
    { label: "Entry tickets & parking", amount: entryCost, note: "Approximate per-site charges" },
  ];

  const total = costs.reduce((sum, c) => sum + c.amount, 0);

  const detail = days
    .flatMap((d) => d.places)
    .map((p) => placeDetails[p.slug])
    .find(Boolean);

  const detailStays: Stay[] = detail?.stays ?? [];
  const stays = detailStays.length
    ? detailStays.slice(0, 3).map((s) => ({
        tier: s.tier,
        hotel: s.hotel,
        price: s.price,
        food: s.food,
        distance: s.distance,
      }))
    : genericStays(input.tier);

  const tips = [
    `Best window for ${district.name}: October to February for cooler, drier days.`,
    input.mode === "bus"
      ? "Book APSRTC seats a day ahead on the official app for the early-morning services."
      : "Start by 06:00 to beat highway traffic and reach the first stop before the midday heat.",
    "Carry cash — many rural counters, jeep drivers and small eateries do not accept UPI reliably.",
    "Respect temple dress codes and leave no plastic behind at waterfalls and beaches.",
  ];

  return {
    input,
    districtName: district.name,
    days,
    stays,
    costs,
    total,
    withinBudget: total <= input.budget,
    tips,
  };
};

export const inr = (value: number) => `Rs ${value.toLocaleString("en-IN")}`;
