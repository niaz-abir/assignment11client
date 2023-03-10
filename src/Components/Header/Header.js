import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Context/Authprovide";
import "./navbar.css";

const Header = () => {
  const { logout, user } = useContext(Authcontext);

  const handlelogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar h-32 ml-6 mr-6 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link
                className="mr-4 text-semibold text text-teal-800"
                to="/blog"
              >
                Blog
              </Link>
              {user ? (
                <>
                  <Link
                    className="mr-4 text-semibold text text-teal-800"
                    to="/allreview"
                  >
                    MyReview
                  </Link>
                  <Link
                    className="mr-4 text-semibold text text-teal-800"
                    to="/addservice"
                  >
                    AddService
                  </Link>
                  <Link
                    className="mr-4 text-semibold text text-teal-800"
                    onClick={handlelogout}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="mr-4 text-semibold text text-teal-800"
                    to="/login"
                  >
                    login
                  </Link>
                  <Link
                    className="mr-4 text-semibold text text-teal-800"
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className=" text-amber-900 font-bold text-2xl">
            Artsy Lens
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <Link className="mr-4 text-semibold text text-teal-800 " to="/blog">
              Blog
            </Link>

            {user ? (
              <>
                <Link
                  className="mr-4 text-semibold text text-teal-800"
                  to="/allreview"
                >
                  MyReview
                </Link>
                <Link
                  className="mr-4 text-semibold text text-teal-800"
                  to="/addservice"
                >
                  AddService
                </Link>
                <button
                  className="mr-4 text-semibold text text-teal-800"
                  onClick={handlelogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  className="mr-4 text-semibold text text-teal-800"
                  to="/login"
                >
                  login
                </Link>
                <Link
                  className="mr-4 text-semibold text text-teal-800"
                  to="/register"
                >
                  Register
                </Link>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <a>...</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
