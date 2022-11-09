import React, { useEffect, useState } from "react";
import Singlestudio from "./Singlestudio";

const Studio = () => {
  const [studios, setstudios] = useState([]);
  useEffect(() => {
    fetch("https://assignment11-server-one.vercel.app/studio")
      .then((res) => res.json())
      .then((data) => setstudios(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl font-serif  mt-16 mb-4 text-teal-800">
        Our Studio
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ml:4 lg:ml-24">
        {studios.map((studio) => (
          <Singlestudio studio={studio} key={studio._id}></Singlestudio>
        ))}
      </div>
    </div>
  );
};

export default Studio;
