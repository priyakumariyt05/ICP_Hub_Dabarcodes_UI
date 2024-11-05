import React from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import {FiMapPin, FiClock, FiExternalLink} from "react-icons/fi";
import {TbDirections} from "react-icons/tb";

const StoreMap = ({store}) => {
  const {name, address, openStatus, openTime, coords} = store;

  
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [38, 38],
  });

  return (
    <div className="flex flex-col md:flex-row md:justify-between p-6 font-roboto">
      {/* Store details */}
      <div className="md:w-1/3 mb-6 md:mb-0">
        <h1 className="text-2xl font-bold mb-2">{name}</h1>

        {/* Location and address */}
        <p className="text-gray-600 flex items-center mb-2">
          <FiMapPin className="mr-2" /> {address}
        </p>

        {/* Open status and time */}
        <p className="text-green-600 flex items-center mb-2">
          <FiClock className="mr-2" /> {openStatus} - {openTime}
        </p>

        {/* Get directions with directions and link icons */}
        <a href="#" className="text-blue-600 flex items-center mt-2">
          <TbDirections className="mr-2 " /> Get Directions
          <FiExternalLink className="ml-2" />
        </a>
      </div>

      {/* Larger Map */}
      <div className="md:w-2/3 h-74 md:h-[500px]">
      
        {/* Increased height */}
        <MapContainer center={coords} zoom={13} className="w-full h-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={coords} icon={customIcon}>
            <Popup>{name}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default StoreMap;