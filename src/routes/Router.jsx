import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WithoutFrame } from "../components/template";
import { Home } from "../pages";
import { Login, Register } from "../pages/Auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithoutFrame />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
