import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="object-cover h-[100vh] w-[100vw]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute p-12 bg-black/80 w-fit flex flex-col text-white mx-auto right-0 left-0 my-36 rounded-md justify-start">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-72 rounded-md bg-zinc-800"
          />
        )}
        <input
          type="email"
          placeholder="Email address"
          className="p-3 my-2 w-72 rounded-md bg-zinc-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 rounded-md bg-zinc-800"
        />
        <button className="p-3 my-6 bg-[#e50914] font-bold rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <p>
              New to Netflix?{" "}
              <span className="text-blue-700 underline">Sign Up</span> now
            </p>
          ) : (
            <p>
              Already Registered{" "}
              <span className="text-blue-700 underline">Sign In</span> now
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
