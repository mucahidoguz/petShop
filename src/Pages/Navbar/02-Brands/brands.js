import React, { useEffect } from "react";

import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import Brands from "../../../Components/Navbar/02-Brands/brands";

const brands = (props) => {
  useEffect(() => {
    document.title = "PetShop - Brands";
  }, []);
  return (
    <div className="App">
      <Header />
      <Brands />
      <Footer />
    </div>
  );
};

export default brands;
