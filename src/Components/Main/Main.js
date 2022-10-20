import React from "react";
import { Link } from "react-router-dom";

import "./Main.css";
import Fish from "./assets/fish0.jpg";
import Dog from "./assets/dogs1.jpg";
import Cat from "./assets/cats1.jpg";
import Bird from "./assets/bird.jpg";
import Other from "./assets/others1.jpg";

const Main = (props) => {
  return (
    <div className="content">
      <div className="img">
        <img src={Dog} width="100%" height="100%" alt="" />
        <div className="text">
          <div>
            <h2>KÖPEKLER</h2>
         <Link className="text-decoration-none" to={"/dog"}>İncele</Link>
          </div>
        </div>
      </div>
      <div className="img">
        <img src={Cat} width="100%" height="100%" alt="" />
        <div className="text">
          <div>
            <h2>KEDİLER</h2>
            <Link className="text-decoration-none" to={"/cat"}>İncele</Link>
          </div>
        </div>
      </div>
      <div className="img">
        <img src={Fish} width="100%" height="100%" alt="" />
        <div className="text">
          <div>
            <h2>BALIKLAR</h2>
            <Link className="text-decoration-none" to={"/fish"}>İncele</Link>
          </div>
        </div>
      </div>
      <div className="img">
        <img src={Bird} width="100%" height="100%" alt="" />
        <div className="text">
          <div>
            <h2>KUŞLAR</h2>
            <Link className="text-decoration-none" to={"/bird"}>İncele</Link>
          </div>
        </div>
      </div>
      <div className="img">
        <img src={Other} width="100%" height="100%" alt="" />
        <div className="text">
          <div>
            <h2>DİĞER ÜRÜNLERİMİZ</h2>
            <Link className="text-decoration-none" to={"/others"}>İncele</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
