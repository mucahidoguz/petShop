import React from "react";
import "./dog.css";
import { Link } from "react-router-dom";
import Dog1 from "../05-Dog/dog1.jpg";
import Dog2 from "../05-Dog/dog2.jpg";
import Dog3 from "../05-Dog/dog3.jpg";
import Dog4 from "../05-Dog/dog4.jpg";
import Dog5 from "../05-Dog/dog5.jpg";
import Dog6 from "../05-Dog/dog6.jpg";
import Dog7 from "../05-Dog/dog7.jpg";
import Dog8 from "../05-Dog/dog8.jpg";
import Dog9 from "../05-Dog/dog9.jpg";

const dog = (props) => {

  return (
    <div className="">
      <div className="container">
        <div className="card" style="width: 18rem;">
          <img src={Dog1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Australian Silky Terrier</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Dog1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Bolonez</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Dog2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Chihuahua</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Dog3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Japanese Chin</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Dog4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Maltese Terrier</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Dog5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Maltese Terrier</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Dog6} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Papillon</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Dog7} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Yorkshire Terrier</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Dog8} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Pomeranian</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
          <img src={Dog9} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Bichon Frise</h5>
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

export default dog;
