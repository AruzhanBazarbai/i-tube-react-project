/* eslint-disable indent */
import React, { useMemo } from "react";
import classNames from "classnames";
import { Anchor, Img, P } from "../../atoms";
import { Props } from "./props";
import classes from "./Video.module.scss";
import { Colors } from "../../../common";

export const Video: React.FC<Props> = ({ state, data, className }) => {
  const stateSearchCond = useMemo(() => state === "search", [state]);
  const stateChannelCond = useMemo(() => state === "channel", [state]);

  return (
    <div
      className={classNames([
        className,
        state === "basic" || stateChannelCond
          ? "d-flex flex-column row-gap-3"
          : stateSearchCond
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
          stateSearchCond ? "flex-column-reverse justify-content-end row-gap-3" : "",
        ])}
      >
        <div className={classNames([stateSearchCond && "d-flex"])}>
          {(state === "basic" || stateSearchCond) && (
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
          {stateSearchCond && (
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
              fontSize={stateSearchCond ? "20px" : "14px"}
              lineHeight={stateSearchCond ? "24px" : "17px"}
              fontWeight={700}
              className="text-wrap mb-2"
            >
              {data?.title}
            </P>
          </Anchor>
          {!stateSearchCond && !stateChannelCond && (
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
};
