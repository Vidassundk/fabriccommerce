const location = {
  address: "Alytaus apskr., Alytaus m. sav., Alytaus m., Naujoji g., 2C",
  lat: 54.396415,
  lng: 24.035788,
};

import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

import { MapPinIcon } from "@heroicons/react/24/solid";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 54.694023,
  lng: 25.276537,
};

const alytus = {
  lat: 54.391584,
  lng: 24.021972,
};

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

const omneoApiUrl = "https://www.omniva.lt/locations.json";

const PostMachineMap = () => {
  const [showMarkers, setShowMarkers] = useState();

  let displayData;
  const pullJson = () => {
    fetch(omneoApiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        displayData = responseData.map(
          (location: { lat: number; lng: number }) => {
            const coordinates = {
              lat: Number(location.Y_COORDINATE),
              lng: Number(location.X_COORDINATE),
            };
            return (
              <MarkerF
                onClick={() => alert(location.Y_COORDINATE)}
                position={coordinates}
                title="mark"
              />
            );
          }
        );
        setShowMarkers(displayData);
      });
  };

  useEffect(() => {
    pullJson();
  }, []);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <div className="mr-20 ml-20 h-[800px] overflow-hidden rounded-[20px] bg-black shadow-md">
        <GoogleMap
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            mapId: "3c5c3969923673c5",
          }}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
        >
          {showMarkers}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default React.memo(PostMachineMap);

// const location = {
//   address: "Alytaus apskr., Alytaus m. sav., Alytaus m., Naujoji g., 2C",
//   lat: 54.396415,
//   lng: 24.035788,
// };
