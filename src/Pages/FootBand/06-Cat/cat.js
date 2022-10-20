import React, { useEffect } from "react";


import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import Cat from "../../../Components/FootBand/06-Cat/cat";

const cat = (props) => {
  useEffect(() => {
    document.title = "PetShop - Cats";
  }, []);
  return (
    <div className="App">
      <Header />
      <Cat />
      <Footer />
    </div>
  );
};

export default cat;
