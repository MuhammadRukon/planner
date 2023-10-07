import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../components/Loading";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="bg-[#ffcffd30] h-[70vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  if (!user) return <Navigate state={location.pathname} to="/login" />;
  if (user) return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
