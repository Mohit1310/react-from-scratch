import { useEffect, useState } from "react";
import RestuarantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filteredData } from "../utils/helper";

//* no key (not acceptable) <<<<<<<< index key(last option) <<<<<<< unique key(best practice)
const Body = () => {
  //* SearchText is a local state variable
  const [searchInput, setSearchInput] = useState(); //* To create a state variable
  //* useState returns = [variable name, function to update the variable]

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    //* Api Calls
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6599188&lng=75.9063906&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //* Optional Chaining
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  //* not render components (Early return)
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex gap-2 bg-pink-50 p-5 my-5">
        {/* 
        //! the below input will work in html but not in react because it uses "one way data binding"!!!
        */}
        <input
          type="text"
          className="focus:bg-purple-100 p-2 rounded-md ml-7 ease-in duration-75"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="searchBtn p-2 bg-purple-900 text-white rounded-md hover:bg-purple-500 ease-in duration-100"
          onClick={() => {
            // * need to filter the data
            const data = filteredData(searchInput, allRestaurants);
            // * update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurants found</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
              <RestuarantCard {...restaurant.info} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
