import React, { useState } from "react";
import NavbarComponent from "../components/Navbar";
import Whatsapp from "../components/Whatsapp";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import axios from "axios";


import "./checkout.css";

function Checkout() {
  const carrito = useSelector((state) => state.carrito);
  const token = useSelector((state) => state.user);
  console.log(carrito)
  console.log(token.userid)


  const [email, setEmail] = useState("");
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    stateProvince: "",
    postalCode: "",
    phone: ""
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");

   // Función para calcular el total de los precios en el carrito, considerando la cantidad
   const calcularTotal = () => {
    return carrito.reduce((total, producto) => {
      // Asumiendo que cada producto tiene propiedades 'precio' y 'cantidad'
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
    console.log("va axios")
    const apiUrl = "http://localhost:3000/orders";
  
    const checkoutData = {
      userid: token.userid,
      carrito: {carrito}
  
    };
  
    axios
    .post(apiUrl, checkoutData, {
      headers: {
        "Content-Type": "application/json", // Establece el tipo de contenido correcto
      },
    })
      .then((response) => {
        console.log("Respuesta exitosa:", response.data);
        //navigate("/login");
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
        if (error.response && error.response.data && error.response.data.error) {
          console.log(error.response.data.error);
        } else {
          console.log("Hubo un error al procesar la orden.");
        }
      });


    // Lógica para confirmar la orden
  };

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
                /* value={email} */
                /* onChange={(e) => setEmail(e.target.value)} */
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
                /* value={shippingInfo.firstName}
                onChange={handleInputChange} */
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
                /* value={shippingInfo.lastName}
                onChange={handleInputChange} */
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
                /* value={shippingInfo.address}
                onChange={handleInputChange} */
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
                /* value={shippingInfo.city}
                onChange={handleInputChange} */
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
                /* value={shippingInfo.country}
                onChange={handleInputChange} */
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
                /* value={shippingInfo.stateProvince}
                onChange={handleInputChange} */
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
                /* value={shippingInfo.postalCode}
                onChange={handleInputChange} */
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
               /*  value={shippingInfo.phone}
                onChange={handleInputChange} */
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
                    <option value="creditCard">Tarjeta de Crédito</option>
                    <option value="paypal">PayPal</option>
                    <option value="eTransfer">eTransfer</option>
                  </select>
                </div>
                {paymentMethod === "creditCard" && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="cardNumber">Número de Tarjeta</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardNumber"
                       /*  value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)} */
                        placeholder="Ingresa el número de tarjeta"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nameOnCard">Nombre en la Tarjeta</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nameOnCard"
                       /*  value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)} */
                        placeholder="Ingresa el nombre en la tarjeta"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="expirationDate">Fecha de Expiración (MM/AA)</label>
                      <input
                        type="text"
                        className="form-control"
                        id="expirationDate"
                        /* value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)} */
                        placeholder="Ingresa la fecha de expiración"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="cvc">CVC</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cvc"
                       /*  value={cvc}
                        onChange={(e) => setCvc(e.target.value)} */
                        placeholder="Ingresa el CVC"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2>Resumen del Pedido</h2>
                <dl className="row">
              {/* Agregar imagen de producto */}
              <dt className="col-sm-6">Producto  i5 14600K</dt>
              <dd className="col-sm-6">
                <img src="/public/prodi5-12600K.jpg" alt="Nombre del producto" style={{ maxWidth: '100%', maxHeight: '100px' }} />
              </dd>
             
              <dt className="col-sm-6">Precio</dt>
              <dd className="col-sm-6">USD 195.00</dd>
              {/* Otros detalles del producto */}
              {/* Resto del resumen del pedido */}
              <dt className="col-sm-6">Subtotal</dt>
              <dd className="col-sm-6">USD 195.00</dd>
              <dt className="col-sm-6">Envío</dt>
              <dd className="col-sm-6">USD 5.00</dd>
              <dt className="col-sm-6">Impuestos</dt>
              <dd className="col-sm-6">USD 42.90</dd>
              <dt className="col-sm-6">Total</dt>
              <dd className="col-sm-6">USD {calcularTotal().toFixed(2)}</dd>
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