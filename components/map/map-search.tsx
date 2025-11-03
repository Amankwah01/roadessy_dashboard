"use client";

import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Loader2, MapPin, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { useDebounce } from "use-debounce";
import { useMap } from "./../../context/context";
import { cn } from "@/lib/utils";
import {
  iconMap,
  LocationFeature,
  LocationSuggestion,
} from "@/lib/mapbox/utils";
import { LocationMarker } from "../location-related/location-marker";
import { LocationPopup } from "../location-related/location-popup";

export default function MapSearch() {
  const { map } = useMap();
  const [query, setQuery] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [results, setResults] = useState<LocationSuggestion[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] =
    useState<LocationFeature | null>(null);
  const [selectedLocations, setSelectedLocations] = useState<LocationFeature[]>(
    []
  );
  const [debouncedQuery] = useDebounce(query, 400);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const caretPosRef = useRef<number | null>(null);
  const wasFocusedRef = useRef<boolean>(false);
  const [deviceLocation, setDeviceLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // Watch device geolocation and use it for proximity when available.
  useEffect(() => {
    if (!navigator || !navigator.geolocation) return;

    let watcherId: number | null = null;
    try {
      watcherId = navigator.geolocation.watchPosition(
        (pos) => {
          setDeviceLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => {
          // ignore permission/position errors — just don't set device location
          console.info("Geolocation watch error:", err);
        },
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 10000 }
      );
    } catch (err) {
      // ignore
    }

    return () => {
      try {
        if (watcherId !== null && navigator.geolocation.clearWatch) {
          navigator.geolocation.clearWatch(watcherId);
        }
      } catch (err) {
        // ignore
      }
    };
  }, []);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchLocations = async () => {
      setIsSearching(true);
      setIsOpen(true);

      try {
        // Build base params
        const params = new URLSearchParams({
          q: debouncedQuery,
          access_token: process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "",
          session_token: process.env.NEXT_PUBLIC_MAPBOX_SESSION_TOKEN ?? "",
          limit: "5",
        });

        // No country filter — searches are global by default.

        // Optionally include proximity if configured via env var
        // When enabled, use the current map center (if available) to bias results.
        const useProximity =
          process.env.NEXT_PUBLIC_MAPBOX_USE_PROXIMITY === "true";
        if (useProximity) {
          // Prefer device location (live) if available, otherwise fall back to map center
          if (deviceLocation) {
            params.set(
              "proximity",
              `${deviceLocation.lng},${deviceLocation.lat}`
            );
          } else if (map && map.getCenter) {
            try {
              const center = map.getCenter();
              // Mapbox expects proximity as lon,lat
              params.set("proximity", `${center.lng},${center.lat}`);
            } catch (err) {
              // ignore if map isn't ready
            }
          }
        }

        const url = `https://api.mapbox.com/search/searchbox/v1/suggest?${params.toString()}`;

        const res = await fetch(url);
        const data = await res.json();
        setResults(data.suggestions ?? []);
      } catch (err) {
        console.error("Geocoding error:", err);
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    searchLocations();
  }, [debouncedQuery]);

  // When results update, restore focus and caret position so typing is not interrupted
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    // Only restore selection if the input was already focused. Avoid forcing focus
    // on every results update because that can move the caret unexpectedly.
    try {
      if (!wasFocusedRef.current) return;
      const pos = caretPosRef.current;
      // Use microtask to restore selection after DOM updates to avoid interfering
      // with intermediate re-renders that could move the caret.
      setTimeout(() => {
        try {
          // Only restore if element still exists
          const cur = inputRef.current;
          if (!cur) return;
          cur.focus();
          if (pos !== null && typeof pos === "number") {
            const clamped = Math.max(0, Math.min(cur.value.length, pos));
            cur.setSelectionRange(clamped, clamped);
          }
        } catch (err) {
          // ignore
        }
      }, 0);
    } catch (err) {
      // ignore
    }
  }, [results]);

  // Handle input change
  const handleInputChange = (value: string) => {
    setQuery(value);
    setDisplayValue(value);
  };

  // Track caret position when user types
  const handleInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    try {
      const el = inputRef.current;
      if (!el) return;
      caretPosRef.current = el.selectionStart ?? null;
      wasFocusedRef.current = true;
    } catch (err) {
      // ignore
    }
  };

  // Also track caret position on input events (covers composition, paste, mobile, etc.)
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    try {
      const el = inputRef.current;
      if (!el) return;
      caretPosRef.current = el.selectionStart ?? null;
      wasFocusedRef.current = true;
    } catch (err) {
      // ignore
    }
  };

  const handleFocus = () => {
    wasFocusedRef.current = true;
  };

  const handleBlur = () => {
    wasFocusedRef.current = false;
  };

  // Handle location selection
  const handleSelect = async (suggestion: LocationSuggestion) => {
    try {
      setIsSearching(true);

      const retrieveParams = new URLSearchParams({
        access_token: process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "",
        session_token: process.env.NEXT_PUBLIC_MAPBOX_SESSION_TOKEN ?? "",
      });

      const res = await fetch(
        `https://api.mapbox.com/search/searchbox/v1/retrieve/${
          suggestion.mapbox_id
        }?${retrieveParams.toString()}`
      );

      const data = await res.json();
      const featuresData = data?.features;

      if (map && featuresData?.length > 0) {
        const coordinates = featuresData[0]?.geometry?.coordinates;

        map.flyTo({
          center: coordinates,
          zoom: 14,
          speed: 4,
          duration: 1000,
          essential: true,
        });

        setDisplayValue(suggestion.name);

        setSelectedLocations(featuresData);
        setSelectedLocation(featuresData[0]);

        setResults([]);
        setIsOpen(false);
      }
    } catch (err) {
      console.error("Retrieve error:", err);
    } finally {
      setIsSearching(false);
    }
  };

  // Clear search
  const clearSearch = () => {
    setQuery("");
    setDisplayValue("");
    setResults([]);
    setIsOpen(false);
    setSelectedLocation(null);
    setSelectedLocations([]);
  };

  return (
    <>
      <section className="absolute top-4 left-1/2 sm:left-4 z-10 w-[90vw] sm:w-[350px] -translate-x-1/2 sm:translate-x-0 rounded-lg shadow-lg pointer-events-auto">
        <Command className="rounded-lg">
          <div
            className={cn(
              "w-full flex items-center justify-between px-3 gap-1",
              isOpen && "border-b"
            )}
          >
            <CommandInput
              ref={inputRef}
              placeholder="Search locations..."
              value={displayValue}
              onValueChange={handleInputChange}
              onKeyDown={handleInputKey}
              onInput={handleInput}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="flex-1"
            />
            {displayValue && !isSearching && (
              <X
                className="size-4 shrink-0 text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                onClick={clearSearch}
              />
            )}
            {isSearching && (
              <Loader2 className="size-4 shrink-0 text-primary animate-spin" />
            )}
          </div>

          {isOpen && (
            <CommandList className="max-h-60 overflow-y-auto">
              {!query.trim() || isSearching ? null : results.length === 0 ? (
                <CommandEmpty className="py-6 text-center">
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <p className="text-sm font-medium">No locations found</p>
                    <p className="text-xs text-muted-foreground">
                      Try a different search term
                    </p>
                  </div>
                </CommandEmpty>
              ) : (
                <CommandGroup>
                  {results.map((location) => (
                    <CommandItem
                      key={location.mapbox_id}
                      onSelect={() => handleSelect(location)}
                      value={`${location.name} ${location.place_formatted} ${location.mapbox_id}`}
                      className="flex items-center py-3 px-2 cursor-pointer hover:bg-accent rounded-md"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="bg-primary/10 p-1.5 rounded-full">
                          {location.maki && iconMap[location.maki] ? (
                            iconMap[location.maki]
                          ) : (
                            <MapPin className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium truncate max-w-[270px]">
                            {location.name}
                          </span>
                          <span className="text-xs text-muted-foreground truncate max-w-[270px]">
                            {location.place_formatted}
                          </span>
                        </div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          )}
        </Command>
      </section>

      {selectedLocations.map((location) => (
        <LocationMarker
          key={location.properties.mapbox_id}
          location={location}
          onHover={(data) => setSelectedLocation(data)}
        />
      ))}

      {selectedLocation && (
        <LocationPopup
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </>
  );
}
