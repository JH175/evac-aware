/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

const accessToken = import.meta.env.VITE_MAPBOX_KEY;

if (typeof accessToken === "string") {
  mapboxgl.accessToken = accessToken;
}

export default function DashMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState<number>(-70.9);
  const [lat, setLat] = useState<number>(42.35);
  const [zoom, setZoom] = useState<number>(9);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      attributionControl: false,
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(
      new mapboxgl.FullscreenControl({
        container: document.querySelector("body"),
      })
    );
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );
  });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        map.current?.resize();
      }
    });

    if (mapContainer.current) {
      resizeObserver.observe(mapContainer.current);
    }

    return () => {
      if (mapContainer.current) {
        resizeObserver.unobserve(mapContainer.current);
      }
    };
  }, []);

  return <div ref={mapContainer} className="h-full w-full" />;
}
