import { useEffect, useState } from "react";
import { FETCH_RESTRAUNT_URL } from "../Constants";

const useRestraunt = (id) => {
  const [restraunt, setRestraunt] = useState(null);
  useEffect(() => {
    getRestrauntInfo();
  }, []);

  async function getRestrauntInfo() {
    const data = await fetch(FETCH_RESTRAUNT_URL + id);
    const json = await data?.json();
    setRestraunt(json?.data);
  }

  return restraunt;
};

export default useRestraunt;
