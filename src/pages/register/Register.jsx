import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUser } = useContext(AuthContext);
  const formRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const handleRegister = (e) => {
    setErrorMsg("");
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const photo = form.get("photo");
    const password = form.get("password");
    if (!/.*[A-Z].*/.test(password)) {
      setErrorMsg("password should contain atleast one capital letter");
      return;
    }
    if (!/.*[!@#$%^&*()_+{}[\]:;<>,.?~\\|/-].*/.test(password)) {
      setErrorMsg("password should contain atleast one special character");
      return;
    }
    if (!/^.{6,}$/.test(password)) {
      setErrorMsg("password should be 6 or more characters long");
      return;
    }

    createUser(email, password)
      .then(() => {
        toast.success("Succesfully Signed Up!", {
          autoClose: 1800,
        });
        updateUser(name, photo)
          .then(() => console.log("user Updated"))
          .catch((error) => console.log(error.message));
        setTimeout(() => navigate("/"), 2300);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
    formRef.current.reset();
  };
  return (
    <>
      <div>
        <div className="hero min-h-[85vh]">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold font-primary">Register now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm  bg-[#ffcffd80] border">
              <div className="card-body">
                <form onSubmit={handleRegister} ref={formRef}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="input input-bordered focus:outline-none"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="photo-url"
                      className="input input-bordered focus:outline-none"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered focus:outline-none"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered focus:outline-none"
                    />
                  </div>
                  <p className="text-red-600 text-sm mt-2 mx-2">
                    {errorMsg ? errorMsg : ""}
                  </p>
                  <div className="form-control mt-6">
                    <button className="btn bg-primary hover:bg-primary border-none">
                      Register
                    </button>
                  </div>
                </form>
                <SocialLogin />
                <p>
                  Already have an account? Please{" "}
                  <Link className="text-green-700 font-bold" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
