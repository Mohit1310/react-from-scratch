import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, description, imageId, price }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + imageId} alt="menu img" className="w-full h-48 object-cover rounded" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="text-lg">{description}</h3>
      <h4 className="font-bold text-md">Rupees: {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
