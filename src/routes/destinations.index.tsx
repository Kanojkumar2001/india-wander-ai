import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { PlaceCard } from "@/components/PlaceCard";
import { SiteShell } from "@/components/SiteShell";
import { categories, districts, places } from "@/data/destinations";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "All tourist places in Andhra Pradesh — KmsAndMiles" },
      {
        name: "description",
        content:
          "Search 200+ tourist places across Andhra Pradesh by name, district or type — heritage temples, waterfalls, beaches, forts, wildlife and hidden gems.",
      },
      { property: "og:title", content: "All tourist places in Andhra Pradesh — KmsAndMiles" },
      {
        property: "og:description",
        content: "Search and filter every destination in the KmsAndMiles travel database.",
      },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  const [query, setQuery] = useState("");
  const [district, setDistrict] = useState("all");
  const [category, setCategory] = useState("all");

  const results = useMemo(
    () =>
      places.filter(
        (p) =>
          (district === "all" || p.districtSlug === district) &&
          (category === "all" || p.category === category) &&
          p.name.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query, district, category],
  );

  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-semibold sm:text-4xl">Find your next place</h1>
        <p className="mt-2 text-muted-foreground">
          {places.length} places · {districts.length} districts · one source of truth
        </p>

        <div className="surface-card mt-6 grid gap-3 p-4 sm:grid-cols-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a place, temple or waterfall"
            aria-label="Search places"
            className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring sm:col-span-3"
          />
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            aria-label="Filter by district"
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="all">All districts</option>
            {districts.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name}
              </option>
            ))}
          </select>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filter by type"
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="all">All types</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <p className="self-center text-sm text-muted-foreground">{results.length} matches</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((place) => (
            <PlaceCard key={place.slug} place={place} showDistrict />
          ))}
        </div>
        {results.length === 0 ? (
          <p className="mt-10 text-center text-muted-foreground">
            No places match that search yet. Try a different spelling or clear the filters.
          </p>
        ) : null}
      </section>
    </SiteShell>
  );
}
