import react from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import Logo from "./lg.jpg";

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} ></img>
      </div>
      <div class="">
        <Link className="menu" to="/">
          | ANA SAYFA
        </Link>
        <Link className="menu" to="/hakkımızda">
          | HAKKIMIZDA
        </Link>
        <Link className="menu" to="/markalar">
          | MARKALAR
        </Link>
        <Link className="menu" to="/iletisim">
          | İLETİŞİM
        </Link>
      </div>
      <div className="icon ">
        <button type="button" 
        className="btn btn-primary mx-1">
          GİRİŞ YAP
        </button>
        <button type="button" 
        className="btn btn-success mx-2">
          SEPETE GİT
        </button>
      </div>
    </header>
  );
};

export default Header;
