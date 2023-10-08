import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import Services from "../components/Services";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/error/ErrorPage";
import Profile from "../pages/profile/Profile";
import Blogs from "../pages/blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("/blog.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);
