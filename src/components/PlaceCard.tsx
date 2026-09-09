import { Link } from "@tanstack/react-router";
import type { Place } from "@/data/destinations";
import { districts } from "@/data/destinations";

export function PlaceCard({ place, showDistrict = false }: { place: Place; showDistrict?: boolean }) {
  const district = districts.find((d) => d.slug === place.districtSlug);

  return (
    <Link
      to="/destinations/$placeSlug"
      params={{ placeSlug: place.slug }}
      className="surface-card group flex flex-col gap-2 p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lift"
    >
      <span className="w-fit rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-foreground">
        {place.category}
      </span>
      <h3 className="text-lg leading-snug font-semibold group-hover:text-primary">{place.name}</h3>
      {showDistrict && district ? (
        <p className="text-sm text-muted-foreground">
          {district.name} district · HQ {district.hq}
        </p>
      ) : null}
      <span className="mt-auto pt-2 text-sm font-medium text-primary">View guide →</span>
    </Link>
  );
}
