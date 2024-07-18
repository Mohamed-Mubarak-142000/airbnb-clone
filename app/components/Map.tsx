"use client";
import React, { useState } from "react";
import MapGl, { Marker, Popup } from "react-map-gl";
import { SearchResultData } from "../types/app";
import { getCenter } from "geolib";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import "mapbox-gl/dist/mapbox-gl.css"
const Map = ({ resDataSearch }: { resDataSearch: SearchResultData }) => {
  const coordinates = resDataSearch.map((listing) => ({
    longitude: listing.long,
    latitude: listing.lat,
  }));

  const center = getCenter(coordinates) as {
    longitude: number;
    latitude: number;
  };

  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    zoom: 11,
    longitude: center.longitude,
    latitude: center.latitude,
  });

  return (
    <MapGl
      {...viewPort}
      mapStyle="mapbox://styles/mapbox/navigation-night-v1"
      mapboxAccessToken={process.env.NEXT_PUBLIC_TOKEN_MAP_URL}
      onMove={(nextView) =>
        setViewPort((prev) => {
          return {
            ...prev,
            longitude: nextView.viewState.longitude,
            latitude: nextView.viewState.latitude,
          };
        })
      }
    >
      {resDataSearch.map((listing) => (
        <div key={listing.lat}>
          <Marker longitude={listing.long} latitude={listing.lat}>
            <LocationMarkerIcon className="text-4xl size-8 text-red-500 animate-bounce"  />
          </Marker>
        </div>
      ))}
    </MapGl>
  );
};

export default Map;
