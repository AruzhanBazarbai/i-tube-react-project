/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import classes from "./Header.module.scss";
import { Button, Img, NavLink, P } from "../../atoms";
import { setSidebarState } from "../../../store/slices/sidebar";
import { setSearchState } from "../../../store/slices/header";
import { Colors, FontSize, LineHeight } from "../../../common";

export const Header: React.FC = () => {
  const sidebar = useSelector((state: RootState) => state.sidebar.state);
  const searchValue = useSelector((state: RootState) => state.header.search);
  const dispatch = useDispatch<AppDispatch>();

  const [search, setSearch] = useState(searchValue);

  const navigate = useNavigate();

  const location = useLocation().pathname;
  const [show, setShow] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    profileSrc: require("../../../assets/images/icons/profile.png"),
    subscriptions: [],
  });
  useEffect(() => {
    //useLayoutEffect
    if (location === "/login" || location === "/sign-up") {
      setShow(false);
    } else {
      setShow(true);
      const data = localStorage.getItem("currentUser");
      if (!data) {
        navigate("/login");
      }
      console.log(
        data
          ? JSON.parse(data)
          : {
              id: "",
              name: "",
              email: "",
              password: "",
              profileSrc: require("../../../assets/images/icons/profile.png"),
              subscriptions: [],
            },
      );
      setCurrentUser(
        data
          ? JSON.parse(data)
          : {
              id: "",
              name: "",
              email: "",
              password: "",
              profileSrc: require("../../../assets/images/icons/profile.png"),
              subscriptions: [],
            },
      );
    }
  }, [location, navigate]);

  useEffect(() => {
    const handleSearch = setTimeout(() => {
      if (search !== "") {
        // if (search !== "" && search !== searchValue) {
        dispatch(setSearchState(search));
        navigate("/search");
      }
      // dispatch(setSearchState(search));
      // navigate("/search")
      // console.log(search);
    }, 900);

    return () => clearTimeout(handleSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, search]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
    setCurrentUser({
      id: "",
      name: "",
      email: "",
      password: "",
      profileSrc: "",
      subscriptions: [],
    });
  };

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
        <form>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className={classNames(["px-5 py-2 w-100", classes.searchInput])}
          />
        </form>
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
        <Button
          onClick={handleLogout}
          backgroundColor="transparent"
          hoverBackgroundColor={Colors.background.grey2}
          borderRadius="15px"
          className="ms-2 d-flex align-items-center column-gap-2"
        >
          <Img src={currentUser?.profileSrc} alt="icon" width="32px" height="32px" />
          <P fontSize={FontSize.Primary} lineHeight={LineHeight.Primary}>
            Logout
          </P>
        </Button>
      </div>
    </header>
  );
};
