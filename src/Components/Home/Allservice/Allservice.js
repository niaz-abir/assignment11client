import React, { useEffect, useState } from "react";
import Singleallservice from "../Singleallservice/Singleallservice";
import Singleservice from "../Singleservice/Singleservice";

const Allservice = () => {
  const [allservic, setallservic] = useState([]);

  useEffect(() => {
    fetch("https://assignment11-server-one.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setallservic(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {allservic.map((singleservic) => (
          <Singleallservice
            singleservic={singleservic}
            key={singleservic._id}
          ></Singleallservice>
        ))}
      </div>
    </div>
  );
};

export default Allservice;
