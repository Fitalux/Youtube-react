import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const shortViews = (views) => {
  const shortter = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
  });

  return shortter.format(views);
};

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setVideoDetail(result.items[0]);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;
  const {
    snippet: { title, description },
    statistics: { viewCount },
  } = videoDetail;

  const shorttedViews = shortViews(viewCount);

  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__conts">
          <div className="left">
            <div className="play">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
            </div>
            <div className="desc">
              <h3>{title}</h3>
              <span>조회수 : {shorttedViews}회</span>
            </div>
            <div className="video_desc">{description.slice(0, 500)}...</div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoConts;
