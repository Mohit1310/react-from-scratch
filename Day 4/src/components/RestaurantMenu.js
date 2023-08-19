import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6599188&lng=75.9063906&restaurantId=" +
        resId
    );
    const json = await data.json();
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant id: {resId}</h1>
      <h2>{restaurant?.cards[0]?.card?.card?.info.name}</h2>
      <img
        src={
          IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId
        }
        alt="menu img"
      />
      <h3>{restaurant?.cards[0]?.card?.card?.info.areaName}</h3>
      <h3>{restaurant?.cards[0]?.card?.card?.info.city}</h3>
      <h3>{restaurant?.cards[0]?.card?.card?.info.avgRating} stars</h3>
      <h3>{restaurant?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
    </div>
  );
};

export default RestaurantMenu;
