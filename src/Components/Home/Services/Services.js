import React, { useEffect, useState } from "react";
import Singleservice from "../Singleservice/Singleservice";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setservices] = useState([]);

  useEffect(() => {
    fetch("https://assignment11-server-one.vercel.app/services?limit=3")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 ml ml-20 mb-8 mt-8  ">
        {services.map((servic) => (
          <Singleservice servic={servic} key={servic._id}></Singleservice>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/allservice">
          <button className="btn bg-purple-500 hover:bg-pink-500 border-0">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
