import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faSquareFacebook,
  faInstagram,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";

function Footer() {
  return (
    <>
      <div className="padding-footer">
        <img
          src="/public/gifCarrito/icons8-intercambio-de-tarjetas.gif"
          alt=""
          className="metodos"
        />
        <img
          src="/public/logosNavAside/Metodos_Tarjetas.png"
          alt=""
          className="metodos"
        />
        <footer className="footer-color py-4">
          <div className="container footer">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-empresa">
                  <h3>EMPRESA</h3>
                  <Link to="/about" className="a">
                    Sobre nosotros
                  </Link>
                  <a className="a" href="#">
                    Contacto
                  </a>
                  <a className="a" href="#">
                    Políticas de garantía
                  </a>
                  <a className="a" href="#">
                    Trabaja con nosotros
                  </a>
                  <a className="a" href="#">
                    Privacidad
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-impuestos">
                  <h3>IMPUESTOS</h3>
                  <p className="p">
                    Todos los precios están expresados en dólares americanos e
                    incluyen impuestos
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-imagenes">
                  <h3>IMÁGENES</h3>
                  <p className="p">
                    Las imágenes de los productos son meramente ilustrativas. Si
                    desea conocer detalles específicos de un producto, por
                    favor, póngase en contacto con nosotros.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-redes">
                  <h3>NUESTRAS REDES</h3>
                  <a href="#">
                    <FontAwesomeIcon
                      className="red-icon"
                      icon={faSquareFacebook}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon className="red-icon" icon={faInstagram} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon className="red-icon" icon={faXTwitter} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon className="red-iconT" icon={faTiktok} />
                  </a>
                </div>
                <div>
                  <h3 className="news">NEWSLETTER</h3>
                  <p>Suscribete para recibir novedades en tu e-mail</p>
                </div>
                <div>
                  <input
                    className="input"
                    type="email"
                    placeholder="Ingresa tu e-mail"
                  />
                  <button className="button" type="button">
                    Suscribirme
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <hr />
            <div className="HackShop2024">
              <p>HackShop 2024</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
