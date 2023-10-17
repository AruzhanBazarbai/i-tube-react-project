import React from "react";
import { videos } from "./mock";
import { Video } from "../../organisms";

export const Search: React.FC = () => (
  <section className="d-flex flex-column row-gap-3 search-page">
    {videos.map((el, ind) => (
      <Video data={el} state="search" className="col-12" key={el.thumbnailSrc + ind} />
    ))}
  </section>
);
