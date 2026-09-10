import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";

export type PlaceLocation = {
  placeId: string;
  displayName: string;
  address: string;
  lat: number;
  lng: number;
  rating: number | null;
  reviewCount: number | null;
  mapsUri: string | null;
};

export const locatePlace = createServerFn({ method: "GET" })
  .inputValidator((data) =>
    z.object({ query: z.string().min(3).max(160) }).parse(data),
  )
  .handler(async ({ data }): Promise<PlaceLocation | null> => {
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const connectionKey = process.env["GOOGLE_MAPS_API_KEY"];
    if (!lovableKey || !connectionKey) {
      throw new Error("Google Maps connection is not configured");
    }

    const response = await fetch(`${GATEWAY_URL}/places/v1/places:searchText`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": connectionKey,
        "Content-Type": "application/json",
        "X-Goog-FieldMask":
          "places.id,places.displayName,places.formattedAddress,places.location,places.rating,places.userRatingCount,places.googleMapsUri",
      },
      body: JSON.stringify({
        textQuery: data.query,
        maxResultCount: 1,
        regionCode: "IN",
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`Places search failed [${response.status}]: ${body}`);
      if (response.status === 403) {
        const reason: string | undefined = (() => {
          try {
            return JSON.parse(body)?.error?.details?.find((d: { reason?: string }) => d.reason)
              ?.reason;
          } catch {
            return undefined;
          }
        })();
        if (reason === "API_KEY_HTTP_REFERRER_BLOCKED") {
          throw new Error(
            'Google Maps server key is referrer-restricted. In Google Cloud Console, set the server key\'s application restrictions to "None" or "IP addresses".',
          );
        }
        if (reason === "API_KEY_SERVICE_BLOCKED") {
          throw new Error(
            "Google Maps server key does not allow the Places API. Add it to the key's allowed-APIs list in Google Cloud Console.",
          );
        }
      }
      throw new Error(`Places request failed [${response.status}]: ${body}`);
    }

    const json = (await response.json()) as {
      places?: {
        id: string;
        displayName?: { text?: string };
        formattedAddress?: string;
        location?: { latitude: number; longitude: number };
        rating?: number;
        userRatingCount?: number;
        googleMapsUri?: string;
      }[];
    };

    const first = json.places?.[0];
    if (!first?.location) return null;

    return {
      placeId: first.id,
      displayName: first.displayName?.text ?? data.query,
      address: first.formattedAddress ?? "",
      lat: first.location.latitude,
      lng: first.location.longitude,
      rating: first.rating ?? null,
      reviewCount: first.userRatingCount ?? null,
      mapsUri: first.googleMapsUri ?? null,
    };
  });
