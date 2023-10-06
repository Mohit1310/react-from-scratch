import React, { useEffect, useRef, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  const formatView = (number) => {
    if (number < 1000) {
      return number.toString(); // No formatting needed for numbers less than 1000
    } else if (number < 1000000) {
      const formattedNumber = (number / 1000).toFixed(1);
      return formattedNumber.replace(/\.0$/, "") + "K"; // Remove ".0" if present
    } else {
      const formattedNumber = (number / 1000000).toFixed(1);
      return formattedNumber.replace(/\.0$/, "") + "M"; // Remove ".0" if present
    }
  };

  const timeAgo = (timestamp) => {
    const currentDate = new Date();
    const previousDate = new Date(timestamp);

    const timeDifference = currentDate - previousDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
    } else if (minutes < 60) {
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else if (hours < 24) {
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else {
      return days === 1 ? "1 day ago" : `${days} days ago`;
    }
  };

  const truncateTextAfterLines = (text, lines) => {
    const container = useRef(null);
    const [isTruncated, setIsTruncated] = useState(false);

    useEffect(() => {
      const containerHeight = container.current.clientHeight;
      const lineHeight = parseInt(
        window.getComputedStyle(container.current).lineHeight
      );
      const maxLines = Math.floor(containerHeight / lineHeight);

      setIsTruncated(maxLines > lines);
    }, [text, lines]);

    const style = {
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: lines,
      WebkitBoxOrient: "vertical",
    };

    return (
      <div ref={container} style={isTruncated ? style : null}>
        {text}
      </div>
    );
  };

  const truncatedTitle = truncateTextAfterLines(title, 2);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={isMenuOpen ? "w-[420px] rounded-lg" : "w-[350px] rounded-lg"}
    >
      <img
        className="w-full rounded-lg"
        src={thumbnails?.medium.url}
        alt="thumbnail"
      />
      <div className="p-2 flex flex-col">
        <p className="font-bold overflow-hidden">{truncatedTitle}</p>
        <div className="justify-end">
          <p className="mt-3">{channelTitle}</p>
          <div className="flex">
            <p>{formatView(statistics?.viewCount)} views</p>
            <RxDotFilled className="self-center text-gray-700" />
            <p>{timeAgo(publishedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 border-2 rounded-lg border-red-500">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
