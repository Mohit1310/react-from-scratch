import React from "react";
import { useSelector } from "react-redux";

const ButtonList = ({ name }) => {
  const isDarkMode = useSelector((store) => store.app.isDarkMode);

  return (
    <div
      className={
        isDarkMode
          ? "bg-[#3f3f3f] text-white w-fit py-1 px-4 m-2 rounded-lg"
          : "bg-gray-300 w-fit py-1 px-4 m-2 rounded-lg"
      }
    >
      {name}
    </div>
  );
};

export default ButtonList;
