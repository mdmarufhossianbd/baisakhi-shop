import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import NotFound from "../pages/errorPage/notFound";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <PrivateRoute><Home></Home></PrivateRoute>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
      ]
    },
  ]);
export default router