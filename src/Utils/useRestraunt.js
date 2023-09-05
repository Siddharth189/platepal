import { useEffect, useState } from "react";
import { FETCH_RESTRAUNT_URL } from "../Constants";
import { MENU_ITEM_TYPE_KEY } from "../Constants";

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
    const menuItemsData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];

    const uniqueMenuItems = [];
    menuItemsData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });
    setRestrauntMenu(uniqueMenuItems);
  }

  return { restraunt, restrauntMenu };
};

export default useRestraunt;
