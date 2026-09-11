import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { SiteShell } from "@/components/SiteShell";
import { categories, districts } from "@/data/destinations";
import { inr, planTrip, type BudgetTier, type TravelMode, type TripPlan } from "@/lib/trip-planner";

export const Route = createFileRoute("/trip-planner")({
  head: () => ({
    meta: [
      { title: "Trip planner — build a day-by-day Andhra Pradesh plan | My Bags Journey" },
      {
        name: "description",
        content:
          "Enter your city, boarding point, budget, interests and duration to get a day-by-day Andhra Pradesh itinerary with travel, food, stay options and a downloadable plan.",
      },
      { property: "og:title", content: "Trip planner — My Bags Journey" },
      {
        property: "og:description",
        content:
          "Personalised itineraries with schedule, estimated fares and stay options across Andhra Pradesh districts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TripPlannerPage;
});

const field =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring";

function TripPlannerPage() {
  const [fromCity, setFromCity] = useState("Visakhapatnam");
  const [boardingPoint, setBoardingPoint] = useState("Dwaraka Bus Station (RTC Complex)");
  const [districtSlug, setDistrictSlug] = useState(districts[0]?.slug ?? "");
  const [days, setDays] = useState(2);
  const [travellers, setTravellers] = useState(2);
  const [budget, setBudget] = useState(12000);
  const [tier, setTier] = useState<BudgetTier>("medium");
  const [mode, setMode] = useState<TravelMode>("cab");
  const [interests, setInterests] = useState<string[]>([]);
  const [plan, setPlan] = useState<TripPlan | null>(null);

  const toggleInterest = (value: string) =>
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value],
    );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlan(
      planTrip({
        fromCity,
        boardingPoint,
        districtSlug,
        days,
        travellers,
        budget,
        tier,
        interests,
        mode,
      }),
    );
  };

  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="print-hide">
          <h1 className="text-3xl font-semibold sm:text-4xl">Plan my journey</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Tell us where you start, what you enjoy and how long you have. We arrange the right places
            in the right order, with travel, food, stays and an estimated cost you can save as PDF.
          </p>
        </div>

        <form onSubmit={submit} className="surface-card print-hide mt-8 grid gap-4 p-5 sm:grid-cols-2">
          <label className="text-sm">
            <span className="font-medium">From (your city)</span>
            <input value={fromCity} onChange={(e) => setFromCity(e.target.value)} className={`${field} mt-1`} required />
          </label>
          <label className="text-sm">
            <span className="font-medium">Boarding point</span>
            <input
              value={boardingPoint}
              onChange={(e) => setBoardingPoint(e.target.value)}
              placeholder="Bus stand, railway station or pickup spot"
              className={`${field} mt-1`}
            />
          </label>
          <label className="text-sm">
            <span className="font-medium">To (district)</span>
            <select value={districtSlug} onChange={(e) => setDistrictSlug(e.target.value)} className={`${field} mt-1`}>
              {districts.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.name} · {d.hq}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="font-medium">Travel preference</span>
            <select value={mode} onChange={(e) => setMode(e.target.value as TravelMode)} className={`${field} mt-1`}>
              <option value="bus">Bus / train — cheapest</option>
              <option value="cab">Cab or hired taxi</option>
              <option value="own">Own car or bike</option>
            </select>
          </label>
          <label className="text-sm">
            <span className="font-medium">Duration (days)</span>
            <input
              type="number"
              min={1}
              max={7}
              value={days}
              onChange={(e) => setDays(Math.max(1, Math.min(7, Number(e.target.value))))}
              className={`${field} mt-1`}
            />
          </label>
          <label className="text-sm">
            <span className="font-medium">Travellers</span>
            <input
              type="number"
              min={1}
              max={12}
              value={travellers}
              onChange={(e) => setTravellers(Math.max(1, Math.min(12, Number(e.target.value))))}
              className={`${field} mt-1`}
            />
          </label>
          <label className="text-sm">
            <span className="font-medium">Total budget (Rs)</span>
            <input
              type="number"
              min={1000}
              step={500}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className={`${field} mt-1`}
            />
          </label>
          <label className="text-sm">
            <span className="font-medium">Comfort level</span>
            <select value={tier} onChange={(e) => setTier(e.target.value as BudgetTier)} className={`${field} mt-1`}>
              <option value="low">Budget — lodges, buses, more places per day</option>
              <option value="medium">Comfort — hotels, cabs, relaxed pace</option>
              <option value="high">Premium — resorts, private car, slow travel</option>
            </select>
          </label>

          <fieldset className="sm:col-span-2">
            <legend className="text-sm font-medium">Interests</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {categories.map((c) => {
                const active = interests.includes(c);
                return (
                  <button
                    type="button"
                    key={c}
                    onClick={() => toggleInterest(c)}
                    aria-pressed={active}
                    className={
                      active
                        ? "rounded-full border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                        : "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                    }
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="rounded-full bg-saffron px-6 py-3 text-sm font-semibold text-saffron-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Build my itinerary
            </button>
          </div>
        </form>

        {plan ? <PlanView plan={plan} /> : null}
      </section>
    </SiteShell>
  );
}

function PlanView({ plan }: { plan: TripPlan }) {
  return (
    <div id="trip-plan" className="print-area mt-10 space-y-6">
      <div className="surface-card p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">
              {plan.input.days}-day {plan.districtName} trip plan
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {plan.input.fromCity} → {plan.districtName} · boarding at{" "}
              {plan.input.boardingPoint || plan.input.fromCity} · {plan.input.travellers} traveller(s)
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="print-hide rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Download PDF
          </button>
        </div>
        <p className={`mt-4 text-sm font-medium ${plan.withinBudget ? "text-primary" : "text-destructive"}`}>
          Estimated total {inr(plan.total)} against your budget of {inr(plan.input.budget)} —{" "}
          {plan.withinBudget ? "comfortably within budget." : "over budget; drop a day or pick a simpler comfort level."}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {plan.days.map((day) => (
          <div key={day.day} className="surface-card p-5">
            <h3 className="text-lg font-semibold">Day {day.day}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {day.places.length ? day.places.map((p) => p.name).join(" · ") : "Free day — rest and local markets"}
            </p>
            <ol className="mt-4 space-y-2 text-sm">
              {day.schedule.map((s, i) => (
                <li key={`${day.day}-${i}`} className="flex gap-3">
                  <span className="w-14 shrink-0 font-medium text-primary">{s.time}</span>
                  <span>{s.activity}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="surface-card p-5">
        <h3 className="text-lg font-semibold">Estimated travel cost</h3>
        <table className="mt-4 w-full text-left text-sm">
          <thead>
            <tr className="text-muted-foreground">
              <th className="pb-2">Item</th>
              <th className="pb-2">Details</th>
              <th className="pb-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {plan.costs.map((c) => (
              <tr key={c.label} className="border-t border-border/70">
                <td className="py-2 font-medium">{c.label}</td>
                <td className="py-2 text-muted-foreground">{c.note}</td>
                <td className="py-2 text-right">{inr(c.amount)}</td>
              </tr>
            ))}
            <tr className="border-t border-border">
              <td className="py-2 font-semibold" colSpan={2}>
                Total
              </td>
              <td className="py-2 text-right font-semibold">{inr(plan.total)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="surface-card p-5">
        <h3 className="text-lg font-semibold">Stay options</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {plan.stays.map((s) => (
            <div key={s.hotel} className="rounded-lg border border-border p-4 text-sm">
              <p className="font-semibold">{s.hotel}</p>
              <p className="mt-1 text-muted-foreground">{s.tier} · {s.distance}</p>
              <p className="mt-2">{s.price}</p>
              <p className="mt-1 text-muted-foreground">{s.food}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="surface-card p-5">
        <h3 className="text-lg font-semibold">Before you go</h3>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {plan.tips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
