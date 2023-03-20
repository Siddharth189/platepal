import { useDispatch } from "react-redux";
import { IMG_CLOUD_URL } from "../Constants";
import { addItem } from "../Utils/cartSlice";

const MenuItemCard = ({ id, name, imageId, price, description }) => {
  const dispatch = useDispatch();

  const addItems = () => {
    dispatch(
      addItem({
        id: id,
        name: name,
        imageId: imageId,
        price: price,
        description: description,
      })
    );
  };
  return (
    <div className="menu-item-card">
      <div>
        <h2>{name}</h2>
        <p> &#8377; {price / 100.0}</p>
        <p> {description}</p>
      </div>
      <div className="flex-column">
        <img src={IMG_CLOUD_URL + imageId} alt="" />
        <button className="menu-btn" onClick={() => addItems()}>
          ADD +
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
