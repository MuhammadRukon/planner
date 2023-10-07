import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  //   const { signInUser } = useContext(AuthContext);
  //   const location = useLocation();
  //   console.log(location);
  //   const navigate = useNavigate();
  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     // const email = e.target.email.value;
  //     // const password = e.target.password.value;

  //     const form = new FormData(e.currentTarget);
  //     const email = form.get("email");
  //     const password = form.get("password");
  //     signInUser(email, password)
  //       .then(() => navigate(location?.state ? location.state : "/"))
  //       .catch((error) => console.log(error.message));
  //   };
  return (
    <>
      <Navbar />
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
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
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
                <p>
                  Already have an account? Please{" "}
                  <Link className="text-green-700" to="/register">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
