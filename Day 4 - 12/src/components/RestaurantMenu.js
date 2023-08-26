import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  const restaurantCardApi = restaurant?.cards[0]?.card?.card?.info;
  const api =
    restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="p-2 flex flex-col flex-none">
        {/* <h1>Restaurant id: {resId}</h1> */}
        <img
          src={IMG_CDN_URL + restaurantCardApi.cloudinaryImageId}
          alt="restaurant img"
          className="w-52 h-52 object-cover"
          />
        <h2>{restaurantCardApi.name}</h2>
        <h3>{restaurantCardApi.areaName}</h3>
        <h3>{restaurantCardApi.city}</h3>
        <h3>{restaurantCardApi.avgRating} stars</h3>
        <h3>{restaurantCardApi.costForTwoMessage}</h3>
      </div>
      <div>
        <h1 className="font-bold text-2xl">Menu</h1>
        <ul className="flex flex-wrap gap-7">
          {Object.values(api).map((item) => (
            <li key={item?.card?.info?.id} className="m-1 w-52 flex flex-col">
              <img src={IMG_CDN_URL + item?.card?.info?.imageId} alt="menu item image" className="w-full h-56 object-cover"/>
              {item?.card?.info?.name}
              <button
                className="p-2 w-16  bg-green-100 hover:bg-green-400 transition-colors ease-in self-center"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
