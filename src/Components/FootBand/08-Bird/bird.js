import React from "react";
import "./bird.css";
import { Link } from "react-router-dom";
import Bird1 from "../08-Bird/bird1.jpg";
import Bird2 from "../08-Bird/bird2.jpg";
import Bird3 from "../08-Bird/bird3.jpg";
import Bird4 from "../08-Bird/bird4.jpg";
import Bird5 from "../08-Bird/bird5.jpg";
import Bird6 from "../08-Bird/bird6.jpg";
import Bird7 from "../08-Bird/bird7.jpg";
import Bird8 from "../08-Bird/bird8.jpg";
import Bird9 from "../08-Bird/bird9.jpg";

const bird = (props) => {
 
  return (
    <div className="App">
      <div className="container">
        <div className="card" style="width: 18rem;">
          <img src={Bird1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Cennet Papağanı</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Bird2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Muhabbet Kuşu</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Bird3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Forpus Papağanı</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Bird4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Macaw Papağanı</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Bird5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kanarya</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Bird6} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Gloster Kanarya</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Bird7} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Albino Muhabbet Kuşu</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Bird8} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Iskender Papağanı</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Bird9} className="card-img-top" alt="..." />
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

export default bird;
