import React, { useEffect, useState } from "react";
import Singleamount from "./Singleamount";

const Amount = () => {
  const [amounts, setamouts] = useState([]);
  useEffect(() => {
    fetch("https://assignment11-server-one.vercel.app/amount")
      .then((res) => res.json())
      .then((data) => setamouts(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center text-teal-800 mt-8 text-bold font-serif">
        LOOK FOR CONTACT
      </h1>
      ;
      <div className="grid gtid-cols-1 lg:grid-cols-2 gap-8 mt-24 ml-4 lg:ml-32 w-3/4 mb-8 ">
        {amounts.map((amount) => (
          <Singleamount amount={amount} key={amount._id}></Singleamount>
        ))}
      </div>
    </div>
  );
};

export default Amount;
