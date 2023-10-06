import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleIsDarkMode } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { CiDark } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
import { BsSun } from "react-icons/bs";
import { TfiBell } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import SvgComponent from "./YoutubeDark";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const isDarkMode = useSelector((store) => store.app.isDarkMode);

  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current.focus();
      } else if (e.key === "Escape") {
        e.preventDefault();
        inputRef.current.blur();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    //* Make api call after every key press
    //* But if the time between key press is less than 200ms
    //* decline the api call ==== this is DEBOUCING
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugesstions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugesstions = async () => {
    //* API call
    console.log("Api call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    //! update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleDarkMode = () => {
    dispatch(toggleIsDarkMode());
  };

  return (
    <div
      className={
        isDarkMode
          ? "grid grid-flow-col p-5 fixed top-0 left-0 right-0 bg-[#0f0f0f] text-white h-20"
          : "grid grid-flow-col p-5 fixed top-0 left-0 right-0 bg-white h-20"
      }
    >
      <div className="flex col-span-1">
        <GiHamburgerMenu
          className="text-3xl cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        {isDarkMode ? (
          <SvgComponent />
        ) : (
          <img
            className="h-8 ml-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
            alt="youtube logo"
          />
        )}
      </div>
      <div className="col-span-1">
        <div className="flex">
          <input
            ref={inputRef}
            placeholder="Search"
            type="text"
            className={
              isDarkMode
                ? "w-4/5 p-2 rounded-l-full pl-4 bg-[#0f0f0f] border border-gray-400 focus:outline-none"
                : "w-4/5 p-2 border border-gray-400 rounded-l-full pl-4 focus:outline-blue-800"
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className={
              isDarkMode
                ? "rounded-r-full px-5 py-2 bg-[#222] border border-l-0 border-gray-400"
                : "border border-gray-400 rounded-r-full px-5 py-2 bg-gray-200"
            }
          >
            <GoSearch className="text-xl" />
          </button>
        </div>
        {showSuggestions && (
          <>
            {suggestions.length === 0 ? null : (
              <ul
                className={
                  isDarkMode
                    ? "fixed bg-[#0f0f0f] py-3  w-[29rem] rounded-lg shadow-lg"
                    : "fixed bg-white py-3  w-[29rem] border border-gray-100 rounded-lg shadow-lg"
                }
              >
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="flex gap-2 py-1 px-5 hover:bg-gray-200 cursor-pointer"
                  >
                    <GoSearch className="text-xl" /> {s}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
      <div className="col-span-1 flex flex-row-reverse gap-4">
        <PiUserCircleLight className="text-4xl" />
        <TfiBell className="text-3xl" />
        {!isDarkMode ? (
          <CiDark
            className="text-3xl cursor-pointer"
            onClick={() => toggleDarkMode()}
          />
        ) : (
          <BsSun
            className="text-3xl cursor-pointer"
            onClick={() => toggleDarkMode()}
          />
        )}
      </div>
    </div>
  );
};

export default Head;
