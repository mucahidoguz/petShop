import React from "react";
import "./cat.css";
import { Link } from "react-router-dom";
import Cat1 from "../06-Cat/cat1.jpg";
import Cat2 from "../06-Cat/cat2.jpg";
import Cat3 from "../06-Cat/cat3.jpg";
import Cat4 from "../06-Cat/cat4.jpg";
import Cat5 from "../06-Cat/cat5.jpg";
import Cat6 from "../06-Cat/cat6.jpg";
import Cat7 from "../06-Cat/cat7.jpg";
import Cat8 from "../06-Cat/cat8.jpg";
import Cat9 from "../06-Cat/cat9.jpg";
import Cat10 from "../06-Cat/cat10.jpg";

const cat = (props) => {

  return (
    <div className="App">
      <div className="container">
        <div className="card" style="width: 18rem;">
          <img src={Cat1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">American Curl</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Cat2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">American Shorthair</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Cat3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Asian</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Cat4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Bengal</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Cat5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">British Shorthair</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Cat6} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Khao Manee</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Cat7} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Ankara Kedisi</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Cat8} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Cymric</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Cat9} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Van Kedisi</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Cat10} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">İran Kedisi</h5>
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

export default cat;
