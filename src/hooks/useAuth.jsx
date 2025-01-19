import { useContext } from "react";
import { authorizedContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
  const context = useContext(authorizedContext);
  return context;
};

export default useAuth;
