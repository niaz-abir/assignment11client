import React from "react";
import Amount from "../Amount/Amount";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Singleservice from "../Singleservice/Singleservice";
import Studio from "../Studio/Studio";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Amount></Amount>
      <Studio></Studio>
    </div>
  );
};

export default Home;
