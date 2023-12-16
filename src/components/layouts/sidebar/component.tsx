/* eslint-disable import/no-dynamic-require */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { AppDispatch, RootState } from "../../../store";
import { Anchor, Button, Img, Li, P, Ul } from "../../atoms";
import { ChannelProps, Colors } from "../../../common";
import { setSidebarState } from "../../../store/slices/sidebar";
// import { getChannelById } from "../../../api";

// const sendRequestForChannel = async (
//   channels: ChannelProps[],
//   setChannels: React.Dispatch<React.SetStateAction<ChannelProps[]>>,
//   channelId: string,
// ) => {
//   await fetch(`http://localhost:3000/channels/${channelId ?? "1"}`)
//     .then((r) => r.json())
//     .then((res) => setChannels([...channels, res]));
// };

export const SideBar: React.FC = () => {
  const sidebar = useSelector((state: RootState) => state.sidebar.state);
  const [showMore, setShowMore] = useState(false);

  const [channels, setChannels] = useState<ChannelProps[]>([]);

  const handleShowMore = () => {
    console.log(showMore);
    setShowMore(!showMore);
  };

  const location = useLocation().pathname;
  const [show, setShow] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const [allChannels, setAllChannels] = useState<ChannelProps[]>([]);
  const [currentUser, setCurrentUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    profileSrc: require("../../../assets/images/icons/profile.png"),
    subscriptions: [
      {
        channelId: "",
      },
    ],
  });

  // useEffect(() => {
  //   await fetch(`http://localhost:3000/channels`)
  //     .then((r) => r.json())
  //     .then((res) => setChannel(res));
  // }, [])

  useEffect(() => {
    if (location === "/login" || location === "/sign-up") {
      setShow(false);
      dispatch(setSidebarState("open"));
    } else {
      setShow(true);
    }
  }, [location, show, dispatch, navigate]);

  useEffect(() => {
    if (allChannels.length > 0) {
      const data = localStorage.getItem("currentUser");
      if (data) {
        console.log(data);
        const tempData = JSON.parse(data);
        console.log(tempData);
        console.log(allChannels);
        setChannels(
          tempData?.subscriptions.map((x: any) => allChannels.find((el) => el.id === x.channelId)),
        );
      }
    }
  }, [allChannels]);

  useEffect(() => {
    const data = localStorage.getItem("currentUser");
    console.log(data);
    if (!data) {
      if (location !== "/login" && location !== "/sign-up") {
        // 👍
        navigate("/login");
        // window.location.href = "http://localhost:3000/login";
      }
    } else {
      (async () => {
        await fetch("http://localhost:3000/channels")
          .then((r) => r.json())
          .then((res) => {
            setAllChannels(res);
            console.log(res);
          });
      })();
      const user = JSON.parse(data);
      setCurrentUser(user);
    }
  }, [navigate]);

  return (
    <nav
      className={classNames([
        sidebar === "open" && show ? "d-not-none" : "d-none",
        "sidebar col-2 d-flex flex-column p-3",
      ])}
    >
      <div className="border-bottom">
        <Button
          hoverBackgroundColor={Colors.background.grey2}
          backgroundColor="transparent"
          borderRadius="8px"
          className="d-flex column-gap-3 align-items-center p-2 w-100"
        >
          <Img src={currentUser.profileSrc} width="44px" height="44px" alt="profile" />
          <P fontSize="14px" lineHeight="20px">
            {currentUser.name}
          </P>
        </Button>
        <div className="py-3">
          <Anchor href="/">
            <Button
              hoverBackgroundColor={Colors.background.grey2}
              backgroundColor="transparent"
              borderRadius="8px"
              className="d-flex column-gap-3 align-items-center w-100 mb-1"
            >
              <Img
                src={require("../../../assets/images/icons/home.png")}
                width="16px"
                height="18px"
                alt="icon"
                className="me-1"
              />
              <P fontSize="14px" lineHeight="20px">
                Home
              </P>
            </Button>
          </Anchor>
          <Button
            hoverBackgroundColor={Colors.background.grey2}
            backgroundColor="transparent"
            borderRadius="8px"
            className="d-flex column-gap-3 align-items-center w-100 mb-1"
          >
            <Img
              src={require("../../../assets/images/icons/subscriptions.png")}
              width="20px"
              height="18px"
              alt="icon"
            />
            <P fontSize="14px" lineHeight="20px">
              Subscriptions
            </P>
          </Button>
        </div>
      </div>
      <div className="py-3 border-bottom">
        <Button
          hoverBackgroundColor={Colors.background.grey2}
          backgroundColor="transparent"
          borderRadius="8px"
          className="d-flex column-gap-3 align-items-center w-100 mb-1"
        >
          <Img
            src={require("../../../assets/images/icons/liked-videos.png")}
            width="16px"
            height="18px"
            alt="icon"
            className="me-1"
          />
          <P fontSize="14px" lineHeight="20px">
            Liked Videos
          </P>
        </Button>
      </div>
      <div className="py-3">
        <P color="#00000066" fontSize="14px" lineHeight="20px">
          Subscriptions
        </P>
        <Ul>
          {currentUser.subscriptions.map((el, ind) => (
            <Li key={ind}>
              <Anchor href={`/channel/${el.channelId}`}>
                <Button
                  hoverBackgroundColor={Colors.background.grey2}
                  backgroundColor="transparent"
                  borderRadius="8px"
                  className="d-flex column-gap-3 align-items-center w-100 mb-1"
                >
                  <Img
                    src={channels[ind]?.profileSrc}
                    width="24px"
                    height="24px"
                    alt="icon"
                    className="rounded-5"
                  />
                  <P fontSize="14px" lineHeight="20px" className="text-start">
                    {channels[ind]?.name}
                  </P>
                </Button>
              </Anchor>
            </Li>
          ))}
          {/* <Li>
            <Button
              hoverBackgroundColor={Colors.background.grey2}
              backgroundColor="transparent"
              borderRadius="8px"
              className="d-flex column-gap-3 align-items-center w-100 mb-1"
            >
              <Img
                src={require("../../../assets/images/icons/profile.png")}
                width="24px"
                height="24px"
                alt="icon"
              />
              <P fontSize="14px" lineHeight="20px">
                Michael Dam
              </P>
            </Button>
          </Li>
          <Li>
            <Button
              hoverBackgroundColor={Colors.background.grey2}
              backgroundColor="transparent"
              borderRadius="8px"
              className="d-flex column-gap-3 align-items-center w-100 mb-1"
            >
              <Img
                src={require("../../../assets/images/icons/profile.png")}
                width="24px"
                height="24px"
                alt="icon"
              />
              <P fontSize="14px" lineHeight="20px">
                Michael Dam
              </P>
            </Button>
          </Li> */}
        </Ul>
        <Button
          hoverBackgroundColor="transparent"
          backgroundColor="transparent"
          borderRadius="8px"
          className="d-flex column-gap-3 align-items-center w-100 mb-1"
          onClick={() => handleShowMore()}
        >
          <Img
            src={require("../../../assets/images/icons/arrow-bottom.png")}
            width="13px"
            height="7px"
            alt="icon"
            className={classNames([showMore ? "img-flip" : ""])}
          />
          <P fontSize="14px" lineHeight="20px" className="link">
            Show 15 more
          </P>
        </Button>
      </div>
    </nav>
  );
};
