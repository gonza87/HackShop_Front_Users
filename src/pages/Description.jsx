import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import NavbarComponent from "../components/Navbar";
import AddToCart from "../components/AddToCart";
import Card from "react-bootstrap/Card";
import './description.css';

function Description() {
  return (
    <>
      <NavbarComponent />
      <div className="container-fluid containerCategory">
        <div className="row">
          <div className="col-md-3 izquierdaCategoria">
            <p className="fs-5">CATEGORÍAS DE PRODUCTOS</p>
            <a href="">
              <p>GPU</p>
            </a>
            <a href="">
              <p>CPU</p>
            </a>
            <a href="">
              <p>MONITORES</p>
            </a>
            <a href="">
              <p>PC ARMADAS</p>
            </a>
            <a href="">
              <p>NOTEBOOKS</p>
            </a>
            <a href="">
              <p>SILLAS GAMER</p>
            </a>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-8">
                <h2 className="display-4">Procesadores</h2>
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex">
                <Card style={{ width: "20rem", height: "20rem" }} className="m-1">
                  <Card.Img
                    variant="top"
                    src="/public/procesadores/PROCESADOR-INTEL-I5-12400F-SVIDEO-12VA-1700.jpg"
                    className="imgListCat img-fluid"
                  />
                </Card>
                <div className="description">
                  <h2 className="display-4">Intel Core i5 12400 Alder Lake 1700</h2>
                  <span className="price">
                    <h5  style={{ color: '#ff6200', fontSize: '1.2rem' }}>US$259.99</h5>
                  </span>
                  <br />
                  <span>DISPONIBILIDAD: 2 DISPONIBLES</span>
                  <br />
                  <span>SKU: BX8071512400</span>
                  <br />
                  <span>CATEGORÍAS: PROCESADORES, PROCESADORES INTEL</span>
                  <br />
                  <hr />
                  <AddToCart />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Description;
