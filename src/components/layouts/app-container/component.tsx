import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { Header } from "../header";
import { RootState } from "../../../store";
import { SideBar } from "../sidebar";

export const AppContainer: React.FC = () => {
  const sidebar = useSelector((state: RootState) => state.sidebar.state);
  const location = useLocation().pathname;
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <main className="d-flex flex-grow-1">
        <SideBar />
        <div
          className={classNames([
            "main-container",
            sidebar,
            location === "/login" || location === "/sign-up" ? "auth" : "",
          ])}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
};
