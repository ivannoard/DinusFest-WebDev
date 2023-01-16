import React, { useState, useEffect } from "react";
import { ChatBot, Menu, Navbar } from "../../components/global";
// import axios from "axios";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
// import { dummyLocation } from "../../utils/dummy_location";

// query
import { useSubscription } from "@apollo/client";
import { SUBS_ALL_LOCATION } from "../../graphql/location";
import { GET_USER_BY_ID } from "../../graphql/user";
import { SponsorLogo } from "../../assets/images";
import { dummyLocation } from "../../utils/dummy_location";

const Home = () => {
  const [idLocation, setIdLocation] = useState();
  const [stateChat, setStateChat] = useState(false);
  const [menuState, setMenuState] = useState("a");
  const [user, setUser] = useState();
  const [koordinat, setKoordinat] = useState([-6.966667, 110.416664]);
  const [stateProfile, setStateProfile] = useState(false);
  const [getPosition, setGetPosition] = useState();
  const [getSearchData,setGetSearchData]=useState()
  const { data, loading: isLoading } = useSubscription(SUBS_ALL_LOCATION);
  const { data: dataUser } = useSubscription(GET_USER_BY_ID, {
    variables: {
      user_id: user?.user_id,
    },
  });
  const handleClickLocation = (location_id) => {
    setStateProfile(true);
    setIdLocation(location_id);
    setMenuState("a");
  };
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUser(user);
    }
  }, []);
  const getFromDummy = dummyLocation.wisata.filter(item=>item.name.toLowerCase()===getSearchData?.location)
  // console.log(getFromDummy[0].position[0])

  return (
    <>
      <main className=" min-h-screen w-full">
        <MapContainer
          center={[koordinat[0], koordinat[1]]}
          zoom={14}
          scrollWheelZoom={false}
        >
          <img src={SponsorLogo} alt="" className="z-[405] absolute bottom-0 left-0 w-[300px]"/>
          <Navbar
            state={stateChat}
            dataUser={dataUser}
            setState={setStateChat}
            setStateProfile={setStateProfile}
            setIdLocation={setIdLocation}
            setMenuState={setMenuState}
            setGetPosition={setGetPosition}
            setGetSearchData={setGetSearchData}
          />
          {stateChat && <ChatBot setState={setStateChat} />}
          {stateProfile && (
            <Menu
              setKoordinat={setKoordinat}
              menuState={menuState}
              setMenuState={setMenuState}
              setStateProfile={setStateProfile}
              locationId={idLocation}
            />
          )}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {isLoading ? (
            ""
          ) : (
            <div>
              {getPosition && (
                <Marker
                  key={"user_location"}
                  position={[getPosition[0], getPosition[1]]}
                >
                  <Tooltip
                    direction="right"
                    offset={[0, 20]}
                    opacity={1}
                    permanent
                  >
                    Anda berada di sini
                  </Tooltip>
                </Marker>
              )}
              {
                getFromDummy ? (
                  <Marker key={"user_search_location"}
                  position={getFromDummy[0]?.position?[getFromDummy[0]?.position[0], getFromDummy[0]?.position[1]]:[0,0]}>
                    <Tooltip direction="right"
                    offset={[0, 20]}
                    opacity={1}
                    permanent >
                      {getFromDummy[0]?.name} telah ditemukan!
                    </Tooltip>
                  </Marker>
                ) : ''
              }
              {data?.memolive_location.map((item, index) => (
                <Marker key={index} position={[item.latitude, item.longitude]}>
                  <Popup>
                    <div className="flex flex-col">
                      <div className="flex">
                        {/* <div className="align-self h-[30px] w-[30px] bg-slate-500 rounded mt-2 mr-3"></div> */}
                        <div>
                          <p className="font-semibold text-lg">
                            {item.nama_lokasi}
                          </p>
                          <p>Semarang</p>
                          <p
                            onClick={() =>
                              handleClickLocation(item.location_id)
                            }
                            className="underline cursor-pointer"
                          >
                            {item.post_by_location.length} orang telah
                            mengunjungi
                          </p>
                        </div>
                      </div>
                    </div>
                    
                  </Popup>
                </Marker>
              ))}
            </div>
          )}
        </MapContainer>
      </main>
    </>
  );
};
export default Home;
