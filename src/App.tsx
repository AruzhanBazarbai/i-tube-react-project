import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/globals.scss";
import { Home } from "./pages/home";

export const App = () => (
  <Routes>
    <Route index path="/" Component={Home} />
  </Routes>
);
