import React, { useState } from "react";
import { videos } from "./mock";
import { Video } from "../../organisms";

export const Home: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isChecked, setIsChecked] = useState(false);
  return (
    <section className="d-flex flex-wrap row-gap-5">
      {videos.map((el, ind) => (
        <Video data={el} state="basic" className="col-3 pe-3" key={el.thumbnailSrc + ind} />
      ))}
    </section>
  );
};
