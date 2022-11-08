import React, { useContext, useEffect, useState } from "react";
import { json, useLoaderData } from "react-router-dom";
import { Authcontext } from "../Context/Authprovide";
import Reviews from "../Reviews/Reviews";

const Servicedetails = () => {
  const { user } = useContext(Authcontext);
  const { _id, name, details } = useLoaderData();

  return (
    <div className="grid grid-cols-2 ml-8 mt-16">
      <div className="details  w-3/4 mt-16 ml-16">
        <h1 className="text-4xl">{name}</h1>
        <p className="text-2xl mt-4">Details:{details} </p>
      </div>

      <div>
        <div>
          <Reviews _id={_id}></Reviews>
        </div>
      </div>
    </div>
  );
};

export default Servicedetails;
