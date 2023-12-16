import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
// import { searchVideo } from "../../../api";
import { Video } from "../../organisms";
import { VideoProps } from "../../../common";

export const Search: React.FC = () => {
  const [allVideos, setAllVideos] = useState<VideoProps[]>([]);
  const [videos, setVideos] = useState<VideoProps[]>([]);
  const searchValue = useSelector((state: RootState) => state.header.search);

  useEffect(() => {
    const res = allVideos.filter(
      (el) =>
        el.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        el.channelName?.toLowerCase().includes(searchValue.toLowerCase()) ||
        el.description?.toLowerCase().includes(searchValue.toLowerCase()),
    );

    setVideos(res);
  }, [allVideos, searchValue]);

  useEffect(() => {
    (async () => {
      await fetch("http://localhost:3000/videos")
        .then((r) => r.json())
        .then((res) => setAllVideos(res));
    })();
  }, []);
  return (
    <section className="d-flex flex-column row-gap-3 search-page">
      {videos.map((el, ind) => (
        <Video data={el} state="search" className="col-12" key={el.thumbnailSrc + ind} />
      ))}
    </section>
  );
};
