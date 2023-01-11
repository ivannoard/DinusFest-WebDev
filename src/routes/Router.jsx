import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WithFrame, WithoutFrame } from "../components/template";
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
        <Route element={<WithFrame />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
