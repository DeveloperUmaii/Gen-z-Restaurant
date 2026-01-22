import { Navigate, useLocation } from "react-router-dom";
import UseAuthHook from "../../providers/ContexHook/UseAuthHook";

const Private = ({ children }) => {
  const { user, loading } = UseAuthHook()
  const location = useLocation();

  if (loading) {
    return (
      <div className="">
        <progress className="progress w-56"></progress>
        <h3>loading . . . .</h3>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Private;
