import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { authorizedContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = () => {
    const {pathname}=useLocation();
    const { user, loading } = useContext(authorizedContext);
    if (loading) {
        return (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        );
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