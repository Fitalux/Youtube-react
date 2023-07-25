import React, { useEffect, useState } from "react";
import { Category, Videos } from "./";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

const SearchConts = () => {
  const [selectCategory, setSelectCategory] = useState([]);
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchTerm}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.items);
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);

  if (!videos) return <Loader />;

  return (
    <main id="main">
      <section id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </section>
      <section id="contents">
        <h2>검색어 : {searchTerm}</h2>
        <Videos videos={videos} />
      </section>
    </main>
  );
};

export default SearchConts;
