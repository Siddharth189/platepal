import { useDispatch } from "react-redux";
import { IMG_CLOUD_URL } from "../Constants";
import { addItem } from "../Utils/cartSlice";

const MenuItemCard = ({
  id,
  name,
  imageId,
  price,
  defaultPrice,
  description,
  category,
  isVeg,
}) => {
  const dispatch = useDispatch();

  const addItems = () => {
    dispatch(
      addItem({
        id: id,
        name: name,
        imageId: imageId,
        price: price,
        defaultPrice: defaultPrice,
        category: category,
        isVeg: isVeg,
        description: description,
      })
    );
  };
  return (
    <div className="menu-item-card">
      <div>
        <h2>
          {name}{" "}
          {isVeg === 1 ? (
            <span
              style={{
                border: "3px solid green",
                fontSize: "20px",
                // padding: "1px",
                color: "green",
              }}
            >
              &#9679;
            </span>
          ) : (
            <span
              style={{
                border: "3px solid red",
                fontSize: "20px",
                // padding: "1px",
                color: "red",
              }}
            >
              &#9679;
            </span>
          )}
        </h2>
        <p> &#8377; {(price ?? defaultPrice) / 100.0}</p>
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
