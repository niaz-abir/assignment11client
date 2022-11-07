const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../Components/Home/Home");
const { default: Main } = require("../../layout/Main");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{ path: "/", element: <Home></Home> }],
  },
]);
