import React, { useEffect, useState } from "react";

const Reviews = ({ _id }) => {
  const handlereview = (event) => {
    event.preventDefault();
    const form = event.target;
    const names = form.name.value;
    const rating = form.rating.value;
    const message = form.message.value;
    console.log(names, rating, message);

    const order = {
      service: _id,
      customer: names,
      rating,
      message,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div>
      <div className="hero  ">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handlereview} className="card-body">
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
                  <span className="label-text">img</span>
                </label>
                <input
                  type="img"
                  placeholder="img"
                  //   defaultValue={user?.photoURL}
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

export default Reviews;