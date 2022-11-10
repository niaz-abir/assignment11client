import React, { useState } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";

const Edite = () => {
  const storeuser = useLoaderData();
  const navigate = useNavigate();

  //   const [user, setuser] = useState(storeuser);

  const handleedit = (event) => {
    event.preventDefault();

    const form = event.target;
    const names = form.name.value;
    const rating = form.rating.value;
    const message = form.message.value;
    form.reset();
    navigate(-1);

    // console.log(names, rating, message);

    const newreview = {
      names,
      rating,
      message,
    };

    fetch(
      `https://assignment11-server-one.vercel.app/reviews/${storeuser._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newreview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      {/* <h1>Edit:{storeuser.customer}</h1> */}

      <div className="hero  ">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            {/* <img src={user?.photoURL} alt=""></img> */}
            <form onSubmit={handleedit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  defaultValue={storeuser.customer}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">rating</span>
                </label>
                <input
                  type="text"
                  placeholder="rating"
                  name="rating"
                  defaultValue={storeuser.rating}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Complement</span>
                </label>
                <textarea
                  className="textarea textarea-black"
                  placeholder="..."
                  name="message"
                  defaultValue={storeuser.message}
                ></textarea>
              </div>
              <button className="btn btn-primary">submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edite;
