import React, { useEffect } from "react";


import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import Fish from "../../../Components/FootBand/07-Fish/fish";

const fish = (props) => {
  useEffect(() => {
    document.title = "PetShop - Fishes";
  }, []);
  return (
    <div className="App">
      <Header />
      <Fish />
      <Footer />
    </div>
  );
};

export default fish;
