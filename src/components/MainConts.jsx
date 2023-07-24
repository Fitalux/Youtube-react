import React, { useState, useEffect } from "react";
import { Category, Videos } from "./";
// import Loader from "./Loader";

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState("추천");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${selectCategory}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log(error));
  }, [selectCategory]);

  // if (!videos?.items) return <Loader />;
  return (
    <main id="main">
      <aside id="aside">
        <Category
          setSelectCategory={setSelectCategory}
          selectCategory={selectCategory}
        />
      </aside>
      <section id="contents">
        <h2>{selectCategory} 유튜버</h2>
        <Videos videos={videos} />
      </section>
    </main>
  );
};

export default MainConts;
