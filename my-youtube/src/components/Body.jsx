import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isDarkMode = useSelector((store) => store.app.isDarkMode);
  return (
    <div className={isDarkMode ? "bg-[#0f0f0f]" : "bg-white"}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
