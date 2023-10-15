import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/globals.scss";
import { AppContainer } from "./components/layouts";
import { Home, SignUp, Login } from "./pages";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppContainer />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
