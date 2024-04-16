// this is necessary since leaflet is not server-side compatible
"use client"

import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function CasesMap({ cases }) {
  return <div>
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      mapLib={import('mapbox-gl')}
      attributionControl={false}
      initialViewState={{
        longitude: 11,
        latitude: 52,
        zoom: 6
      }}
      style={{width: "100%", height: "70vh"}}
      mapStyle="mapbox://styles/jo5cha/clv2eb5jl00c301qr7qdua42f"
    >
      {cases.map((c) => (
        <Marker
          key={c.id}
          longitude={c.address?.coordinates?.coordinates?.lng || 0}
          latitude={c.address?.coordinates?.coordinates?.lat || 0}
          anchor="bottom"
          color="black"
        >
        </Marker>
      ))}
    </Map>
  </div>
}
