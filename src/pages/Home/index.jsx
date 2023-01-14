import React, { useState } from "react";
import { ChatBot, Menu, Navbar } from "../../components/global";
// query
// import { useQuery } from "@apollo/client";
// import { GET_ALL_USER } from "../../graphql/user";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const Home = () => {
  const [stateChat, setStateChat] = useState(false);
  const [stateProfile, setStateProfile] = useState(false);
  // uji coba query // success
  // const { data } = useQuery(GET_ALL_USER);
  // console.log(data);

  return (
    <>
      <main className=" min-h-screen w-full">
        <MapContainer
          center={[-6.966667, 110.416664]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <Navbar
            state={stateChat}
            setState={setStateChat}
            setStateProfile={setStateProfile}
          />
          {stateChat && <ChatBot setState={setStateChat} />}
          {stateProfile && <Menu setStateProfile={setStateProfile} />}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-6.966667, 110.416664]}>
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
