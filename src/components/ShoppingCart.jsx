import { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import AddToCart from "./AddToCart";
import { BsXCircle } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import React from "react";
import {
  addToCart,
  decrementarCantidad,
  eliminarProducto,
} from "../redux/carritoReducer";
import { setUser } from "../redux/userReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./ShoppingCart.css";

function ShoppingCart() {
  const navigate = useNavigate();
  //const imgUrl = "http://localhost:3000/img/";
  const imgUrl = import.meta.env.VITE_BUCKET_URL;

  const carrito = useSelector((state) => state.carrito);
  const token = useSelector((state) => state.user);
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
    dispatch(addToCart(product));
  };

  const calcularTotal = () => {
    return carrito.reduce(
      (total, product) => total + product.price * product.cantidad,
      0
    );
  };

  const handleCompra = () => {
    if (token !== null) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
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
            <div
              style={{
                display: carrito.length === 0 ? "block" : "none",
                textAlign: "center",
              }}
            >
              <img
                className="gifCarrito"
                src="gifCarrito/icons8-comprar.gif"
                alt="Carrito Vacío GIF"
              />
              {carrito.length === 0 && (
                <h4 className="carritoVAcio">Carrito Vacío</h4>
              )}
            </div>

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
                    <span className="precioItem">
                      U$S {product.price * product.cantidad}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {carrito.length !== 0 && (
            <div className="row">
              <div className="col-9 d-flex align-items-center pt-3">
                {" "}
                <p className="textresumencarro">
                  Total <span>U$S {calcularTotal()}</span>
                </p>
              </div>
              <div className="col-3 d-flex align-items-center">
                <Button
                  onClick={handleCompra}
                  className="btnCompraCarrito"
                  style={{ background: "#09072c", color: "#ffffff" }}
                >
                  Comprar
                </Button>
              </div>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ShoppingCart;
