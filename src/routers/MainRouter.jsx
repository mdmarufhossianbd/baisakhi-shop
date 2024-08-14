import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import NotFound from "../pages/errorPage/notFound";
import Home from "../pages/home/home";
import Register from "../pages/home/register";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
  ]);
export default router