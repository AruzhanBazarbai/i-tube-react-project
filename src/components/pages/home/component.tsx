import React, { useEffect, useState } from "react";
import { Video } from "../../organisms";
import { VideoProps } from "../../../common";
import { getAllVideos } from "../../../api";

export const Home: React.FC = () => {
  const [allVideos, setAllVideos] = useState<Array<VideoProps>>([]);

  useEffect(() => {
    // (async () => {
    //   const data = await getAllVideos();
    //   // setAllVideos(data.items);
    // })()
    const data = getAllVideos();
    setAllVideos(data);
  }, []);

  return (
    <section className="d-flex flex-wrap row-gap-5">
      {allVideos?.map((el, ind) => (
        <Video data={el} state="basic" className="col-3 pe-3" key={el.title + ind} />
      ))}
    </section>
  );
};
