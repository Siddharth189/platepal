import { useParams } from "react-router-dom";
import { IMG_CLOUD_URL } from "../Constants";
import useRestraunt from "../Utils/useRestraunt";
import { AiTwotoneStar } from "react-icons/ai";
import MenuItemCard from "./MenuItemCard";
import CartShimmer from "./CartShimmer";

const RestrauntMenu = () => {
  const { id } = useParams();
  const { restraunt } = useRestraunt(id);
  const { restrauntMenu } = useRestraunt(id);

  const ratingColor = restraunt?.avgRating >= 4 ? "#00ad1d" : "#ec3838";

  return !restraunt ? (
    <CartShimmer />
  ) : (
    <div className="restraunt-menu">
      <div className="restraunt-menu-header">
        <img
          src={IMG_CLOUD_URL + restraunt?.cloudinaryImageId}
          alt="restraunt"
        />
        <div className="restraunt-menu-content">
          <h1>{restraunt?.name}</h1>
          <p>{restraunt?.cuisines?.join(", ")}</p>
          <div className="card-content">
            <h4 className="rating" style={{ backgroundColor: ratingColor }}>
              <AiTwotoneStar /> {restraunt?.avgRating}
            </h4>{" "}
            |<h4>{restraunt?.sla.slaString}</h4> |
            <h4>{restraunt?.costForTwoMessage}</h4>
          </div>
        </div>
      </div>
      <div className="menu">
        <ul>
          <p
            style={{ fontSize: "1.5rem", lineHeight: "0.3", marginTop: "30px" }}
          >
            Recommended
          </p>
          <p style={{ color: "grey", lineHeight: "0.5" }}>
            {restrauntMenu?.length} ITEMS
          </p>
          {restrauntMenu?.map((item, index) => (
            <li key={item?.id}>
              {console.log("Well item is the: ", item)}
              <MenuItemCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
