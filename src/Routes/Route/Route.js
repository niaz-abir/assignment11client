import { createBrowserRouter } from "react-router-dom";
import Allreview from "../../Components/Allreview/Allreview";
import Blog from "../../Components/Blog/Blog";
import Allservice from "../../Components/Home/Allservice/Allservice";
import Amount from "../../Components/Home/Amount/Amount";
import Home from "../../Components/Home/Home/Home";
import Services from "../../Components/Home/Services/Services";
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

      {
        path: "/servicedetails/:id",
        element: <Servicedetails></Servicedetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      { path: "/reviews", element: <Reviews></Reviews> },
      {
        path: "/allreview",
        element: <Allreview></Allreview>,
        // loader: fetch("http://localhost:5000/reviews"),
      },
    ],
  },
]);
