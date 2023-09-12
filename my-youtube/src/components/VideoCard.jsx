import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-[320px] h-full overflow-hidden shadow rounded-lg">
      <img
        className="w-full rounded-lg"
        src={thumbnails?.medium.url}
        alt="thumbnail"
      />
      <div className="p-2 flex flex-col">
        <p className="font-bold overflow-hidden">{title}</p>
        <div className="justify-end">
          <p className="mt-3">{channelTitle}</p>
          <p>{statistics?.viewCount} views</p>
        </div>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border-4 border-red-500">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
