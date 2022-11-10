import React, { useContext, useEffect, useState } from "react";
import { json, useLoaderData } from "react-router-dom";
import { Authcontext } from "../Context/Authprovide";
import Reviews from "../Reviews/Reviews";

const Servicedetails = () => {
  const { user } = useContext(Authcontext);
  const { _id, name, details, img } = useLoaderData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ml-8 mt-16">
      <div className="details  w-3/4 mt-16 ml-16">
        <img className=" w-40 rounded-lg" src={img} alt=""></img>
        <h1 className="text-4xl font-mono underline decoration-dotted p-4">
          {name}
        </h1>
        <p className="text-1xl mt-4">Details:{details} </p>
      </div>

      <div>
        <div className="mt-4">
          <Reviews _id={_id}></Reviews>
        </div>
      </div>
    </div>
  );
};

export default Servicedetails;
