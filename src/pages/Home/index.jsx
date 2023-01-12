import React, { useState } from "react";
import { Navbar } from "../../components/global";

const Home = () => {
  const [stateChat, setStateChat] = useState(false);
  return (
    <>
      <main className=" min-h-screen w-full">
        <Navbar state={stateChat} setState={setStateChat} />
        <div className="bg-red-400 w-full min-h-screen">
          <h1>Ini Map</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
