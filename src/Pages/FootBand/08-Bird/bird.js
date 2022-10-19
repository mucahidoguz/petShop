import React, { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import Bird from "../../../Components/FootBand/08-Bird/bird";

const bird = (props) => {
  useEffect(() => {
    document.title = "PetShop - Birds";
  }, []);
  return (
    <div className="App">
      <Header />
      <Bird />
      <Footer />
    </div>
  );
};

export default bird;
