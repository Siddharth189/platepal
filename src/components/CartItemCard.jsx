import { useDispatch } from "react-redux";
import { IMG_CLOUD_URL } from "../Constants";
import { removeItem } from "../Utils/cartSlice";

const CartItemCard = ({ name, imageId, price, index }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItem(index));
  };
  return (
    <div className="menu-item-card">
      <div>
        <h2>{name}</h2>
        <p> &#8377; {price / 100}</p>
      </div>
      <div className="flex-column">
        <img src={IMG_CLOUD_URL + imageId} alt="" />
        <button className="menu-btn" onClick={() => handleRemoveItem()}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
