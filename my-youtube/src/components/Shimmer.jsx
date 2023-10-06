import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-[420px] shadow rounded-lg">
            <div className="bg-gray-300 w-full h-40 rounded-lg"></div>
            <ul className="p-2">
              <li className="h-6 bg-gray-400 m-2 rounded-md"></li>
              <li className="w-1/3 h-6 bg-gray-400 m-2 rounded-md"></li>
              <li className="w-1/2 h-4 bg-gray-200 m-2 mt-3 rounded-md"></li>
              <li className="w-1/3 h-4 bg-gray-200 m-2 rounded-md"></li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
