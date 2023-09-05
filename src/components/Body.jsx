import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./BodyShimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import { DESKTOP_WEB_LISTING } from "../Constants";
import useOnline from "../Utils/useOnline";
import useResData from "../Utils/useResData";

const Body = () => {
  const [allRestaurants, FilterRes] = useResData(DESKTOP_WEB_LISTING);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [searchText, setSearchText] = useState("");

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <h1>
        🔴 Oops! seems that your are offline please check your network
        connection
      </h1>
    );
  }
  if (!allRestaurants) return null;
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restraunt you want..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // filter the restraunt list as per the search
            // and set the restraunts
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restraunt-list">
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restraunt) => (
              <Link
                to={"/restraunt/" + restraunt?.info?.id}
                key={restraunt?.info?.id}
                className="card-link"
              >
                <RestrauntCard {...restraunt?.info} />
              </Link>
            )
          )}
        </div>
      )}
    </>
  );
};
export default Body;
