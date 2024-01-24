import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import NavbarComponent from "../components/Navbar";


import Card from "react-bootstrap/Card";

function Description() {
  return (
    <>
    <NavbarComponent/>
      <div className="container containerCategory">
        <div className="row">
          <div className="col-3 izquierdaCategoria">
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
          <div className="col-9">
            <div className="row">
              <div className="col-8">
                <h2>Procesadores</h2>
              </div>
              <div className="col-4">
              
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex">
                
                <Card
                  style={{ width: "100rem", height: "20rem" }}
                  className="m-1"
                >
                  <Card.Img
                    variant="top"
                    src="/public/procesadores/PROCESADOR-INTEL-I5-12400F-SVIDEO-12VA-1700.jpg"
                    className="imgListCat"
                  />
                </Card>
                <div>
                  <h2>
                    Intel Core i5 10400f 2.9GHz 12MB LGA1200 10th Gen US$147.50
                    DISPONIBILIDAD: MÁS DE 5 DISPONIBLES SKU: BX8070110400F
                    CATEGORÍAS: PROCESADORES, PROCESADORES INTEL
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Whatsapp/>
        <Footer/>
    </>
  );
}

export default Description;