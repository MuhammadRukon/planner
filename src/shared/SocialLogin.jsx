import { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from "../provider/AuthProvider";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleLogin = () => {
    signInWithGoogle()
      .then((result) => console.log(result.user))
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
    </>
  );
};

export default SocialLogin;
