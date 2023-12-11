import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VideoInfo, Comments, Video } from "../../organisms";
// import { getAllVideos, getComments, getVideo } from "../../../api";
import { CommentProps, VideoProps } from "../../../common";

export const VideoDetail: React.FC = () => {
  const videoId = useParams().id?.toString();
  const [videoData, setVideoData] = useState<VideoProps>();
  const [videosData, setVideosData] = useState<VideoProps[]>([]);
  const [allcomments, setAllComments] = useState<CommentProps[]>([]);
  const [commentsByVideo, setCommentsByVideo] = useState<CommentProps[]>();

  useEffect(() => {
    (async () => {
      await fetch("http://localhost:3000/videos")
        .then((r) => r.json())
        .then((res) => setVideosData(res));
      await fetch(`http://localhost:3000/videos/${videoId ?? "1"}`)
        .then((r) => r.json())
        .then((res) => setVideoData(res));
      await fetch(`http://localhost:3000/comments`)
        .then((r) => r.json())
        .then((res) => setAllComments(res));
      setCommentsByVideo(allcomments.filter((el) => el.videoId === videoId));
    })();
  }, [videoId]);

  return (
    <section className="d-flex">
      <div className="d-flex col-8 flex-column row-gap-4 pe-4">
        {videoData && <VideoInfo videoData={videoData} className="w-100" />}
        <Comments commentsData={commentsByVideo ?? []} />
      </div>
      <div className="flex-grow d-flex flex-column row-gap-2">
        {videosData.map((el, ind) => (
          <Video data={el} state="similar" className="w-100" key={el.thumbnailSrc + ind} />
        ))}
      </div>
    </section>
  );
};
