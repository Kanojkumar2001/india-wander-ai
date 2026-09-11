import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { SiteShell } from "@/components/SiteShell";
import { getDistrict, getPlace, placeDetails, places } from "@/data/destinations";
import { categoryAlt, categoryImage } from "@/lib/category-images";

export const Route = createFileRoute("/destinations/$placeSlug")({
  loader: ({ params }) => {
    const place = getPlace(params.placeSlug);
    if (!place) throw notFound();
    const district = getDistrict(place.districtSlug)!;
    return { place, district, detail: placeDetails[place.slug] ?? null };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Place not found — My Bags Journey" }, { name: "robots", content: "noindex" }] };
    }
    const { place, district } = loaderData;
    const title = `${place.name}, ${district.name} — travel guide | My Bags Journey`;
    const description = `${place.name} in ${district.name} district, Andhra Pradesh: history, how to reach, transport by budget, nearby stays and the best season to visit.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: PlacePage,
});

function PlacePage() {
  const { place, district, detail } = Route.useLoaderData();
  const nearby = places
    .filter((p) => p.districtSlug === district.slug && p.slug !== place.slug)
    .slice(0, 6);

  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden border-b border-border bg-forest text-forest-foreground">
        <img
          src={categoryImage(place.category)}
          alt={categoryAlt(place.name, place.category)}
          width={800}
          height={600}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-12">
          <Link
            to="/districts/$districtSlug"
            params={{ districtSlug: district.slug }}
            className="text-sm font-medium text-saffron"
          >
            ← {district.name} district
          </Link>
          <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">{place.name}</h1>
          <p className="mt-3 max-w-2xl opacity-90">
            {place.category} · {district.name} district · Headquarters {district.hq}, Andhra Pradesh
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <article className="surface-card p-6">
          <h2 className="text-2xl font-semibold">History, origin &amp; significance</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {detail?.history ??
              `${place.name} lies in ${district.name} district of Andhra Pradesh and draws visitors for its ${place.category.toLowerCase()} appeal. Local communities around ${district.hq} have cared for the site over generations, and its present shape reflects the settlement, patronage and administrative history of the region. Plan a half-day visit and pair it with other stops nearby.`}
          </p>

          <h3 className="mt-6 text-lg font-semibold">Famous for</h3>
          <ul className="mt-2 grid gap-2 sm:grid-cols-2">
            {(detail?.famousFor ?? [
              `${place.category} experience typical of ${district.name}`,
              "Photogenic surroundings, best in the early morning",
              "Easy add-on to a district day trip",
              "Local food and craft stalls close by",
            ]).map((item) => (
              <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-saffron">•</span>
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="surface-card mt-6 p-6">
          <h2 className="text-2xl font-semibold">Distance &amp; how to reach</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="py-2 pr-4 font-semibold">Transit hub</th>
                  <th className="py-2 font-semibold">Distance from the site</th>
                </tr>
              </thead>
              <tbody>
                {(detail?.transitHubs ?? [
                  { hub: "Nearest bus stand", detail: `${district.hq} bus stand — regular APSRTC services` },
                  { hub: "Nearest railway station", detail: `${district.hq} railway station` },
                  { hub: "Nearest airport", detail: "Nearest domestic airport in the region" },
                ]).map((row) => (
                  <tr key={row.hub} className="border-b border-border/60">
                    <td className="py-3 pr-4 font-medium">{row.hub}</td>
                    <td className="py-3 text-muted-foreground">{row.detail}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-3 pr-4 font-medium">Best season to visit</td>
                  <td className="py-3 text-muted-foreground">
                    {detail?.bestSeason ?? "October to February"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        {detail?.transport ? (
          <article className="surface-card mt-6 p-6">
            <h2 className="text-2xl font-semibold">Transport options by budget level</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border text-muted-foreground">
                    <th className="py-2 pr-4 font-semibold">From</th>
                    <th className="py-2 pr-4 font-semibold">Low budget</th>
                    <th className="py-2 pr-4 font-semibold">Medium budget</th>
                    <th className="py-2 font-semibold">High / luxury</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.transport.map((row) => (
                    <tr key={row.from} className="border-b border-border/60 align-top">
                      <td className="py-3 pr-4 font-medium">{row.from}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.low}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.medium}</td>
                      <td className="py-3 text-muted-foreground">{row.high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        ) : null}

        {detail?.stays ? (
          <article className="surface-card mt-6 p-6">
            <h2 className="text-2xl font-semibold">Nearby accommodations</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {detail.stays.map((stay) => (
                <div key={stay.hotel} className="rounded-lg border border-border bg-secondary/40 p-4">
                  <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-foreground">
                    {stay.tier}
                  </span>
                  <h3 className="mt-2 text-base font-semibold">{stay.hotel}</h3>
                  <p className="text-sm text-muted-foreground">{stay.distance}</p>
                  <p className="mt-2 text-sm font-medium text-primary">{stay.price} per night</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stay.food}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stay.rooms}</p>
                </div>
              ))}
            </div>
          </article>
        ) : (
          <article className="surface-card mt-6 p-6">
            <h2 className="text-2xl font-semibold">Where to stay</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Budget lodges and mid-range hotels are available in {district.hq}, the district
              headquarters, along with homestays in the surrounding villages. Verified rates and
              amenities for this place are being added.
            </p>
          </article>
        )}

        <section className="mt-10">
          <h2 className="text-xl font-semibold">More in {district.name}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((item) => (
              <Link
                key={item.slug}
                to="/destinations/$placeSlug"
                params={{ placeSlug: item.slug }}
                className="surface-card p-4 text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
