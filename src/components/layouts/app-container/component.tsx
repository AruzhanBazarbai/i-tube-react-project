import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { Header } from "../header";
import { RootState } from "../../../store";
import { SideBar } from "../sidebar";
import { OfflinePage } from "../../pages";

export const AppContainer: React.FC = () => {
  const sidebar = useSelector((state: RootState) => state.sidebar.state);
  const location = useLocation().pathname;
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  React.useEffect(() => {
    setTimeout(() => {
      document.body.className = "";
    }, 500);

    console.log(isOffline);

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => {
      console.log("OFLINE");
      setIsOffline(true);
      console.log(isOffline);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      {isOffline ? (
        <OfflinePage />
      ) : (
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
      )}
    </div>
  );
};
