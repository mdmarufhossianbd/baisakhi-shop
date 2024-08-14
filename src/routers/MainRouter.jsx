import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import NotFound from "../pages/errorPage/notFound";
import Home from "../pages/home/home";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);
export default router