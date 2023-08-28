import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

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
    <div>
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
