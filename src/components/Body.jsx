import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./BodyShimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import { DESKTOP_WEB_LISTING } from "../Constants";
import useOnline from "../Utils/useOnline";

const Body = () => {
  const [allRestraunts, setAllRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestraunts();
  }, []);

  async function getRestraunts() {
    const data = await fetch(DESKTOP_WEB_LISTING);
    const json = await data.json();
    // Optional Chaning
    setAllRestraunts(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestraunts(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <h1>
        🔴 Oops! seems that your are offline please check your network
        connection
      </h1>
    );
  }

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
            const data = filterData(searchText, allRestraunts);
            setFilteredRestraunts(data);
          }}
        >
          Search
        </button>
      </div>
      {allRestraunts?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restraunt-list">
          {filteredRestraunts?.length !== 0 ? (
            filteredRestraunts?.map((restraunt) => (
              <Link
                to={"/restraunt/" + restraunt.data.id}
                key={restraunt.data.id}
                className="card-link"
              >
                <RestrauntCard {...restraunt.data} />
              </Link>
            ))
          ) : (
            <p> Sorry, we couldn't find any results for "{searchText}" </p>
          )}
        </div>
      )}
    </>
  );
};
export default Body;
