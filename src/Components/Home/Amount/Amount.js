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
    <div className="grid grid-cols-2 gap-8 mt-24 ">
      {amounts.map((amount) => (
        <Singleamount amount={amount} key={amount._id}></Singleamount>
      ))}
    </div>
  );
};

export default Amount;
