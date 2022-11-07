import React, { useEffect, useState } from "react";
import Singleservice from "../Singleservice/Singleservice";

const Services = () => {
  const [services, setservices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3">
        {services.map((servic) => (
          <Singleservice servic={servic} key={servic._id}></Singleservice>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-primary">See All</button>
      </div>
    </div>
  );
};

export default Services;
