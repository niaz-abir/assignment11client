import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Reviewcard from "../Reviewcard/Reviewcard";

const Allreview = () => {
  //   const allreview = useLoaderData([]);
  //   console.log(allreview);
  const [allreview, setallreview] = useState([]);
  useEffect(() => {
    fetch("https://assignment11-server-one.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setallreview(data));
  }, []);
  return (
    <div>
      <h1 className=" text-center text-2xl font-mono mb-8 text-pink-400">
        Your Review is here
      </h1>
      <div>
        {allreview.map((review) => (
          <Reviewcard review={review} key={review._id}></Reviewcard>
        ))}
      </div>
    </div>
  );
};

export default Allreview;
