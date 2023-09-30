import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/globals.scss";
import { AppContainer } from "./components/layouts";
import { Home, Contacts } from "./pages";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppContainer />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
