import React from "react";
import Amount from "../Amount/Amount";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Singleservice from "../Singleservice/Singleservice";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Amount></Amount>
    </div>
  );
};

export default Home;
