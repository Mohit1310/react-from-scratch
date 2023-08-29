import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import Shimmer from "./Shimmer";

const MainContainer = () => {
  const list = [
    "All",
    "Mixes",
    "News",
    "Music",
    "Live",
    "Debates",
    "Cricket",
    "Sitcom",
    "Moon",
    "Thoughts",
    "CSS",
    "Podcasts",
    "Bollywood",
  ];

  return (
    <div className="mt-20 ml-7">
      <div className="flex">
        {list.map((item, index) => (
          <ButtonList name={item} key={index} />
        ))}
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
