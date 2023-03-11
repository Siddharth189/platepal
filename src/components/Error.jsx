import { useRouteError } from "react-router-dom";
import { IMG_CLOUD_URL } from "../Constants";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-page">
      <img src={IMG_CLOUD_URL + "empty_404_3x_rgdw87"} alt="Error" />
      <h1>
        Page not found {err.status} {err.statusText}
      </h1>
      <h2>
        Uh-oh! Looks like the page you are trying to access, doesn't exist.
        Please start afresh.
      </h2>
    </div>
  );
};

export default Error;
