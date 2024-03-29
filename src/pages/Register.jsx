import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Register.css";

function Register() {
  const navigate = useNavigate();
  //const apiUrl = "http://localhost:3000/users";
  const apiUrl = `${import.meta.env.VITE_API_URL}users`;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    adress: "",
    telephone: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password.length < 8 || formData.password.length > 20) {
      Swal.fire({
        text: "La contraseña debe tener entre 8 y 20 caracteres",
        icon: "advertencia",
      });
      return;
    }

    const userData = {
      firstname: formData.firstName,
      lastname: formData.lastName,
      email: formData.email,
      password: formData.password,
      adress: formData.adress,
      telephone: formData.telephone,
    };

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.adress ||
      !formData.email ||
      !formData.password ||
      !formData.telephone
    ) {
      Swal.fire({
        text: "Complete todos los campos por favor",
        icon: "advertencia",
      });
      return;
    }

    axios
      .post(apiUrl, userData)
      .then((response) => {
        console.log("Respuesta exitosa:", response.data);
        Swal.fire({
          text: "Registro exitoso. Ahora puedes iniciar sesión.",
          showConfirmButton: true,
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed || result.isDismissed) {
            navigate("/login");
          }
        });
      })

      .catch((error) => {
        console.error("Error al enviar datos:", error);
        if (error.response && error.response.status === 409) {
          Swal.fire({
            text: "El nombre de usuario ya está en uso. Por favor, elija otro.",
            icon: "error",
          });
        } else {
          Swal.fire({
            text: "Hubo un error al crear la cuenta. Inténtalo de nuevo.",
            icon: "error",
          });
        }
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
                      Email Address
                    </Form.Label>
                    <span className="testRegistro">
                      Ya tenés cuenta? <Link to="/login">Inicia sesión</Link>
                    </span>
                    <Form.Control
                      type="email"
                      name="email"
                      value={FormData.email}
                      placeholder="Escribí tu email acá"
                      onChange={handleChange}
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
                      value={FormData.password}
                      placeholder="Escribí tu contraseña acá"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="textCampoLogin mt-3">
                      Nombre
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      placeholder="Escribí tu nombre acá"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="textCampoLogin mt-3">
                      Apellido
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      placeholder="Escribí tu apellido acá"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="textCampoLogin mt-3">
                      Dirección
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="adress"
                      value={formData.adress}
                      placeholder="Escribí tu dirección acá"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="textCampoLogin mt-3">
                      Teléfono
                    </Form.Label>
                    <Form.Control
                      type="telephone"
                      name="telephone"
                      value={formData.telephone}
                      placeholder="Escribí tu teléfono acá"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Button type="submit" className="btnLogin mt-4">
                  Registrarse
                </Button>
              </Form>
            </div>
          </div>
          <div className="col-md-6 loginDerecha ">
            <Link to="/">
              <img src="/logo2.png" alt="" className="logoLogin" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
