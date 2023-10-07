import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUser } = useContext(AuthContext);
  const formRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;
    loginUser(email, password)
      .then(() => {
        toast.success("Succesfully Logged In!", {
          autoClose: 2000,
        });
        setTimeout(
          () => navigate(location?.state ? location.state : "/"),
          3000
        );
      })
      .catch((error) => setErrorMsg(error.message));
    formRef.current.reset();
  };
  return (
    <>
      <div>
        <div className="hero min-h-[70vh]">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold font-primary">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm bg-[#ffcffd70] border">
              <div className="card-body">
                <form onSubmit={handleLogin} ref={formRef}>
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <p>{errorMsg}</p>
                  <div className="form-control mt-6">
                    <button className="btn border-none hover:bg-primary bg-primary">
                      Login
                    </button>
                  </div>
                </form>
                <SocialLogin />
                <p>
                  Dont have an account? Please{" "}
                  <Link className="text-blue-500 font-bold" to="/register">
                    register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
