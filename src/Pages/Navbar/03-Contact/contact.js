import React, { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import Contact from "../../../Components/Navbar/03-Contact/contact";

const contact = (props) => {
  useEffect(() => {
    document.title = "PetShop - Contact";
  }, []);

  return (
    <div className="App">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

export default contact;
