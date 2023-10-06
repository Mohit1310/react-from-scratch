import React from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { useSelector } from "react-redux";

const ChatMessage = ({ name, message }) => {
  const isDarkMode = useSelector((store) => store.app.isDarkMode);
  return (
    <div className={isDarkMode ? "flex items-center shadow-sm p-2 bg-[#0f0f0f] text-white" :"flex items-center shadow-sm p-2"}>
      <PiUserCircleLight className="text-4xl" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
