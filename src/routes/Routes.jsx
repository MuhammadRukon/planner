import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <p>error 404. Page not found</p>,
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
        path: "/about",
        element: <p>about</p>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/details/:id",
        element: <h1>details</h1>,
      },
      {
        path: "/blog",
        element: <p>blog</p>,
      },
      {
        path: "/book",
        element: <p>book</p>,
      },
      {
        path: "/plans",
        element: <p>plans</p>,
      },
      {
        path: "/contact",
        element: <p>contact</p>,
      },
      {
        path: "/services",
        element: <p>services</p>,
      },
    ],
  },
]);
