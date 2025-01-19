import { useContext } from "react";
import { authorizedContext } from "../AuthProvider/AuthProvider";

const context = useContext(authorizedContext);
const useAuth = () => {
  return context;
};

export default useAuth;
