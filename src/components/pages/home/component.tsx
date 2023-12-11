import React, { useEffect, useState } from "react";
import { Video } from "../../organisms";
import { VideoProps } from "../../../common";
// import { getAllVideos } from "../../../api";

export const Home: React.FC = () => {
  const [allVideos, setAllVideos] = useState<Array<VideoProps>>([]);

  useEffect(() => {
    (async () => {
      await fetch("http://localhost:3000/videos")
        .then((r) => r.json())
        .then((res) => setAllVideos(res));
    })()
  }, []);

  // при сжатии экрана элементы сжимаются, можно сделать через:
  // display: flex, flex-direction: row, flex-wrap: wrap, ... (basis нужно будет выставить, так и shrink/grow)

  // у antd хороший компонент grid, классно переносятся колонки, а вообще ссылки:
  // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox

  return (
    <section className="d-flex flex-wrap row-gap-5">
      {allVideos?.map((el, ind) => (
        <Video data={el} state="basic" className="col-3 pe-3" key={el.title + ind} />
      ))}
    </section>
  );
};
