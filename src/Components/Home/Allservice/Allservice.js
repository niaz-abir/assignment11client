import React, { useEffect, useState } from "react";

const Allservice = () => {
  const [allservic, setallservic] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Abir</h1>
    </div>
  );
};

export default Allservice;
