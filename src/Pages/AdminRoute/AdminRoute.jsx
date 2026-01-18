import { Navigate, useLocation } from "react-router-dom";
import hookAdmin from "../../hooks/hookAdmin";
import UseAuthHook from "../../providers/ContexHook/UseAuthHook";

const AdminRoute = ({children}) => {
  const { user, loading } = UseAuthHook()
  const location = useLocation();
  const [isAdmin, isAdminLoading] = hookAdmin();

  if (loading || isAdminLoading) {
    return (
      <div className="">
        <progress className="progress w-56"></progress>
        <h3>loading . . . .</h3>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
