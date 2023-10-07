import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <p>error 404. Page not found</p>,
    children: [
      {
        path: "/",
        element: <p>home</p>,
      },
      {
        path: "/login",
        element: <p>login</p>,
      },
      {
        path: "/about",
        element: <p>about</p>,
      },
      {
        path: "/register",
        element: <p>register</p>,
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
