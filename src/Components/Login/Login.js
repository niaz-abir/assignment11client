import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Context/Authprovide";

const Login = () => {
  const { login } = useContext(Authcontext);
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
      .then((err) => console.log(err));
  };
  return (
    <div className="flex ju justify-center w-3/4  mt-6 ">
      <div className="w-3/4">
        <form onSubmit={handlelogin} className="card-body">
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
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
