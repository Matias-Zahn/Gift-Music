import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const token = useSelector((store) => store.user.token);
  if (token) {
    return <Outlet />;
  }else {
    return <Navigate to='/login'/>
  }
}
export default PrivateRoutes;
