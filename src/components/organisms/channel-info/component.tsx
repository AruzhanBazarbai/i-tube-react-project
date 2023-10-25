import React from "react";
import classNames from "classnames";
import { Button, Img, P, Span } from "../../atoms";
import { Props } from "./props";
import { Colors } from "../../../common";

export const ChannelInfo: React.FC<Props> = ({ channelInfo, className }) => (
  <div className={classNames(["d-flex column-gap-4 px-4", className])}>
    <div
      style={{
        minWidth: "100px",
        minHeight: "100px",
        border: "none",
        borderRadius: "50px",
        overflow: "hidden",
      }}
    >
      <Img src={channelInfo.profileSrc} alt="channel-profile" width="100px" height="100px" />
    </div>
    <div className="d-flex flex-column row-gap-2">
      <P fontSize="24px" lineHeight="29px" fontWeight={600}>
        {channelInfo.name}
      </P>
      <P>
        <Span className="pe-2" fontSize="12px" lineHeight="14px" color={Colors.text.grey}>
          {channelInfo.subscribersCount}
        </Span>
        <Span fontSize="12px" lineHeight="14px" color={Colors.text.grey}>
          {channelInfo.videosCount}
        </Span>
      </P>
      <P fontSize="12px" lineHeight="14px" color={Colors.text.grey}>
        {channelInfo.description}
      </P>
    </div>
    <div className="d-flex justify-content-center align-items-center ps-2 pe-4">
      <Button
        fontSize="14px"
        lineHeight="18px"
        fontWeight={700}
        size="s2"
        borderRadius="30px"
        backgroundColor={!channelInfo.subscribed ? Colors.background.black : Colors.background.grey}
      >
        {channelInfo.subscribed ? "Subscribed" : "Subscribe"}
      </Button>
    </div>
  </div>
);
