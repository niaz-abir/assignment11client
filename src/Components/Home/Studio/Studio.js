import React, { useEffect, useState } from "react";
import Singlestudio from "./Singlestudio";

const Studio = () => {
  const [studios, setstudios] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/studio")
      .then((res) => res.json())
      .then((data) => setstudios(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl">Our Studio</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ml:4 lg:ml-24">
        {studios.map((studio) => (
          <Singlestudio studio={studio} key={studio._id}></Singlestudio>
        ))}
      </div>
    </div>
  );
};

export default Studio;
