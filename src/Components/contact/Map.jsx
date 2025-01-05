import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "./Map.module.css";
import citiesData from "./cities.json";


function Map({ selectedCity }) {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCities(citiesData.cities);
  }, []);

  useEffect(() => {
    if (selectedCity) {
      setMapPosition([selectedCity.position.lat, selectedCity.position.lng]);
    }
  }, [selectedCity]);

  const customIcon = (emoji) =>
    L.divIcon({
      html: `<div style="background-color: transparent; color: black; font-size: 24px;">⭐️ ${emoji}</div>`,
      className: 'custom-icon'
    });

  return (
  
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={10}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
            icon={customIcon(city.emoji)}
          >
            <Popup>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
      </MapContainer>
      <div className={styles.backgroundBelowMap}></div>
      </div>
      
    
  );
}

function ChangeCenter({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 10);
    }
  }, [position, map]);

  return null;
}

export default Map;
