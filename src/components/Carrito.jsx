import { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import AddToCart from "../components/AddToCart";
import { BsXCircle } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import React from "react";
import { addToCart, decrementarCantidad, eliminarProducto } from "../redux/carritoReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import "./carrito.css";


function Carrito() {
  const imgUrl = "http://localhost:3000/img/";
  const carrito = useSelector((state) => state.carrito);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const decrementarCantidadHandler = (product) => {
    if (product.cantidad > 1) {
      dispatch(decrementarCantidad(product));
    } else {
      dispatch(eliminarProducto(product));
    }
  };
  const incrementarCantidadHandler = (product) => {
    dispatch(addToCart(product));  // Utiliza la acción addToCart para aumentar la cantidad
  };

  // Calcula el total sumando los precios de todos los productos en el carrito
  const calcularTotal = () => {
    return carrito.reduce((total, product) => total + product.price * product.cantidad, 0);
  };
  return (
    <>
      <FontAwesomeIcon
        className=""
        icon={faShoppingCart}
        style={{ cursor: "pointer" }}
        onClick={handleShow}
      />

      <Offcanvas
        className="contenedorCarrito"
        show={show}
        onHide={handleClose}
        placement="end"
      >
        <Offcanvas.Header className="cabeceraCarrito">
          <Offcanvas.Title>Mi Carrito</Offcanvas.Title>
          <BsXCircle
            style={{ fontSize: "1.5rem", cursor: "pointer", color: "#ffffff" }}
            onClick={handleClose}
          />
        </Offcanvas.Header>

        <Offcanvas.Body>
         

          <div className="row">
           {(carrito.length===0)&&(<p> Carrito Vacio</p>)}
            {carrito.map((product, index) => (
             
            <div className="col-12" key={index}>
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <img
                    className="imgCarrito"
                    src={`${imgUrl}${product.photo}`}
                    alt="img producto"
                  />
                  <p className="testTituloItem">{product.name} </p>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <IoMdAdd
                    style={{
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      color: "#09072c",
                      marginLeft: "50px",
                    }}
                    onClick={() => incrementarCantidadHandler(product)}
                  />
                  <span className="cantporItem">{product.cantidad}</span>
                  <RiSubtractLine
                    style={{
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      color: "#09072c",
                    }}
                    onClick={() => decrementarCantidadHandler(product)}
                  />
                </div>
                <div className="col-3 d-flex align-items-center">
                  <span className="precioItem">US${product.price * product.cantidad}</span>
                </div>
              </div>
            </div>
            ))} 
          </div>
          {(carrito.length !== 0)&&(
          <div className="row">
            <div className="col-9 d-flex align-items-center pt-3">  <p className="textresumencarro">
              Total <span>{calcularTotal()}</span>
            </p></div>
            <div className="col-3 d-flex align-items-center">
              <Button
              className="btnCompraCarrito"
              style={{ background: "#09072c", color: "#ffffff" }}
            >
              Comprar
            </Button></div>
          </div>
          )}
          {/* <div className="d-flex">
            <div className="row">
              <div className="col-12 d-flex-g">
                <div className="d-flex-g">
                 <p className="textresumencarro">
              Total <span>USD 235</span>
            </p>
            
            </div>
            </div>
            
              
            </div>
            
            
          </div> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Carrito;
