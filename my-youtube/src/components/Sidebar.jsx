import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkMode = useSelector((store) => store.app.isDarkMode);

  //* Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div
      className={
        isDarkMode
          ? "fixed h-screen w-44 py-3 px-4 bg-[#0f0f0f] text-white"
          : "fixed h-screen w-44 py-3 px-4 bg-white"
      }
    >
      <ul>
        <li
          className={
            isDarkMode
              ? "hover:bg-stone-700 rounded-md py-1 px-2"
              : "hover:bg-gray-200 rounded-md py-1 px-2"
          }
        >
          <Link to={"/"}>Home</Link>
        </li>
        <li
          className={
            isDarkMode
              ? "hover:bg-stone-700 rounded-md py-1 px-2"
              : "hover:bg-gray-200 rounded-md py-1 px-2"
          }
        >
          Shorts
        </li>
        <li
          className={
            isDarkMode
              ? "hover:bg-stone-700 rounded-md py-1 px-2"
              : "hover:bg-gray-200 rounded-md py-1 px-2"
          }
        >
          Subscribtions
        </li>
      </ul>
      <h1 className="font-bold pt-5">For me</h1>
      <ul>
        <li
          className={
            isDarkMode
              ? "hover:bg-stone-700 rounded-md py-1 px-2"
              : "hover:bg-gray-200 rounded-md py-1 px-2"
          }
        >
          Library
        </li>
        <li
          className={
            isDarkMode
              ? "hover:bg-stone-700 rounded-md py-1 px-2"
              : "hover:bg-gray-200 rounded-md py-1 px-2"
          }
        >
          History
        </li>
        <li
          className={
            isDarkMode
              ? "hover:bg-stone-700 rounded-md py-1 px-2"
              : "hover:bg-gray-200 rounded-md py-1 px-2"
          }
        >
          Your Videos
        </li>
        <li
          className={
            isDarkMode
              ? "hover:bg-stone-700 rounded-md py-1 px-2"
              : "hover:bg-gray-200 rounded-md py-1 px-2"
          }
        >
          Watch Later
        </li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li
          className={
            isDarkMode
              ? "hover:bg-stone-700 rounded-md py-1 px-2 flex"
              : "hover:bg-gray-200 rounded-md py-1 px-2 flex"
          }
        >
          Trending
        </li>
        <li
          className={
            isDarkMode
              ? "hover:bg-stone-700 rounded-md py-1 px-2"
              : "hover:bg-gray-200 rounded-md py-1 px-2"
          }
        >
          Shopping
        </li>
        <li
          className={
            isDarkMode
              ? "hover:bg-stone-700 rounded-md py-1 px-2"
              : "hover:bg-gray-200 rounded-md py-1 px-2"
          }
        >
          Music
        </li>
        <li
          className={
            isDarkMode
              ? "hover:bg-stone-700 rounded-md py-1 px-2"
              : "hover:bg-gray-200 rounded-md py-1 px-2"
          }
        >
          Films
        </li>
        <li
          className={
            isDarkMode
              ? "hover:bg-stone-700 rounded-md py-1 px-2"
              : "hover:bg-gray-200 rounded-md py-1 px-2"
          }
        >
          Live
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
