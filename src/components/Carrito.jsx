import { useState } from "react";
import { ListGroup, Button  } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import AddToCart from "../components/AddToCart";
import { BsXCircle } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import './carrito.css';

import Card from "react-bootstrap/Card";
function Carrito() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FontAwesomeIcon
        className=""
        icon={faShoppingCart}
        style={{ cursor: "pointer" }}
        onClick={handleShow}
      />

      <Offcanvas className="contenedorCarrito" show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header  className="cabeceraCarrito">
           <Offcanvas.Title>Mi Carrito</Offcanvas.Title> 
           <BsXCircle style={{ fontSize: '1.5rem', cursor: 'pointer', color:"#ffffff"}} onClick={handleClose} />

        </Offcanvas.Header>
        
        <Offcanvas.Body>
          <div className="d-flex align-items-center">
            <img className="imgCarrito" src="public/procesadores/PROCESADOR-INTEL-I5-12400F-SVIDEO-12VA-1700.jpg" 
            alt="" />
            <p className="testTituloItem">Procesador core I5</p>
            <IoMdAdd style={{ fontSize: '1.5rem', cursor: 'pointer', color:"#09072c", marginLeft:"50px"}} />
            <span className="cantporItem">5</span>
            <RiSubtractLine style={{ fontSize: '1.5rem', cursor: 'pointer', color:"#09072c"}} />
            <span className="precioItem">USD 150</span>
          </div>
          <div className="d-flex align-items-center">
            <img className="imgCarrito" src="public/procesadores/PROCESADOR-INTEL-I5-12400F-SVIDEO-12VA-1700.jpg" 
            alt="" />
            <p className="testTituloItem">Procesador core I5</p>
            <IoMdAdd style={{ fontSize: '1.5rem', cursor: 'pointer', color:"#09072c", marginLeft:"50px"}} />
            <span className="cantporItem">5</span>
            <RiSubtractLine style={{ fontSize: '1.5rem', cursor: 'pointer', color:"#09072c"}} />
            <span className="precioItem">USD 150</span>
          </div>

          <div className="d-flex align-items-center mt-2">
            <p className="textresumencarro">Total <span>USD 235</span></p>
            <Button className="btnCompraCarrito" style={{background: "#09072c", color: "#ffffff"}}>Comprar</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Carrito;