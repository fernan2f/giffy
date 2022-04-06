import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";

const POPULAR_GIFS = ["goku", "vegeta", "naruto", "messi"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  return (
    <>
      <ul>
        <h3 className="App-title">Los gifs más populares</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search a gif here..."
            onChange={handleChange}
          ></input>
          <ListOfGifs gifs={gifs}></ListOfGifs>
        </form>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
