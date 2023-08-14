/*
 * Parcel -> Features
 *
 * Created a Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - written C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older versions of browsers
 * HTTPS on dev
 * Port Number
 * Consistent Hashing Algorithms
 * Zero Config
 * Tree Shaking - Removing un-wanted code
 *
 *
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./HeaderComponent";

// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//   },
//   "heading 1"
// );

// ?: React.createElement => Object => HTML(DOM)
// console.log(heading);

// ?: JSX => React.createElement => Object => HTML(DOM)
const Heading = () => (
  // JSX Expression
  <h1 id="heading" key="h1" tabIndex="1">
    Namaste React
  </h1>
);

// React Component
// - Functional - NEW
// - Class Based Component - OLD
// Name of component starts with capital letter - not mandatory but good practice

const Heading1 = () => {
  return (
    <div>
      {/* //? This is component composition or composing components */}
      {/* <Heading /> or Heading() */}
      {/* <h1>Namaste React functional component</h1>
      <h2>This is a h2 tag</h2> */}
      <HeaderComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading1 />);
