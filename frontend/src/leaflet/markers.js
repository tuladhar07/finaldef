import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import osm from "./osm-providers";
import { useRef } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
// import "leaflet/dist/leaftlet.css";
import "./map.css";

const markerIcon = new L.icon({
  iconUrl: require("../components/location.png"),
  iconSize: [35, 45],
  iconAnchor: [17, 45],
  popupAnchor: [0, -46],
});
const MarkersMap = (props) => {
  const { positionInfos } = props;
  //get the location from geolocation

  const [latLng, setLatLng] = useState({
    lat: 0.0,
    lng: 0.0,
    isLoaded: false,
  });

  // useEffect(() => {
  //   Geocode.fromAddress("Eiffel Tower").then(
  //     (response) => {
  //       const { lat, lng } = response.results[0].geometry.location;
  //       console.log(lat, lng);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }, []);

  const [center, setCenter] = useState([latLng.lat, latLng.lng]);
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

              <Marker position={[27.7172, 85.324]} icon={markerIcon}>
                <Popup>
                  <b>First Marker</b>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkersMap;
