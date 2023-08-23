// * Name Import
import { IMG_CDN_URL } from "../../constants";

//* Optional Chaining HW*
const RestuarantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    // square bracket to precise
    <div className="w-56 h-full p-2 shadow-lg bg-pink-50 border-2 border-rose-200 rounded">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" className="w-full h-48 object-cover rounded"/>
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestuarantCard;
