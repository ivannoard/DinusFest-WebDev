import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../global";

const WithFrame = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default WithFrame;
