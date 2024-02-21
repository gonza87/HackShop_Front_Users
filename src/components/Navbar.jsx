import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Carrito from "./ShoppingCart";
import NavbarAside from "./NavbarAside";
import "animate.css";
import "./nav.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavbarComponent({ onSearchListUpdate }) {
  const [searchQuery, setSearchQuery] = useState(""); // Nuevo estado para la búsqueda
  const [searchList, setSearchList] = useState(null); //guardar lista de api
  const navigate = useNavigate(); // Hook de React Router para la navegación
  const apiUrl = `http://localhost:3000/products/search?term=${searchQuery}`;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Navega a la página de búsqueda con el query en la URL
    //navigate(`/search?q=${searchQuery}`);
  };

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setSearchList(response.data);
        onSearchListUpdate(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchQuery]);
  console.log(searchList);

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
            <div className="col-md-10 ">
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
                  to="/login"
                  className="d-flex align-items-center"
                  style={{ textDecoration: "none" }}
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    size="xl"
                    style={{ color: "#ffffff" }}
                  />
                  <span className="ms-2" id="btnIngresa">
                    Ingresá
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
