import react from "react";
import Logo from "../Footer/assets/lg.jpg";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="">
      <div className="row">
        <div align="center" className=" col-12 col-md">
          <img
            className="flogo "
            src={Logo}
            alt=""
            width="40"
            height="40"
          />
          <p className="signature">
            <span className="name"> Mücahid OĞUZ | &copy; 2022</span>
            <p className="mail"> mchdoguz@gmail.com</p>
          </p>
        </div>
        <div className="col-6 col-md">
          <div className="col-6 col-md">
            <h5>PETSHOP</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <Link
                  className="link-secondary text-decoration-none"
                  to="/hakkımızda"
                >
                  Hakkımızda
                </Link>
              </li>
              <li className="mb-1">
                <Link className="link-secondary text-decoration-none" to="/sss">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="link-secondary text-decoration-none"
                  to="/iletisim"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6 col-md">
          <h5>NELER VAR ?</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/dog">
                Köpekler
              </Link>
            </li>
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/cat">
                Kediler
              </Link>
            </li>
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/fish">
                Balıklar
              </Link>
            </li>
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/bird">
                Kuşlar
              </Link>
            </li>
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/bird">
                Araç ve Ekipmanlar
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>LİNKLER</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <a
                className="link-secondary text-decoration-none"
                href="https://petsurfer.com/blog/"
                target="_blank"
              >
                PetSurfer
              </a>
            </li>
            <li className="mb-1">
              <a
                className="link-secondary text-decoration-none"
                href="https://ankaravetrium.com/urunler"
                target="_blank"
              >
                Vetrium
              </a>
            </li>
            <li className="mb-1">
              <a
                className="link-secondary text-decoration-none"
                href="https://blog.petzzshop.com/"
                target="_blank"
              >
                PetzzShop
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
