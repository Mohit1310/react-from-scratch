import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current.focus();
      } else if (e.key === 'Escape') {
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

  return (
    <div className="grid grid-flow-col p-5 shadow fixed top-0 left-0 right-0 bg-white ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt="toggle menu icon"
        />
        <img
          className="h-8 ml-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
          alt="youtube logo"
        />
      </div>
      <div className="col-span-1">
        <div>
          <input
            ref={inputRef}
            placeholder="Search"
            type="text"
            className="w-4/5 p-2 border border-gray-400 rounded-l-full pl-4 focus:outline-blue-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 rounded-r-full px-5 py-2 bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <>
            {suggestions.length === 0 ? null : (
              <ul className="fixed bg-white py-3  w-[29rem] border border-gray-100 rounded-lg shadow-lg">
                {suggestions.map((s) => (
                  <li key={s} className="py-1 px-5 hover:bg-gray-100">
                    🔍 {s}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
      <div className="col-span-1 flex flex-row-reverse gap-4">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjT0119IxM1Hg7ROECAsZzevAosb8Bon8HfA&usqp=CAU"
          alt="user icon"
        />
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
          alt="notification icon"
        />
      </div>
    </div>
  );
};

export default Head;
