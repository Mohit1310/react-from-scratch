import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import TruncateText from "./TruncateText";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <TruncateText text={overview} maxWords={20} />
      <div>
        <button className=" bg-white text-black p-3 px-12 text-xl rounded-md hover:bg-opacity-80">
          <div className="flex gap-2">
            <BsFillPlayFill className="self-center" /> Play
          </div>
        </button>
        <button className=" bg-gray-500 text-white mx-2 p-3 px-8 text-xl bg-opacity-50 rounded-md">
          <div className="flex gap-2">
            <BiInfoCircle className="self-center" /> More Info
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;