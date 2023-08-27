import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

//* SPA - single page application
//* Client side routing

const Title = () => {
  return (
    <Link to="/">
      <div className="w-24">
        <img data-testid="logo" className="w-full object-cover" src={Logo} alt="logo" />
      </div>
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);

  // const handleLogout = () => {
  //   navigate("/login");
  // };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between bg-pink-50 shadow-lg p-3">
      <Title />
      <div className="">
        <ul className="flex">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/cart" data-testid="cart">Cart {cartItems.length}-items</Link>
          </li>
        </ul>
      </div>
      <span data-testid="online-status">{isOnline ? "✅" : "🔴"}</span>
      <h1 className="font-bold text-rose-800">{user.name}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => handleLogin()}>Login</button>
      )}
    </div>
  );
};

export default Header;
