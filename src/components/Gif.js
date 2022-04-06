import React from "react";

export default function Gif({ title, id, url }) {
  return (
    <div>
      <h4>{title}</h4>
      <h5>{id}</h5>
      <img src={url} alt="gifs"></img>
    </div>
  );
}
