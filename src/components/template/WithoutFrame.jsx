import React from "react";
import { Outlet } from "react-router-dom";

const WithoutFrame = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default WithoutFrame;
