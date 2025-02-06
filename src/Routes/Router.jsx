import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import ContactPage from "../Pages/ContactPage/ContactPage";
import Body from "../Pages/Home/Body/Body";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            children: [
              {
                path: '/',
                element: <Body></Body>
              }
            ]
        },
        {
          path: '/contact',
          element: <ContactPage></ContactPage>
        }
      ]
    },
  ]);

  export default router;