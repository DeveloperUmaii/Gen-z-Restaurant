import { Children } from "react";
import UseAuthHook from "../../providers/ContexHook/UseAuthHook";
import { Navigate, useLocation } from "react-router-dom";

const Private = (  { Children}  ) => {
  const { user } = UseAuthHook();
  const location = useLocation();
  return user ? (
     Children 
    // { Children }
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
const Private = ({ children }) => {
  const { user } = UseAuthHook();
  const location = useLocation();

  return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default Private;
