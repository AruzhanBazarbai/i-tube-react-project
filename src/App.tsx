import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/globals.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContainer } from "./components/layouts";
import { Home, SignUp, Login, Search, Channel, VideoDetail } from "./pages";
import { PageNotFound } from "./components";

export const App = () => {
  React.useEffect(() => {
    // Он закэшируется
    fetch("https://api.publicapis.org/entries", {
      headers: {
        "x-is-cacheable": "true",
      },
      mode: "no-cors",
    }).then((res) => console.log(res));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route index element={<Home />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<Search />} />
          <Route path="channel/:id" element={<Channel />} />
          <Route path="video/:id" element={<VideoDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};
