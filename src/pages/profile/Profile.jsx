import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { AiFillCheckCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, photoURL, email, emailVerified } = user;
  return (
    <div className="bg-[#ffcffd30] h-[70vh] flex items-center justify-center">
      <div className="container mx-auto flex justify-center items-center gap-10">
        <div>
          <img className="w-[20vw]" src={photoURL} alt="" />
        </div>
        <div className="flex  flex-col gap-4">
          <h2 className="text-2xl font-bold">
            User Name:{" "}
            <span className="capitalize font-medium"> {displayName}</span>
          </h2>
          <p className="text-2xl font-bold">
            Email Address: <span className=" font-medium">{email}</span>
          </p>

          <div className="text-2xl flex items-center gap-2 font-bold">
            Varified:{" "}
            {emailVerified ? (
              <div className="text-green-600">
                <AiFillCheckCircle />
              </div>
            ) : (
              <div className="text-red-600">
                <ImCross />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
