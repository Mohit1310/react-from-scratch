import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

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
