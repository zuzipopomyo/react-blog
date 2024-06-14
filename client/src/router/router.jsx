import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Settings from "../pages/setting/Settings";
import Write from "../pages/write/Write";
import Single from "../pages/single/Single";
import App from "../App";
import { Context } from "../components/context/Context";

const AuthRoutes = () => {
  const { user } = useContext(Context);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />, // App component as the layout
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: user ? <Home /> : <Register />,
        },
        {
          path: "/login",
          element: user ? <Home /> : <Login />,
        },
        {
          path: "/settings",
          element: user ? <Settings /> : <Register />,
        },
        {
          path: "/write",
          element: user ? <Write /> : <Register />,
        },
        {
          path: "/post/:postId",
          element: <Single />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AuthRoutes;
