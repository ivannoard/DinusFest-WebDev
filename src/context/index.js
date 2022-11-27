import React from "react";
import AuthProvider from "./authContext";

const Context = ({ children }) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};

export default Context;
