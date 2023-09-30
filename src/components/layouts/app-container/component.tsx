import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";

export const AppContainer: React.FC = () => (
  <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
    <Header />
    <main className="d-flex flex-column flex-grow-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);
