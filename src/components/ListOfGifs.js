import React from "react";
import Gif from "./Gif";

export default function ListOfGifs({ gifs }) {
  return gifs.map((singleGif) => {
    return (
      <Gif
        key={singleGif.id}
        id={singleGif.id}
        url={singleGif.url}
        title={singleGif.title}
      ></Gif>
    );
  });
}
