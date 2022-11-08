import { createBrowserRouter } from "react-router-dom";
import Allservice from "../../Components/Home/Allservice/Allservice";
import Home from "../../Components/Home/Home/Home";
import Services from "../../Components/Home/Services/Services";

import Main from "../../layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/services", element: <Services></Services> },
      { path: "/allservice", element: <Allservice></Allservice> },
    ],
  },
]);
