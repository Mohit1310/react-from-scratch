import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-80 overflow-hidden shadow rounded-lg">
      <img
        className="w-full rounded-lg"
        src={thumbnails?.medium.url}
        alt="thumbnail"
      />
      <ul className="p-2">
        <li className="font-bold overflow-hidden">{title}</li>
        <li className="mt-3">{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
