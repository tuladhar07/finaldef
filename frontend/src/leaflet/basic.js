import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import osm from "./osm-providers";
import { useRef } from "react";
// import "leaflet/dist/leaftlet.css";
import "./map.css";


const BasicMap = () => {
  const [center, setCenter] = useState({ lat: 27.7172, lng: 85.324 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2>React-leaflet</h2>
          <div className="col">
            <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
              <TileLayer
                url={osm.maptiler.url}
                attribution={osm.maptiler.attribution}
              />
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicMap;
