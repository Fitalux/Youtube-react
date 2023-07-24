import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => setVideoDetail(result.items))
      .catch((error) => console.log(error));
  }, [id]);

  if (!videoDetail.snippet) return <Loader />;

  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__conts">
          <div className="left">
            <div className="play">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
            </div>
            <div className="desc">
              <div className="top__desc">
                <h3>{videoDetail[0].snippet.title}</h3>
                <span>조회수 : {videoDetail[0].statistics.viewCount}회</span>
              </div>
              <p>{videoDetail[0].snippet.description}</p>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoConts;
