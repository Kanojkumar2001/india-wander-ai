import { useEffect, useRef, useState } from "react";

type Marker = {
  lat: number;
  lng: number;
  title: string;
};

type Props = {
  markers: Marker[];
  zoom?: number;
  className?: string;
};

declare global {
  interface Window {
    google?: any;
    __kmInitMap?: () => void;
    __kmMapsReady?: boolean;
  }
}

const SCRIPT_ID = "km-google-maps-js";

function loadMapsApi(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.__kmMapsReady && window.google?.maps) {
      resolve();
      return;
    }
    const key = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"];
    if (!key) {
      reject(new Error("Map key missing"));
      return;
    }

    const existing = document.getElementById(SCRIPT_ID);
    const waitForReady = () => {
      const timer = window.setInterval(() => {
        if (window.__kmMapsReady && window.google?.maps) {
          window.clearInterval(timer);
          resolve();
        }
      }, 100);
      window.setTimeout(() => {
        window.clearInterval(timer);
        if (!window.__kmMapsReady) reject(new Error("Map failed to load"));
      }, 12000);
    };

    if (existing) {
      waitForReady();
      return;
    }

    window.__kmInitMap = () => {
      window.__kmMapsReady = true;
    };

    const channel = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID"] ?? "";
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async&callback=__kmInitMap${
      channel ? `&channel=${channel}` : ""
    }`;
    script.onerror = () => reject(new Error("Map failed to load"));
    document.head.appendChild(script);
    waitForReady();
  });
}

export function GoogleMapView({ markers, zoom = 12, className }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (markers.length === 0) return;

    loadMapsApi()
      .then(() => {
        if (cancelled || !containerRef.current) return;
        const maps = window.google.maps;
        const map = new maps.Map(containerRef.current, {
          center: { lat: markers[0].lat, lng: markers[0].lng },
          zoom,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          gestureHandling: "cooperative",
        });

        const bounds = new maps.LatLngBounds();
        const info = new maps.InfoWindow();
        markers.forEach((m) => {
          const position = { lat: m.lat, lng: m.lng };
          bounds.extend(position);
          const marker = new maps.Marker({ map, position, title: m.title });
          marker.addListener("click", () => {
            info.setContent(`<strong>${m.title}</strong>`);
            info.open({ anchor: marker, map });
          });
        });
        if (markers.length > 1) map.fitBounds(bounds, 48);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message);
      });

    return () => {
      cancelled = true;
    };
  }, [markers, zoom]);

  if (error) {
    return (
      <div className={`grid place-items-center rounded-xl border border-border bg-secondary/40 p-6 text-sm text-muted-foreground ${className ?? ""}`}>
        Live map is unavailable right now.
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      role="application"
      aria-label="Interactive map of the destination"
      className={`overflow-hidden rounded-xl border border-border bg-secondary/40 ${className ?? ""}`}
    />
  );
}
