import { createBrowserRouter } from "react-router-dom";
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
    ],
  },
]);
