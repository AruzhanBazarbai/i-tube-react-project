import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChannelInfo, Video } from "../../organisms";
import { Img } from "../../atoms";
import { ChannelProps, VideoProps } from "../../../common";

export const Channel: React.FC = () => {
  const channelId = useParams().id?.toString(); // { id: string }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [allVideos, setAllVideos] = useState<VideoProps[]>([]);
  const [videos, setVideos] = useState<VideoProps[]>([]);
  const [channel, setChannel] = useState<ChannelProps>();

  useEffect(() => {
    (async () => {
      await fetch("http://localhost:3000/videos")
        .then((r) => r.json())
        .then((res) => {
          setAllVideos(res);
          setVideos(res.filter((el: any) => el.channelId === channelId));
        });
      
      await fetch(`http://localhost:3000/channels/${channelId ?? "1"}`)
        .then((r) => r.json())
        .then((res) => setChannel(res));
    })();
  }, [channelId]);

  return (
    channel ? (
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
    ) : (<>empty</>)
  );
};
