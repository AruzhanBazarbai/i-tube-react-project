import React from "react";
import { useParams } from "react-router-dom";
import { VideoInfo, Comments, Video } from "../../organisms";
import { videoDetail, videos } from "./mock";

export const VideoDetail: React.FC = () => {
  const videoId = useParams();
  console.log(videoId);
  return (
    <section className="d-flex">
      <div className="d-flex col-8 flex-column row-gap-4 pe-4">
        <VideoInfo videoData={videoDetail} className="w-100" />
        <Comments commentsData={videoDetail.comments} />
      </div>
      <div className="flex-grow d-flex flex-column row-gap-2">
        {videos.map((el, ind) => (
          <Video data={el} state="similar" className="w-100" key={el.thumbnailSrc + ind} />
        ))}
      </div>
    </section>
  );
};
