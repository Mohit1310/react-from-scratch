import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return null

  return (
    <div className="mt-[81.9px] shadow p-5 bg-white">
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li>Shorts</li>
        <li>Subscribtions</li>
      </ul>
      <h1 className="font-bold pt-5">For me</h1>
      <ul>
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
      </ul>
    </div>
  );
};

export default Sidebar;
