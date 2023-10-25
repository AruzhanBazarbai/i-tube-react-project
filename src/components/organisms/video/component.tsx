/* eslint-disable indent */
import React from "react";
import classNames from "classnames";
import { Anchor, Img, P } from "../../atoms";
import { Props } from "./props";
import classes from "./Video.module.scss";
import { Colors } from "../../../common";

export const Video: React.FC<Props> = ({ state, data, className }) => (
  <div
    className={classNames([
      className,
      state === "basic" || state === "channel"
        ? "d-flex flex-column row-gap-3"
        : state === "search"
        ? "d-flex column-gap-3"
        : "d-flex column-gap-2",
    ])}
  >
    <div className={classNames([classes.thumnailWrapper, classes[state]])}>
      <Anchor href={`/video/${data.id}`}>
        <Img src={data?.thumbnailSrc ?? ""} alt="video thumbnail" />
        {data?.duration && <div className={classes.time}>{data?.duration}</div>}
      </Anchor>
    </div>
    <div
      className={classNames([
        "d-flex",
        state === "search" ? "flex-column-reverse justify-content-end row-gap-3" : "",
      ])}
    >
      <div className={classNames([state === "search" && "d-flex"])}>
        {(state === "basic" || state === "search") && (
          <Anchor href={`/channel/${data.channelId}`}>
            <Img
              src={data?.channelProfileSrc ?? ""}
              alt="channel profile"
              width="36px"
              height="36px"
              className={classNames([state === "basic" ? "me-4" : "me-2", "rounded-5"])}
            />
          </Anchor>
        )}
        {state === "search" && (
          <Anchor href={`/channel/${data.channelId}`} className="align-self-center">
            <P fontSize="13px" lineHeight="16px" color={Colors.text.grey}>
              {data?.channelName}
            </P>
          </Anchor>
        )}
      </div>
      <div className="d-flex flex-grow flex-column">
        <Anchor href={`/video/${data.id}`}>
          <P
            fontSize={state === "search" ? "20px" : "14px"}
            lineHeight={state === "search" ? "24px" : "17px"}
            fontWeight={700}
            className="text-wrap mb-2"
          >
            {data?.title}
          </P>
        </Anchor>
        {state !== "search" && state !== "channel" && (
          <Anchor href={`/channel/${data.channelId}`}>
            <P fontSize="12px" lineHeight="15px" color={Colors.text.grey}>
              {data?.channelName}
            </P>
          </Anchor>
        )}
        <Anchor href={`/video/${data.id}`}>
          <P fontSize="12px" lineHeight="15px" color={Colors.text.grey}>
            {data?.viewsCount} &#183; {data?.createdAt}
          </P>
        </Anchor>
      </div>
    </div>
  </div>
);
