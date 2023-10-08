import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("logged Out Successfully"))
      .catch((error) => console.log(error.message));
  };
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="container mx-auto navbar md:py-6 px-4 lg:px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="nabvar-ul border bg-white  z-10 leading-9 menu-sm dropdown-content mt-3  p-2 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <Link to="/" className="text-4xl font-logo font-bold">
          Planner
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="nabvar-ul menu-horizontal px-1 text-base gap-4">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <p className={` ${user?.displayName ? "uppercase font-bold" : ""}`}>
          {user ? user.displayName : "user"}
        </p>
        <div className="w-10 h-10 overflow-hidden bg-primary rounded-full">
          <img
            src={user?.photoURL || "/defaultUser.png"}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        {user ? (
          <Link
            className="btn h-10 min-h-[40px]  bg-primary font-primary border-none hover:bg-[#ffcffd70]"
            onClick={() => handleLogOut()}
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn h-10 min-h-[40px] bg-primary font-primary border-none hover:bg-[#ffcffd70]"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
