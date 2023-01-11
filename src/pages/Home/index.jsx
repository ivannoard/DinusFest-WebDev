import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
const Home = () => {
  const position = [51.505, -0.09];
  return (
    <>
      <main className="min-h-screen w-full">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </main>
    </>
  );
};

export default Home;
