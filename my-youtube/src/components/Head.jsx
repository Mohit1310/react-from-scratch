import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col p-5 shadow">
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
      <div className="col-span-10 flex justify-center">
        <input placeholder="Search" type="text" className="w-1/2 p-2 border border-gray-400 rounded-l-full pl-4"/>
        <button className="border border-gray-400 rounded-r-full px-5 py-2 bg-gray-200">🔍</button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjT0119IxM1Hg7ROECAsZzevAosb8Bon8HfA&usqp=CAU"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Head;
