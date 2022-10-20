import React, { useEffect } from "react";


import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import Dog from "../../../Components/FootBand/05-Dog/dog";

const dog = (props) => {
  useEffect(() => {
    document.title = "PetShop - Dogs";
  }, []);

  return (
    <div className="">
      <Header />
      <Dog />
      <Footer />
    </div>
  );
};

export default dog;
