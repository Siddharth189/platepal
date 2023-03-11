import { useState } from "react";
const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return [isLoggedIn, setIsLoggedIn];
};

export default useAuth;
