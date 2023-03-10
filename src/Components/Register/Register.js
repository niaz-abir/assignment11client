import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/Authprovide";
import FadeLoader from "react-spinners/FadeLoader";

const Register = () => {
  const { createuser, googlesignin } = useContext(Authcontext);
  const [loading, setloaing] = useState(false);
  useEffect(() => {
    setloaing(true);
    setTimeout(() => {
      setloaing(false);
    }, 1000);
  }, []);
  const navigate = useNavigate();
  const googleprovider = new GoogleAuthProvider();
  const handleregister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createuser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  const handlewithgoogle = () => {
    googlesignin(googleprovider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
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
        <div className="flex mx-auto justify-center w-1/2 lg:w-1/2">
          <div className="w-3/4">
            <form onSubmit={handleregister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 w-2/4 gap-4 flex mx-auto">
                <button className="btn bg-purple-500 hover:bg-pink-500 border-0">
                  Submit
                </button>
                <button
                  onClick={handlewithgoogle}
                  className="btn bg-purple-500 hover:bg-pink-500 border-0"
                >
                  Signwith google
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
