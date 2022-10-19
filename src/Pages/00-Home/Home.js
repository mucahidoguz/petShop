import React, {useEffect} from "react";
import './Home.css'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Main from "../../Components/Main/Main";

const Home = (props) => {
  useEffect(() => {
    document.title = "PetShop";
  }, []);
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};


export default Home;
