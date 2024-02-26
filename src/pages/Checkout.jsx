import React, { useState, useEffect } from "react";
import NavbarComponent from "../components/Navbar";
import Whatsapp from "../components/Whatsapp";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetearCarrito } from "../redux/carritoReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import "./checkout.css";

function Checkout() {
  const imgUrl = "http://localhost:3000/img/";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carrito = useSelector((state) => state.carrito);
  const token = useSelector((state) => state.user);
  console.log(carrito);
  console.log(token.userid);
  console.log(token.token);

  const [email, setEmail] = useState("");
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    stateProvince: "",
    postalCode: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => {
      return total + producto.price * producto.cantidad;
    }, 0);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleConfirmOrder = () => {
    if (!paymentMethod) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, selecciona un método de pago antes de confirmar la orden.",
      });
      return;
    }
    console.log("va axios");
    const apiUrl = "http://localhost:3000/orders";
    const config = {
      headers: {
        Authorization: `Bearer ${token.token}`,
        "Content-Type": "application/json",
      },
    };

    const checkoutData = {
      userid: token.userid,
      carrito: { carrito },
      totalPrice: calcularTotal().toFixed(2),
      paymentMethod: paymentMethod,
    };

    axios
      .post(apiUrl, checkoutData, config)
      .then((response) => {
        console.log("Respuesta exitosa:", response.data);
        Swal.fire({
          title: "Estas seguro",
          text: "¡Acción irreversible!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, confirmo la orden!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Finalizado",
              text: "Tu pedido será entregado en las próximas 48 hrs",
              iconHtml:
                '<img class = "gif-img" src="/public/gifCarrito/icons8-enviado.gif">',
              showConfirmButton: false,
              timer: 2000,
            });

            dispatch(resetearCarrito());
            navigate("/");
          }
        });
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          console.log(error.response.data.error);
        } else {
          console.log("Hubo un error al procesar la orden.");
        }
      });
  };

  useEffect(() => {
    if (carrito.length === 0) {
      navigate("/");
    }
  }, [carrito, navigate]);

  return (
    <>
      <NavbarComponent />
      <div className="container container-with-margin">
        <div className="row">
          <div className="col-lg-6">
            <h2>Información de Contacto</h2>
            <div className="mb-3">
              <label htmlFor="email">Dirección de correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <h2>Información de Envío</h2>
            <div className="mb-3">
              <label htmlFor="firstName">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Ingresa tu apellido"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="Ingresa tu dirección"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city">Ciudad</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                placeholder="Ingresa tu ciudad"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="country">País</label>
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                placeholder="Ingresa tu país"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stateProvince">Estado / Provincia</label>
              <input
                type="text"
                className="form-control"
                id="stateProvince"
                name="stateProvince"
                placeholder="Ingresa tu estado/provincia"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="postalCode">Código Postal</label>
              <input
                type="text"
                className="form-control"
                id="postalCode"
                name="postalCode"
                placeholder="Ingresa tu código postal"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Ingresa tu número de teléfono"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col">
                <h2>Pago</h2>
                <div className="mb-3">
                  <label htmlFor="paymentMethod">Método de Pago</label>
                  <select
                    className="form-select"
                    id="paymentMethod"
                    value={paymentMethod}
                    onChange={handlePaymentMethodChange}
                  >
                    <option value="">Selecciona Método de Pago</option>
                    <option value="CreditCard">Tarjeta de Crédito</option>
                    <option value="PayPal">PayPal</option>
                    <option value="MercadoPago">Mercado Pago</option>
                  </select>
                </div>
                {paymentMethod === "CreditCard" && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="cardNumber">Número de Tarjeta</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardNumber"
                        placeholder="Ingresa el número de tarjeta"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nameOnCard">Nombre en la Tarjeta</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nameOnCard"
                        placeholder="Ingresa el nombre en la tarjeta"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="expirationDate">
                        Fecha de Expiración (MM/AA)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="expirationDate"
                        placeholder="Ingresa la fecha de expiración"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="cvc">CVC</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cvc"
                        placeholder="Ingresa el CVC"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <h2 className="mb-3">Resumen del Pedido</h2>
                <dl className="row">
                  {carrito.map((product, index) => (
                    <dl className="row">
                      <dt className="col-sm-2">
                        <img
                          className="imgCheckout"
                          src={`${imgUrl}${product.photo}`}
                          alt=""
                        />
                      </dt>
                      <dt className="col-sm-4">{product.name}</dt>
                      <dd className="col-sm-6">U$S {product.price}</dd>
                    </dl>
                  ))}
                </dl>

                <dl className="row">
                  <dd className="col-sm-6">
                    <span className="checkoutTotalPrice">
                      U$S {calcularTotal().toFixed(2)}
                    </span>
                  </dd>
                </dl>
                <button
                  className="btn btn-primary"
                  onClick={handleConfirmOrder}
                >
                  Confirmar Orden
                </button>
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

export default Checkout;
