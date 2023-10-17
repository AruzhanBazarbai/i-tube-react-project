import React from "react";
import { useParams } from "react-router-dom";
import { videos, channelData, channelInfo } from "./mock";
import { ChannelInfo, Video } from "../../organisms";
import { Img } from "../../atoms";

export const Channel: React.FC = () => {
  const channelId = useParams(); // { id: string }
  console.log(channelId);

  return (
    <section className="d-flex flex-column row-gap-4">
      <div className="channel-background">
        <Img src={channelData.profileSrc} alt={channelData.alt} />
      </div>
      <ChannelInfo channelInfo={channelInfo} />
      <div className="d-flex flex-wrap row-gap-5">
        {videos.map((el, ind) => (
          <Video data={el} state="basic" className="col-3 pe-3" key={el.thumbnailSrc + ind} />
        ))}
      </div>
    </section>
  );
};
