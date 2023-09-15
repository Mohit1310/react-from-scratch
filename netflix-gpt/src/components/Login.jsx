import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  // const name = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    //* validate the form data
    const message = checkValidData(
      email.current.value,
      password.current.value
      // name.current.value
    );
    setErrorMessage(message);

    if (message) return;

    //* SignIn SignUp logic
    if (!isSignInForm) {
      //* SignUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //* SignIn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute p-12 bg-black/80 w-1/4 flex flex-col text-white mx-auto right-0 left-0 my-36 rounded-md justify-start">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            // ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-72 rounded-md bg-zinc-800"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="p-3 my-2 w-72 rounded-md bg-zinc-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-72 rounded-md bg-zinc-800"
        />
        <p className="text-red-500 font-bold text-lg py-1">{errorMessage}</p>
        <button
          className="p-3 my-6 bg-[#e50914] font-bold rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <>
              New to Netflix?{" "}
              <span className="text-blue-700 underline">Sign Up</span> now
            </>
          ) : (
            <>
              Already Registered{" "}
              <span className="text-blue-700 underline">Sign In</span> now
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;