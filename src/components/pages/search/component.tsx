import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { searchVideo } from "../../../api";
import { Video } from "../../organisms";
import { VideoProps } from "../../../common";

export const Search: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [videos, setVideos] = useState<VideoProps[]>([]);
  const searchValue = useSelector((state: RootState) => state.header.search);

  useEffect(() => {
    setVideos(searchVideo(searchValue));
  }, [searchValue]);
  return (
    <section className="d-flex flex-column row-gap-3 search-page">
      {videos.map((el, ind) => (
        <Video data={el} state="search" className="col-12" key={el.thumbnailSrc + ind} />
      ))}
    </section>
  );
};
