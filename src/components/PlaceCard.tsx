import { Link } from "@tanstack/react-router";
import type { Place } from "@/data/destinations";
import { districts } from "@/data/destinations";
import { categoryAlt, categoryImage } from "@/lib/category-images";

export function PlaceCard({ place, showDistrict = false }: { place: Place; showDistrict?: boolean }) {
  const district = districts.find((d) => d.slug === place.districtSlug);

  return (
    <Link
      to="/destinations/$placeSlug"
      params={{ placeSlug: place.slug }}
      className="surface-card group flex flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={categoryImage(place.category)}
          alt={categoryAlt(place.name, place.category)}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-foreground">
          {place.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg leading-snug font-semibold group-hover:text-primary">{place.name}</h3>
        {showDistrict && district ? (
          <p className="text-sm text-muted-foreground">
            {district.name} district · HQ {district.hq}
          </p>
        ) : null}
        <span className="mt-auto pt-2 text-sm font-medium text-primary">View guide →</span>
      </div>
    </Link>
  );
}
