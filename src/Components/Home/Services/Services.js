import React, { useEffect, useState } from "react";
import Singleservice from "../Singleservice/Singleservice";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setservices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services?limit=3")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {services.map((servic) => (
          <Singleservice servic={servic} key={servic._id}></Singleservice>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/allservice">
          <button className="btn btn-primary">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
