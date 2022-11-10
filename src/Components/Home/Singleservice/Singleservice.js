import React from "react";
import { Link } from "react-router-dom";

const Singleservice = ({ servic }) => {
  const { img, name, price, ratting, details } = servic;

  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{details.slice(0, 50)}</p>
          <div className="card-actions">
            {/* <button className="btn btn-primary">View Details</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleservice;
