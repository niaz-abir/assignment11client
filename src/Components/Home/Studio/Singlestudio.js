import React from "react";
import "./Singlesudio.css";

const Singlestudio = ({ studio }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl studio">
        <figure className="px-10 pt-10">
          <img src={studio.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Brance in {studio.brance}</h2>
          <p>Contact :{studio.contact}</p>
          <p>location :{studio.location}</p>
          <p>Open At :{studio.open}</p>
          <h2 className="text-2xl text-blue-500">You are cordially invited!</h2>
        </div>
      </div>
    </div>
  );
};

export default Singlestudio;
