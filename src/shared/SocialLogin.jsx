import { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInWithGoogle } = useContext(AuthContext);
  const handleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Succesfully Logged In!", {
          autoClose: 2000,
        });
        setTimeout(
          () => navigate(location?.state ? location.state : "/"),
          3000
        );
      })
      .catch((error) => console.log(error.message));
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

export default SocialLogin;
