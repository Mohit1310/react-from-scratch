import React, { useEffect, useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkMode = useSelector((store) => store.app.isDarkMode);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
    setLoading(false);
  };

  const class1 = isMenuOpen
    ? "flex flex-wrap gap-5 ml-[164px] absolute mt-12 -z-10 p-2"
    : "flex flex-wrap gap-5 ml-4 absolute mt-12 -z-10 p-2";

  const class2 = isDarkMode ? "bg-[#0f0f0f] text-white" : "";

  const combinedClass = `${class1} ${class2}`;

  return (
    <div
      className={combinedClass}
    >
      {videos[25] && <AdVideoCard info={videos[25]} />}
      {loading ? (
        <Shimmer />
      ) : (
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
