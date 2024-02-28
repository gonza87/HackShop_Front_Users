import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userReducer";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const apiUrl = "http://localhost:3000/token";

  const apiUrl = `${import.meta.env.VITE_API_URL}token`;

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!loginData.email || !loginData.password) {
      Swal.fire({
        text: "Complete todos los campos por favor",
        icon: "advertencia",
      });
      return;
    }

    setLoading(true);

    axios
      .post(apiUrl, loginData)
      .then((response) => {
        dispatch(setUser(response.data));
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);

        if (error.response) {
          Swal.fire({
            text: error.response.data.error || "Error en la solicitud",
            icon: "error",
          });
        } else {
          Swal.fire({
            text: "Error en la solicitud",
            icon: "error",
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-6 loginIzquierda">
            <p className="textHackshop">Hack Shop</p>
            <p>Bienvenido</p>
            <div className="d-flex align-items-center justify-content-center">
              <Form onSubmit={handleSubmit} className="formLogin mt-4">
                <Row>
                  <Col>
                    <Form.Label className="textCampoLogin">
                      Email Addres
                    </Form.Label>
                    <span className="testRegistro">
                      No tenés cuenta?{" "}
                      <Link to="/register">Registraté acá</Link>
                    </span>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Escribí tu email acá"
                      value={loginData.email}
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="textCampoLogin mt-3">
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Contraseña"
                      value={loginData.password}
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
                <Button type="submit" className="btnLogin mt-4">
                  Iniciar Sesión
                </Button>
              </Form>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <div className="contUserPrueba">
                <p>Usuarios de Prueba</p>
                <p id="usertTextoPrueba">
                  Para simplificar el acceso a la aplicación, se proporcionan
                  los siguientes usuarios de prueba:
                </p>
                <p>Iniciar sesión como comprador</p>
                <ul>
                  <li>E-mail: mrodriguez@gmail.com</li>
                  <li>Password: 1234</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 loginDerecha">
            <Link to="/">
              <img src="/public/logo2.png" alt="" className="logoLogin" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
