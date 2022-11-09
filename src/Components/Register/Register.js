import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Authcontext } from "../Context/Authprovide";

const Register = () => {
  const { createuser, googlesignin } = useContext(Authcontext);
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
  );
};

export default Register;
