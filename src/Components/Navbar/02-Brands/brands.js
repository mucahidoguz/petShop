import React from "react";
import { Link } from "react-router-dom";

import "./brands.css";
import Brands1 from "../02-Brands/assets/1.webp";
import Brands2 from "../02-Brands/assets/2.webp";
import Brands3 from "../02-Brands/assets/3.webp";
import Brands4 from "../02-Brands/assets/4.webp";
import Brands5 from "../02-Brands/assets/5.webp";
import Brands6 from "../02-Brands/assets/6.webp";
import Brands7 from "../02-Brands/assets/7.webp";
import Brands8 from "../02-Brands/assets/8.webp";
import Brands9 from "../02-Brands/assets/9.jpg";

const brands = (props) => {

  return (
    <div className="App">
      <div className="container">
        <div className="card" style="width: 18rem;">
          <img src={Brands1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Cennet Papağanı</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Brands2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Muhabbet Kuşu</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Brands3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Forpus Papağanı</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Brands4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Macaw Papağanı</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Brands5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kanarya</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Brands6} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Gloster Kanarya</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Brands7} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Albino Muhabbet Kuşu</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Brands8} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Iskender Papağanı</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Brands9} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Jako Papağanı</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default brands;
