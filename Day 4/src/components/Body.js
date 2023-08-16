import { useState } from "react";
import { restaurantsList } from "../../constants";
import RestuarantCard from "./RestaurantCard";

function filteredData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchInput)
  );
  return filterData;
}

//* no key (not acceptable) <<<<<<<< index key(last option) <<<<<<< unique key(best practice)
const Body = () => {
  //* SearchText is a local state variable
  const [searchInput, setSearchInput] = useState(""); //* To create a state variable
  //* useState returns = [variable name, function to update the variable]

  const [restaurants, setRestaurants] = useState(restaurantsList);

  return (
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
            const data = filteredData(searchInput, restaurants);
            // * update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restuarant-lists">
        {restaurants.map((restaurant) => (
          <RestuarantCard {...restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
