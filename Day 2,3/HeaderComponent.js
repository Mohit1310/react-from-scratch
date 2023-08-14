import React from "react";
import youtube from "./imgs/youtube.png";
import profile from "./imgs/profile.png";
import search from "./imgs/search.png";

const HeaderComponent = () => {
  return (
    <div className="headerComponent">
      <img src={youtube} alt="Logo" className="icons youtube" />
      <div class="search">
        <input type="text" class="search-input" placeholder="Search" />
        <img src={search} alt="search" className="icons" />
      </div>
      <img src={profile} alt="profile" className="icons profile" />
    </div>
  );
};

export default HeaderComponent;
