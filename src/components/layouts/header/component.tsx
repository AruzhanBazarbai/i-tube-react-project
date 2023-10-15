import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import classes from "./Header.module.scss";
import { Button, Img, Input, NavLink } from "../../atoms";
import { setSidebarState } from "../../../store/slices/sidebar";

export const Header: React.FC = () => {
  const sidebar = useSelector((state: RootState) => state.sidebar.state);
  const dispatch = useDispatch<AppDispatch>();

  const location = useLocation().pathname;
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (location === "/login" || location === "/sign-up") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [location]);
  return (
    <header
      className={classNames([show ? "" : "d-none", "d-flex align-items-center", classes.container])}
    >
      <div className="d-flex align-items-center flex-shrink-0">
        <Button
          onClick={() => dispatch(setSidebarState(sidebar))}
          backgroundColor="transparent"
          hoverBackgroundColor="transparent"
          className="mx-3 icon"
        >
          <Img
            src={require("../../../assets/images/icons/hamburger.png")}
            alt="icon"
            width="18px"
            height="15px"
          />
        </Button>
        <NavLink
          href="/"
          fontWeight={700}
          fontSize="20px"
          lineHeight="24px"
          className="d-inline-block"
        >
          ITube
        </NavLink>
      </div>
      <div className={classes.search}>
        <Input placeholder="Search" className={classNames(["px-5 py-2 w-100"])} />
      </div>
      <div className="d-flex align-items-center flex-shrink-0">
        <Button
          backgroundColor="transparent"
          hoverBackgroundColor="transparent"
          className="px-2 me-2"
        >
          <Img
            src={require("../../../assets/images/icons/add-video.png")}
            alt="icon"
            width="20px"
            height="14px"
          />
        </Button>
        <Button
          backgroundColor="transparent"
          hoverBackgroundColor="transparent"
          className="px-2 me-2"
        >
          <Img
            src={require("../../../assets/images/icons/notification.png")}
            alt="icon"
            width="16px"
            height="20px"
          />
        </Button>
        <Button backgroundColor="transparent" hoverBackgroundColor="transparent" className="ms-2">
          <Img
            src={require("../../../assets/images/icons/profile.png")}
            alt="icon"
            width="32px"
            height="32px"
          />
        </Button>
      </div>
    </header>
  );
};
