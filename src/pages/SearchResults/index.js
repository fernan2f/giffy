import React, { useState, useEffect } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import Spinner from "../../components/Spinner/index";
import useGifs from "../../hooks/useGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });
  return (
    <div>{loading ? <Spinner /> : <ListOfGifs gifs={gifs}></ListOfGifs>}</div>
  );
}
