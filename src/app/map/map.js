// this is necessary since leaflet is not server-side compatible
"use client"

import Map, { Marker, Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function CasesMap({ cases }) {
  const geojson = {
    type: 'FeatureCollection',
    features: cases.map((c) => ({
      type: 'Feature',
      properties: { ...c },
      geometry: {
        type: 'Point',
        coordinates: [
          c.address?.coordinates?.coordinates?.lng || 0,
          c.address?.coordinates?.coordinates?.lat || 0,
        ],
      },
    })),
  };

  return <div>
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      mapLib={import('mapbox-gl')}
      attributionControl={false}
      maxZoom={12}
      initialViewState={{
        longitude: 11,
        latitude: 52,
        zoom: 6
      }}
      style={{width: "100%", height: "70vh"}}
      mapStyle="mapbox://styles/jo5cha/clvqd5pkk01pg01qpa4t518pn"
    >
       <Source
          id="cases"
          type="geojson"
          data={geojson}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={100}
        >
          <Layer
            id="clusters"
            type="circle"
            source="cases"
            filter={['has', 'point_count']}
            paint={{
              'circle-color': [
                'step',
                ['get', 'point_count'],
                'darkgrey', 5,
                'grey', 10,
                'black',
              ],
              'circle-radius': [
                'step',
                ['get', 'point_count'],
                20, 5,
                30, 10,
                40,
              ],
            }}
          />
          <Layer
            id="cluster-count"
            type="symbol"
            source="cases"
            filter={['has', 'point_count']}
            layout={{
              'text-field': '{point_count_abbreviated}',
              'text-size': 14,
            }}
            paint={{
              'text-color': 'white'
            }}
          />
          <Layer
            id="unclustered-point"
            type="circle"
            source="cases"
            filter={['!', ['has', 'point_count']]}
            paint={{
              'circle-color': 'darkgrey',
              'circle-radius': 10,
              'circle-stroke-width': 0
            }}
          />
        </Source>
    </Map>
  </div>
}
