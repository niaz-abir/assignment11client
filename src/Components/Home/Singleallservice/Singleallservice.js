import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Singleallservice = ({ singleservic }) => {
  const { _id, img, name, details } = singleservic;
  return (
    <div>
      <PhotoProvider>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <PhotoView src={img}>
              <img src={img} alt="Shoes" className="rounded-xl" />
            </PhotoView>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{details.slice(0, 50)}</p>
            <div className="card-actions">
              <Link to={`/servicedetails/${_id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Singleallservice;
