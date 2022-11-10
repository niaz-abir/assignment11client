import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Context/Authprovide";
import ClipLoader from "react-spinners/ClipLoader";
import FadeLoader from "react-spinners/FadeLoader";
import useTitle from "../../hooks/usetitle";

const Login = () => {
  const { login } = useContext(Authcontext);
  const [error, seterror] = useState();
  const [loading, setloaing] = useState(false);
  useTitle("login");

  useEffect(() => {
    setloaing(true);
    setTimeout(() => {
      setloaing(false);
    }, 1000);
  }, []);

  const handlelogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        seterror(" Your passord is not correct!");
      });
  };
  return (
    <div>
      {loading ? (
        <FadeLoader
          color={"#f4acb7"}
          loading={loading}
          className="flex  mx-auto"
          size={60}
        ></FadeLoader>
      ) : (
        <div className="flex mx-auto justify-center w-3/5  mt-6 ">
          <div className="w-3/4">
            <form onSubmit={handlelogin} className="card-body">
              <p className=" text-red-700">{error}</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    New to <Link to="/register">Register</Link>
                  </a>
                </label>
              </div>
              <div className="form-control mt-6  w-2/4 flex mx-auto">
                <button className="btn bg-purple-500 hover:bg-pink-500 border-0">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
