import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { PlaceCard } from "@/components/PlaceCard";
import { SiteShell } from "@/components/SiteShell";
import { getDistrict, places } from "@/data/destinations";

export const Route = createFileRoute("/districts/$districtSlug")({
  loader: ({ params }) => {
    const district = getDistrict(params.districtSlug);
    if (!district) throw notFound();
    return { district };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "District not found — My Bags Journey" }, { name: "robots", content: "noindex" }] };
    }
    const { district } = loaderData;
    const title = `${district.name} district travel guide — My Bags Journey`;
    const description = `${district.places.length} places to visit in ${district.name} district (HQ ${district.hq}), Andhra Pradesh, with distances, transport and stay guidance.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: DistrictPage,
});

function DistrictPage() {
  const { district } = Route.useLoaderData();
  const districtPlaces = places.filter((p) => p.districtSlug === district.slug);
  const grouped = districtPlaces.reduce<Record<string, typeof districtPlaces>>((acc, place) => {
    acc[place.category] = [...(acc[place.category] ?? []), place];
    return acc;
  }, {});

  return (
    <SiteShell>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <Link to="/districts" className="text-sm font-medium text-primary">
            ← All districts
          </Link>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">{district.name} district</h1>
          <p className="mt-2 text-muted-foreground">
            Headquarters {district.hq} · {districtPlaces.length} places curated for travellers
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10">
        {Object.entries(grouped).map(([category, items]) => (
          <section key={category} className="mb-10">
            <h2 className="text-xl font-semibold">{category}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((place) => (
                <PlaceCard key={place.slug} place={place} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </SiteShell>
  );
}
