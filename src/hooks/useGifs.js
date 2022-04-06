import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export default function useGifs({ keyword } = { keyword: null }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(
    function (param) {
      setLoading(true);
      //Recuperamos la keyword del localstorage
      const keywordToUse = keyword || localStorage.getItem("lastKeyword");
      getGifs({ keyword: keywordToUse }).then((response) => {
        setGifs(response);
        setLoading(false);
        //Guardamos la keyword en el localstorage
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword]
  );
  return { loading, gifs };
}
