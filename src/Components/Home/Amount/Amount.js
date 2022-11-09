import React, { useEffect, useState } from "react";
import Singleamount from "./Singleamount";

const Amount = () => {
  const [amounts, setamouts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/amount")
      .then((res) => res.json())
      .then((data) => setamouts(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center mt-8">Our Photography Details</h1>;
      <div className="grid gtid-cols-1 lg:grid-cols-2 gap-8 mt-24 ml-4 lg:ml-28 w-3/4 mb-8 ">
        {amounts.map((amount) => (
          <Singleamount amount={amount} key={amount._id}></Singleamount>
        ))}
      </div>
    </div>
  );
};

export default Amount;
