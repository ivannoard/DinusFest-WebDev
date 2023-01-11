import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Chat, Navbar } from "../../components/global";
import { FiChevronLeft } from "react-icons/fi";
const Home = () => {
  const position = [51.505, -0.09];
  const [stateChat, setStateChat] = useState(false);
  return (
    <>
      <main className=" min-h-screen w-full">
        <div className="grid grid-cols-12 fixed w-full left-0 right-0 mx-auto">
          <div className={!stateChat ? "col-span-12" : "col-span-8"}>
            <Navbar state={stateChat} setState={setStateChat} />
          </div>
          <div
            className={
              !stateChat ? "col-span-0 hidden" : "col-span-4 bg-white h-screen"
            }
          >
            <div className="chat">
              <div className="chat-title relative">
                <FiChevronLeft
                  className="absolute left-2 top-[10px] cursor-pointer"
                  size={20}
                  onClick={() => setStateChat(false)}
                />
                <h6 className="font-semibold text-center py-2 border-b border-slate-200">
                  Chatbot
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-500 w-full min-h-screen">asd</div>
        {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
      </main>
    </>
  );
};

export default Home;
