import React from "react";

const VideoCard = ({ info }) => {
//   console.log(info);
//   const { snippet, statistics } = info;
//   const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-80 m-2 overflow-hidden shadow rounded-lg">
      <img className="w-full rounded-lg" src={info?.snippet?.thumbnails?.medium.url} alt="thumbnail" />
      <ul className="p-2">
        <li className="font-bold overflow-hidden">{info?.snippet?.title}</li>
        <li className="mt-3">{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
