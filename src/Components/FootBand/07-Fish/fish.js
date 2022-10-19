import React from "react";
import './fish.css'
import { Link } from "react-router-dom";
import Fish1 from "../07-Fish/fish1.jpg";
import Fish2 from "../07-Fish/fish2.jpg";
import Fish3 from "../07-Fish/fish3.jpg";
import Fish4 from "../07-Fish/fish4.jpg";
import Fish5 from "../07-Fish/fish5.jpg";
import Fish6 from "../07-Fish/fish6.jpg";
import Fish7 from "../07-Fish/fish7.jpg";
import Fish8 from "../07-Fish/fish8.jpg";
import Fish9 from "../07-Fish/fish9.jpg";
import Fish10 from "../07-Fish/fish10.jpg"


const fish = (props) => {

  return (
    <div className="App">
      <div className="container">
        <div className="card" style="width: 18rem;">
          <img src={Fish1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">İmparator Ciklet</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
        <img src={Fish2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Iceman Ciklet</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
        <img src={Fish3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Demasoni Ciklet</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
        <img src={Fish4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Sarı Prenses</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
        <img src={Fish5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Jaguar Ciklet</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
        <img src={Fish6} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Midas Ciklet</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
        <img src={Fish7} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Japon Balığı</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
        <img src={Fish8} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kelebek Balığı</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
        <img src={Fish9} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Killifish</h5>
            <p className="card-text">Buraya fiyat bilgisi gelecek</p>
            <Link href="#" className="btn btn-primary">
              Sepete Ekle
            </Link>
          </div>
        </div>

        <div className="card" style="width: 18rem;">
        <img src={Fish10} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Green Terror Ciklet</h5>
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

export default fish;
