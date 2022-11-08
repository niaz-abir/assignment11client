import React from "react";

const Reviewcard = ({ review }) => {
  return (
    <div className="flex justify-center">
      <div className="card w-80 gap-4 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{review.customer}</h2>
          <p>{review.rating}</p>
          <p>{review.message}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline">edit</button>
            <button className="btn btn-outline">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewcard;
