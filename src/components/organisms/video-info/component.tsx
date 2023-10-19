import React from "react";
import classNames from "classnames";
import { Props } from "./props";
import { Anchor, Button, Img, P, Span } from "../../atoms";
import { FontSize, LineHeight } from "../../../common";

export const VideoInfo: React.FC<Props> = ({ videoData, className }) => (
  <div className={classNames([className, "d-flex flex-column row-gap-3"])}>
    <iframe
      height={404}
      src={videoData.videoLink}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-100 rounded-4"
    />
    <P fontSize="18px" lineHeight="21px" fontWeight={600}>
      {videoData.title}
    </P>
    <div className="d-flex justify-content-between">
      <div className="pe-4 d-flex column-gap-3 align-items-center">
        <Anchor href={videoData.channelLink}>
          <Img src={videoData.channelProfileSrc} width="48px" height="48px" alt="channel profile" />
        </Anchor>
        <div>
          <P
            fontSize={FontSize.Primary}
            lineHeight={LineHeight.Primary}
            fontWeight={600}
            className="mb-1"
          >
            {videoData.channelName}
          </P>
          <P fontSize={FontSize.Secondary} lineHeight={LineHeight.Secondary}>
            {videoData.channelSubsCnt} subscribers
          </P>
        </div>
        <Button
          fontSize={FontSize.Primary}
          lineHeight={LineHeight.Primary}
          fontWeight={700}
          size="s2"
          borderRadius="30px"
        >
          Subscribe
        </Button>
      </div>
      <div className="d-flex column-gap-2">
        <div className="d-flex p-2 align-items-center gray-background">
          <Anchor className="d-flex border-end border-black pe-3 align-items-center">
            <Img
              src={require("../../../assets/images/icons/like.png")}
              width="24px"
              height="23px"
              alt="like"
              className="pe-1"
            />
            {videoData.likeCount !== "0" && (
              <P fontSize={FontSize.Primary} lineHeight={LineHeight.Primary} fontWeight={700}>
                {videoData.likeCount}
              </P>
            )}
          </Anchor>
          <Anchor className="d-flex border-e-1 ps-3 align-items-center">
            {videoData.dislikeCount !== "0" && (
              <P fontSize={FontSize.Primary} lineHeight={LineHeight.Primary} fontWeight={700}>
                {videoData.dislikeCount}
              </P>
            )}
            <Img
              src={require("../../../assets/images/icons/dislike.png")}
              width="24px"
              height="23px"
              alt="like"
              className="ps-1"
            />
          </Anchor>
        </div>
        <Anchor className="d-flex p-2 align-items-center gray-background">
          <Img
            src={require("../../../assets/images/icons/share.png")}
            width="24px"
            height="20px"
            alt="share"
            className="pe-1"
          />
          <P
            fontSize={FontSize.Primary}
            lineHeight={LineHeight.Primary}
            fontWeight={700}
            className="pe-3"
          >
            Share
          </P>
        </Anchor>
        <Anchor className="d-flex p-2 align-items-center gray-background">
          <Img
            src={require("../../../assets/images/icons/save.png")}
            width="24px"
            height="24px"
            alt="save"
            className="pe-2"
          />
          <P
            fontSize={FontSize.Primary}
            lineHeight={LineHeight.Primary}
            fontWeight={700}
            className="pe-3"
          >
            Save
          </P>
        </Anchor>
        <Anchor className="d-flex px-3 align-items-center gray-background" fontWeight={700}>
          ...
        </Anchor>
      </div>
    </div>
    <div className="gray-background p-2 d-flex flex-column row-gap-2 rounded-3">
      <P>
        <Span
          fontSize={FontSize.Secondary}
          lineHeight={LineHeight.Secondary}
          fontWeight={600}
          className="pe-2"
        >
          {videoData.viewsCount} views
        </Span>
        <Span fontSize={FontSize.Secondary} lineHeight={LineHeight.Secondary} fontWeight={600}>
          {videoData.createdAt} ago
        </Span>
      </P>
      <P fontSize={FontSize.Secondary} lineHeight={LineHeight.Secondary}>
        {videoData.description}
      </P>
      <Anchor fontSize={FontSize.Secondary} lineHeight={LineHeight.Secondary} fontWeight={600}>
        ...more
      </Anchor>
    </div>
  </div>
);
