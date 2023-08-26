// * Name Import
import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

//* Optional Chaining HW*
const RestuarantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  const { user } = useContext(UserContext);
  return (
    // square bracket to precise
    <div className="w-56 h-full p-2 shadow-lg bg-pink-50 border-2 border-rose-200 rounded">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="image"
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h4 className="font-bold">
        {user.name} - {user.email}
      </h4>
    </div>
  );
};

export default RestuarantCard;
