import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FaUser } from "react-icons/fa6";
import { FaUserGear } from "react-icons/fa6";

import Swal from "sweetalert2";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { resetToken } from "../redux/userReducer";

import Carrito from "./ShoppingCart";
import NavbarAside from "./NavbarAside";
import "animate.css";
import "./nav.css";

function NavbarComponent({ onSearchListUpdate, setIsLoading = null}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user);
  const webFrontAdmin = "http://localhost:5174/";
  const apiUrl = `http://localhost:3000/products/search?term=${searchQuery}`;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Realizar búsqueda o navegar a la página de resultados
  };

  useEffect(() => {
    setIsLoading && setIsLoading(true); 
    axios
      .get(apiUrl)
      .then((response) => {
        setIsLoading && setIsLoading(false);
        setSearchList(response.data);
        onSearchListUpdate(response.data);

      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchQuery]);

  const handleLoginOrLogout = () => {
    if (token) {
      // El usuario está logueado, por lo tanto, realizar cierre de sesión
      dispatch(resetToken());
      // Redirigir a la página principal
      navigate("/");
      // Otras acciones de cierre de sesión que puedas necesitar
    } else {
      // El usuario no está logueado, redirigir a la página de inicio
      navigate("/login");
    }
  };

  return (
    <Navbar collapseOnSelect expand="md" className="mianav" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              className="logo animate__animated animate__flip animate__slow"
              src="/logo3.png"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ borderColor: "white" }}
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="row container">
            <div className="col-md-10">
              <Form onSubmit={handleSearchSubmit} className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </Form>
            </div>
            <div className="col-md-2 columna-b d-flex">
              <div className="d-flex align-items-end contenedorbtnlogin">
                <Link
                  to={token ? "/" : "/login"}
                  className="d-flex align-items-center"
                  style={{ textDecoration: "none" }}
                  onClick={handleLoginOrLogout}
                >
                  <FaUser
                    style={{
                      color: "#ffffff",

                      fontSize: "1.3rem",
                    }}
                  />
                  <span className="ms-2" id="btnIngresa">
                    {token ? "Salir" : "Ingresar"}
                  </span>
                </Link>
              </div>
              <div className="contenedorAdmin">
                <Link
                  to={webFrontAdmin}
                  className="d-flex align-items-center"
                  style={{ textDecoration: "none" }}
                >
                  <FaUserGear
                    style={{
                      color: "#ffffff",

                      fontSize: "1.5rem",
                    }}
                  />
                  <span className="ms-2" id="btnIngresa">
                    Admin
                  </span>
                </Link>
              </div>
              <div className="contenedorcarro">
                <Carrito />
              </div>
            </div>
            <div className="col-lg-12 columna-a">
              <Nav className="me-auto d-flex ">
                <div className="contenedorbtncategorias">
                  <NavbarAside />
                </div>
                <div className="contenedorbtnTodos">
                  <Link to="/store" style={{ textDecoration: "none" }}>
                    <span style={{ color: "#ffffff" }}>TODOS</span>
                  </Link>
                </div>
              </Nav>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
