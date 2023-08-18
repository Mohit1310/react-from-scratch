import { useEffect, useState } from "react";
import { restaurantsList } from "../../constants";
import RestuarantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filteredData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterData;
}

//* no key (not acceptable) <<<<<<<< index key(last option) <<<<<<< unique key(best practice)
const Body = () => {
  //* SearchText is a local state variable
  const [searchInput, setSearchInput] = useState(); //* To create a state variable
  //* useState returns = [variable name, function to update the variable]

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //* Api Calls
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6599188&lng=75.9063906&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("Fetched JSON:", json); // Log the fetched data
    //* Optional Chaining
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  console.log("render");

  //* not render components (Early return)
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        {/* 
        //! the below input will work in html but not in react because it uses "one way data binding"!!!
        */}
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="searchBtn"
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
      <div className="restuarant-lists">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurants found</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <>
              <RestuarantCard {...restaurant.info} key={restaurant.info.id} />
            </>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
