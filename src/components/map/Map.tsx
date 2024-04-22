/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useRef, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

const accessToken = import.meta.env.VITE_MAPBOX_KEY;

if (typeof accessToken === "string") {
  mapboxgl.accessToken = accessToken;
}

export default function DashMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      attributionControl: false,
      center: [-70.9, 42.35],
      zoom: 9,
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
    const handleResize = () => {
      if (map.current) {
        map.current.resize();
      }
    };

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach(() => {
        handleResize();
      });
    });

    if (mapContainer.current) {
      resizeObserver.observe(mapContainer.current);
    }

    return () => {
      if (mapContainer.current) {
        resizeObserver.unobserve(mapContainer.current);
      }
    };
  }, [map.current, mapContainer.current]);

  return <div ref={mapContainer} className="h-full w-full" />;
}
