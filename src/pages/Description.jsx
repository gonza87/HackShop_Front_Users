import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import NavbarComponent from "../components/Navbar";
import AddToCart from "../components/AddToCart";
import Card from "react-bootstrap/Card";
//import NavbarAside from "../components/NavbarAside";


import "./description.css";

function Description() {
  return (
    <>
      <NavbarComponent/>
      <div className="container containerCategory">
        
        <div className="row">
          <div className="col-12">
            <h2>Procesadores</h2>
            {/* <NavbarAside /> */}
          </div>
          <div className="col-8">
            <Card style={{ width: "20rem", height: "18rem" }} className="m-1">
              <Card.Img
                variant="top"
                src="/public/procesadores/PROCESADOR-INTEL-I5-12400F-SVIDEO-12VA-1700.jpg"
                className="imgListCat img-fluid"
              />
            </Card> 
            <div className="description">
              <h2>Intel Core i5 12400 Alder Lake 1700</h2>
              <span className="price">
                <h5 style={{ color: "#ff6200", fontSize: "1.2rem" }}>
                  US$259.99
                </h5>
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
          
          <div className="col-12 col-md-4">
            <div className="caracteristicas">
              <p>Especificaciones de la CPU</p>

              <p>Cantidad de núcleos 6</p>

              <p># of Performance-cores 6</p>

              <p>Cantidad de subprocesos 12</p>

              <p>Total L2 Cache 7.5 MB</p>

              <p>Processor Base Power 65 W</p>

              <p>Maximum Turbo Power 117 W</p>

              <p>LINK</p>
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
