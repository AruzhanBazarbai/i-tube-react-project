import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VideoInfo, Comments, Video } from "../../organisms";
import { getAllVideos, getComments, getVideo } from "../../../api";
import { CommentProps, VideoProps } from "../../../common";

export const VideoDetail: React.FC = () => {
  const videoId = useParams().id?.toString();
  const [videoData, setVideoData] = useState<VideoProps>(getVideo(videoId ?? "1"));
  const [videosData] = useState<VideoProps[]>(getAllVideos());
  const [comments, setComments] = useState<CommentProps[]>(getComments(videoId ?? "1"));

  useEffect(() => {
    const data = getVideo(videoId ?? "1");
    const comments = getComments(videoId ?? "1");
    setVideoData(data);
    setComments(comments);
  }, [videoId]);

  return (
    <section className="d-flex">
      <div className="d-flex col-8 flex-column row-gap-4 pe-4">
        <VideoInfo videoData={videoData} className="w-100" />
        <Comments commentsData={comments} />
      </div>
      <div className="flex-grow d-flex flex-column row-gap-2">
        {videosData.map((el, ind) => (
          <Video data={el} state="similar" className="w-100" key={el.thumbnailSrc + ind} />
        ))}
      </div>
    </section>
  );
};
