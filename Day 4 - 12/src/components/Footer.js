import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <hr className="mt-5 border border-black"/>
      <h4 className="p-10 m-2">
        This site is made by {user.name} - {user.email}
      </h4>
    </>
  );
};

export default Footer;
