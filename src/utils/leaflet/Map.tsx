'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { type LatLngTuple, type Marker as MarkerType, divIcon } from 'leaflet';
import { RefAttributes, useEffect, useRef, useState } from 'react';
import useCoordinates from './useCoordinates';

type MapProps = {
  address: string;
  facilityName?: string;
};

const myCustomColour = 'hsl(var(--special))';

const markerHtmlStyles = `
  background-color: ${myCustomColour};
  width: 2rem;
  height: 2rem;
  display: block;
  left: -1rem;
  top: -1rem;
  position: relative;
  border-radius: 2rem 2rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`;

const icon = divIcon({
  className: 'my-custom-pin',
  iconAnchor: [0, 24],
  // labelAnchor: [-6, 0],
  popupAnchor: [0, -36],
  html: `<span style="${markerHtmlStyles}" />`,
});

const Map = ({ address, facilityName }: MapProps) => {
  const [position, setPosition] = useState<LatLngTuple>([0, 0]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const markerRef = useRef<MarkerType>(null);

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const coordinates = await useCoordinates(address);
        if (!coordinates) throw new Error('Failed to fetch data');
        setPosition(coordinates);
        if (markerRef?.current) markerRef.current.openPopup();
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosition();
  }, []);

  return (
    <div className="w-full h-[400px] sticky my-10 ">
      {loading && <div>Loading...</div>}
      {!loading && position && (
        <MapContainer center={position} zoom={13} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            ref={markerRef}
            position={position}
            draggable={false}
            icon={icon}
          >
            <Popup>
              📍 {`${facilityName}, `}
              {address}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
