import { LatLngTuple } from 'leaflet';

const fetchCoordinates = async (address: string) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`,
  );

  const data = await response.json();
  if (data.length > 0) {
    const position = [
      Number(parseFloat(data[0].lat).toFixed(3)),
      Number(parseFloat(data[0].lon).toFixed(3)),
    ] as LatLngTuple;
    return position;
  }
};

const useCoordinates = async (address: string): Promise<LatLngTuple> => {
  const position = await fetchCoordinates(address);

  return position ?? [0, 0];
};

export default useCoordinates;
