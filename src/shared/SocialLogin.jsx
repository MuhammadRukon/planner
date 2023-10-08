import { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const SocialLogin = ({ handleError }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInWithGoogle } = useContext(AuthContext);
  const handleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Succesfully Logged In!", {
          autoClose: 1800,
        });
        setTimeout(
          () => navigate(location?.state ? location.state : "/"),
          2000
        );
      })
      .catch((error) => handleError(error.message));
  };
  return (
    <>
      <p className="text-center">or</p>
      <hr className="border-gray-400 w-[80%] mx-auto" />
      <div className="text-center">
        <button onClick={() => handleLogin()} className="text-4xl">
          <AiFillGoogleCircle />
        </button>
      </div>
      <ToastContainer />
    </>
  );
};
SocialLogin.propTypes = {
  handleError: PropTypes.func,
};
export default SocialLogin;
