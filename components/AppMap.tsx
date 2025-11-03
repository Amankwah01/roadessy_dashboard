"use client";

import { useRef } from "react";

import MapProvider from "@/lib/mapbox/provider";
import MapStyles from "@/components/map/map-styles";
import MapCotrols from "@/components/map/map-controls";
import MapSearch from "@/components/map/map-search";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

// export default function Map() {
//   const mapContainerRef = useRef<HTMLDivElement | null>(null);

//   return (
//     <div className="w-[99.3%] h-[40%] absolute">
//       <div
//         id="map-container"
//         ref={mapContainerRef}
//         className="absolute h-full w-full"
//       />

//       <MapProvider
//         mapContainerRef={mapContainerRef}
//         initialViewState={{
//           longitude: -1,
//           latitude: 6,
//           zoom: 10,
//         }}
//       >
//         <MapSearch />
//         <MapCotrols />
//         <MapStyles />
//       </MapProvider>
//     </div>
//   );
// }

export function AppMapCard() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs">
      <Card className="h-[50vh] p-0! overflow-hidden">
        <CardHeader>
          <CardTitle className="mt-5">Map</CardTitle>
          {/* <CardDescription className="mt-5">Map</CardDescription> */}
        </CardHeader>

        {/* CardContent placed as a flexible area so the map can expand to fill the card */}
        <CardContent className="p-0! flex-1 min-h-0 -mt-5">
          <div className="relative w-full h-full">
            {/* map container that Mapbox will mount to */}
            <div
              id="map-container"
              ref={mapContainerRef}
              className="absolute inset-0 h-full w-full"
            />

            {/* Provider overlays (loading state, controls, search) should sit on top of the map. The provider
                is positioned absolute to cover the same area as the map container. */}
            <MapProvider
              mapContainerRef={mapContainerRef}
              initialViewState={{
                // 6° 42' 0.2556'' N and 1° 37' 50.8188'' W.
                // 6.700071° N, -1.630783° W
                longitude: -1.630783,
                latitude: 6.700071,
                zoom: 12,
              }}
            >
              {/* <MapSearch /> */}
              <MapCotrols />
              <MapStyles />
            </MapProvider>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
