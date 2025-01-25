import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { authorizedContext } from "../AuthProvider/AuthProvider";
import Loader from "../Components/Loader";

const PrivateRoute = ({children}) => {
    const {pathname}=useLocation();
    const { user, loading } = useContext(authorizedContext);
    if (loading) {
        return <Loader></Loader>
      }
      if (user) {
        return children;
      }
    
    return (
        <div>
        <Navigate state={pathname} to="/login"></Navigate>
      </div>
    );
};

export default PrivateRoute;