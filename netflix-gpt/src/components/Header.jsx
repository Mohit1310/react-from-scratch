import { signOut } from "firebase/auth";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { FaCaretDown } from "react-icons/fa"; // Import the icons
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex justify-between align-middle absolute top-0 right-0 left-0 px-2 py-2 bg-gradient-to-b from-black z-10 md:px-8">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 items-center relative">
          <div className="w-12 h-12 cursor-pointer" onClick={toggleDropdown}>
            <img src={user?.photoURL} alt="user icon" className="w-12 h-12" />
          </div>
          <FaCaretDown
            className={`ml-2 text-white cursor-pointer transform ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-32  w-48 bg-white border border-gray-300 shadow-lg rounded"
              ref={dropdownRef}
            >
              <ul>
                <li
                  className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                  onClick={handleSignOut}
                >
                  Sign Out
                </li>
                <li
                  className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                  onClick={handleGptSearch}
                >
                  {showGptSearch ? "Home" : "GPT Search"}
                </li>
                {showGptSearch && (
                  <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    Language
                    <select
                      className="ml-2 border border-black rounded-md cursor-pointer"
                      onChange={handleLangChange}
                    >
                      <option value="select option">
                        Select Lang &nbsp;&nbsp;
                      </option>
                      {SUPPORTED_LANGUAGES.map((lang) => (
                        <option
                          key={lang.identifier}
                          value={lang.identifier}
                          className=""
                        >
                          {lang.name}
                        </option>
                      ))}
                    </select>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
