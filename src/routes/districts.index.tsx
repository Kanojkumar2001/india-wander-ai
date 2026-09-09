import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteShell } from "@/components/SiteShell";
import { districts, places } from "@/data/destinations";

export const Route = createFileRoute("/districts/")({
  head: () => ({
    meta: [
      { title: "Districts of Andhra Pradesh — KmsAndMiles" },
      {
        name: "description",
        content:
          "Browse tourist places district by district across Andhra Pradesh, with headquarters and place counts for every district.",
      },
      { property: "og:title", content: "Districts of Andhra Pradesh — KmsAndMiles" },
      {
        property: "og:description",
        content: "Explore every district's temples, waterfalls, beaches, forts and hidden gems.",
      },
    ],
  }),
  component: DistrictsPage,
});

function DistrictsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-semibold sm:text-4xl">Explore by district</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          {places.length} verified places across {districts.length} districts — temples, waterfalls,
          beaches, forts, wetlands and local craft villages.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {districts.map((district) => (
            <Link
              key={district.slug}
              to="/districts/$districtSlug"
              params={{ districtSlug: district.slug }}
              className="surface-card group p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <h2 className="text-lg font-semibold group-hover:text-primary">{district.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">Headquarters: {district.hq}</p>
              <p className="mt-3 text-sm font-medium text-primary">{district.places.length} places</p>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
