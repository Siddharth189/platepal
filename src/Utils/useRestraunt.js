import { useEffect, useState } from "react";
import { FETCH_RESTRAUNT_URL } from "../Constants";

const useRestraunt = (id) => {
  const [restraunt, setRestraunt] = useState(null);
  const [restrauntMenu, setRestrauntMenu] = useState(null);
  useEffect(() => {
    getRestrauntInfo();
  }, []);

  async function getRestrauntInfo() {
    const data = await fetch(FETCH_RESTRAUNT_URL + id);
    const json = await data?.json();
    setRestraunt(json?.data?.cards[0]?.card?.card?.info);
    setRestrauntMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }

  return { restraunt, restrauntMenu };
};

export default useRestraunt;
