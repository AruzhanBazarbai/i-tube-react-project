import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChannelInfo, Video } from "../../organisms";
import { Img } from "../../atoms";
import { VideoProps } from "../../../common";
import { getChannelById, getVideosByChannel } from "../../../api";

export const Channel: React.FC = () => {
  const channelId = useParams().id?.toString(); // { id: string }
  const [videos, setVideos] = useState<VideoProps[]>(getVideosByChannel(channelId ?? "1"));
  const [channel, setChannel] = useState(getChannelById(channelId ?? "1"));

  useEffect(() => {
    setVideos(getVideosByChannel(channelId ?? "1"));
    setChannel(getChannelById(channelId ?? "1"));
  }, [channelId]);

  return (
    <section className="d-flex flex-column row-gap-4">
      <div className="channel-background">
        <Img
          src={channel?.backgroundSrc ?? require("../../../assets/images/icons/background.png")}
          alt="channel-background-image"
        />
      </div>
      <ChannelInfo channelInfo={channel} />
      <div className="d-flex flex-wrap row-gap-5">
        {videos.map((el, ind) => (
          <Video data={el} state="channel" className="col-3 pe-3" key={el.thumbnailSrc + ind} />
        ))}
      </div>
    </section>
  );
};
