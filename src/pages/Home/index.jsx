import React, { useState } from "react";
import { Navbar, ChatBot, Menu } from "../../components/global";
// query
import { useQuery } from "@apollo/client";
import { GET_ALL_USER } from '../../graphql/user'
const Home = () => {
  const [stateChat, setStateChat] = useState(false);
  const [stateProfile, setStateProfile] = useState(false);
  // uji coba query // success
  const { data, loading, error } = useQuery(GET_ALL_USER);
  console.log(data)

  return (
    <>
      <main className=" min-h-screen w-full">
        <Navbar
          state={stateChat}
          setState={setStateChat}
          setStateProfile={setStateProfile}
        />
        {stateChat && <ChatBot setState={setStateChat} />}
        {stateProfile && <Menu setStateProfile={setStateProfile} />}
        <div className="bg-red-400 w-full min-h-screen">
          <h1>Ini Map</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
