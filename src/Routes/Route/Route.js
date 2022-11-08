import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import Allservice from "../../Components/Home/Allservice/Allservice";
import Home from "../../Components/Home/Home/Home";
import Services from "../../Components/Home/Services/Services";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Servicedetails from "../../Components/Servicedetails/Servicedetails";

import Main from "../../layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/services", element: <Services></Services> },
      { path: "/allservice", element: <Allservice></Allservice> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },

      {
        path: "/servicedetails/:id",
        element: <Servicedetails></Servicedetails>,
      },
    ],
  },
]);
