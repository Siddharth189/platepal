import { IMG_CLOUD_URL } from "../Constants";
import { AiTwotoneStar } from "react-icons/ai";

const RestrauntCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  const ratingColor = avgRatingString >= 4 ? "#00ad1d" : "#ec3838";

  return (
    <div className="card">
      <img src={IMG_CLOUD_URL + cloudinaryImageId} alt="food" />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <p>{"Area: " + areaName}</p>
      <div className="card-content">
        <h4 className="rating" style={{ backgroundColor: ratingColor }}>
          <AiTwotoneStar /> {avgRatingString}
        </h4>
        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
        <h4>{costForTwo ?? "₹200 for two"}</h4>
      </div>
    </div>
  );
};

export default RestrauntCard;
