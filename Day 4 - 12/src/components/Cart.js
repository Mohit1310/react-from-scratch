import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item))
  };

  return (
    <div>
      <h1 className="font-bold text-2xl">Cart - {cartItems.length}</h1>
      <div>
        <button
          className="bg-red-600 text-white p-2 m-5"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        {cartItems.map((item) => (
          <div>
            <FoodItem key={item?.card?.info?.id} {...item?.card?.info} />
            <button className="bg-red-200 p-2 m-5" onClick={() => handleRemoveItem(item)}>
              Remove Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
