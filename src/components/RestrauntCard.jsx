import { IMG_CLOUD_URL } from "../Constants";
import { AiTwotoneStar } from "react-icons/ai";

const RestrauntCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  deliveryTime,
  avgRating,
  costForTwoString,
}) => {
  const ratingColor = avgRating >= 4 ? "#00ad1d" : "#ec3838";

  return (
    <div className="card">
      <img src={IMG_CLOUD_URL + cloudinaryImageId} alt="food" />
      <h2>{name}</h2>
      <p>{cuisines?.join(", ")}</p>
      <div className="card-content">
        <h4 className="rating" style={{ backgroundColor: ratingColor }}>
          <AiTwotoneStar /> {avgRating}
        </h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{costForTwoString}</h4>
      </div>
    </div>
  );
};

export default RestrauntCard;
