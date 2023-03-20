import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { clearCart } from "../Utils/cartSlice";
import { IMG_CLOUD_URL } from "../Constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="menu">
      <h1>
        Cart Items -{" "}
        <button onClick={() => handleClearCart()} className="menu-btn">
          Clear Cart
        </button>
      </h1>
      {cartItems?.length === 0 ? (
        <div className="flex-column">
          <img src={IMG_CLOUD_URL + "2xempty_cart_yfxml0"} />
          <h1>Your cart is empty</h1>
          <p>You can go to home page to view more restaurants</p>
        </div>
      ) : (
        cartItems?.map((item, index) => (
          <CartItemCard key={item.id + index} {...item} index={index} />
        ))
      )}
    </div>
  );
};

export default Cart;
