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
 *
 *
 *
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading 1"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
