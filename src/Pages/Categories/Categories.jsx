import React from "react";
import s from "./Categories.module.scss";

function Categories() {
  return (
    <div>
      <p
      className={s.categories}
      >
        Here is Our Youtube channel where we post our blog and other Categories!
      </p>
      <div className={s.block_iframe}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rEdl2Uetpvo?si=Yg29sx4z7ftAAUSW"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VvJm4pQZ04s?si=fuRoGuUEx5dkt5zV"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className={s.block_iframe}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sv3TXMSv6Lw?si=6_49M5i4nMaylkrr"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_Q0FYoCl4Cs?si=jxifAYg6vz67Stgr"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Categories;
