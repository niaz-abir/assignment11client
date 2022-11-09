import { createBrowserRouter } from "react-router-dom";
import Addservice from "../../Components/Addservice/Addservice";
import Allreview from "../../Components/Allreview/Allreview";
import Blog from "../../Components/Blog/Blog";
import Edite from "../../Components/Edit/Edite";
import Allservice from "../../Components/Home/Allservice/Allservice";
import Amount from "../../Components/Home/Amount/Amount";
import Home from "../../Components/Home/Home/Home";
import Services from "../../Components/Home/Services/Services";
import Studio from "../../Components/Home/Studio/Studio";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Reviews from "../../Components/Reviews/Reviews";
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
      { path: "/amount", element: <Amount></Amount> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/studio", element: <Studio></Studio> },
      { path: "/addservice", element: <Addservice></Addservice> },

      {
        path: "/servicedetails/:id",
        element: <Servicedetails></Servicedetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment11-server-one.vercel.app/services/${params.id}`
          ),
      },
      { path: "/reviews", element: <Reviews></Reviews> },
      {
        path: "/allreview",
        element: <Allreview></Allreview>,
        // loader: fetch("https://assignment11-server-one.vercel.app/reviews"),
      },
      {
        path: "/edit/:id",
        element: <Edite></Edite>,
        loader: ({ params }) =>
          fetch(
            `https://assignment11-server-one.vercel.app/reviews/${params.id}`
          ),
      },
    ],
  },
]);
