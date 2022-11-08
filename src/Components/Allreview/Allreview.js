import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Reviewcard from "../Reviewcard/Reviewcard";

const Allreview = () => {
  //   const allreview = useLoaderData([]);
  //   console.log(allreview);
  const [allreview, setallreview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setallreview(data));
  }, []);
  return (
    <div>
      {allreview.map((review) => (
        <Reviewcard review={review} key={review._id}></Reviewcard>
      ))}
    </div>
  );
};

export default Allreview;
