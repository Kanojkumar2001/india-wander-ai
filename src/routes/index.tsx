import { createFileRoute, Link } from "@tanstack/react-router";

import heroImage from "@/assets/hero-valley.jpg";
import { PlaceCard } from "@/components/PlaceCard";
import { SiteShell } from "@/components/SiteShell";
import { categories, districts, getPlace, places } from "@/data/destinations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KmsAndMiles — AI-powered smart tourism for Andhra Pradesh" },
      {
        name: "description",
        content:
          "One place to plan an Andhra Pradesh trip: 200+ district-wise destinations with history, distances, transport by budget, stays and hidden gems.",
      },
      { property: "og:title", content: "KmsAndMiles — AI-powered smart tourism" },
      {
        property: "og:description",
        content:
          "District-wise guides, transport costs, stays and hidden gems across Andhra Pradesh, in one trusted travel companion.",
      },
    ],
  }),
  component: Home,
});

const featuredSlugs = [
  "araku-valley",
  "borra-caves",
  "lepakshi-veerabhadra-temple",
  "horsley-hills",
  "suryalanka-beach",
  "kolleru-lake-bird-sanctuary",
  "amaravati-stupa-archaeological-museum",
  "coringa-wildlife-sanctuary",
  "hope-island",
];

function Home() {
  const featured = featuredSlugs.map(getPlace).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Misty ridges and coffee plantations of the Eastern Ghats at sunrise"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <p className="hidden">
            Smart India Hackathon 2026 · SIH26202
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-forest-foreground sm:text-6xl">
            Every kilometre of Andhra Pradesh, <span className="text-gradient-warm">in one place</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-forest-foreground/85">
            KmsAndMiles brings destination history, distances, transport costs by budget, stays and
            hidden gems together — so planning a trip stops being a scavenger hunt.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/destinations"
              className="rounded-full bg-saffron px-6 py-3 text-sm font-semibold text-saffron-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Explore {places.length} places
            </Link>
            <Link
              to="/districts"
              className="rounded-full border border-forest-foreground/40 px-6 py-3 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest-foreground/10"
            >
              Browse districts
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-3">
        {[
          { value: `${places.length}+`, label: "Curated destinations" },
          { value: districts.length, label: "Districts covered" },
          { value: categories.length, label: "Travel themes" },
        ].map((stat) => (
          <div key={stat.label} className="surface-card p-6">
            <p className="font-display text-3xl font-semibold text-primary">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">Start with these</h2>
        <p className="mt-2 text-muted-foreground">
          Signature stops and quiet corners, from misty valleys to Buddhist hills.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((place) => (
            <PlaceCard key={place.slug} place={place} showDistrict />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold sm:text-3xl">Browse by district</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {districts.map((district) => (
            <Link
              key={district.slug}
              to="/districts/$districtSlug"
              params={{ districtSlug: district.slug }}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              {district.name}
              <span className="ml-2 text-muted-foreground">{district.places.length}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">What each guide gives you</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "History & significance",
              body: "Where the place came from and why locals hold it close.",
            },
            {
              title: "Distance & how to reach",
              body: "Nearest bus stand, railway station and airport with real distances.",
            },
            {
              title: "Transport by budget",
              body: "Low, medium and luxury options with time and fare ranges.",
            },
            {
              title: "Nearby stays",
              body: "Lodges, tourist homes and hotels with rates, food and amenities.",
            },
          ].map((item) => (
            <div key={item.title} className="surface-card p-5">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
