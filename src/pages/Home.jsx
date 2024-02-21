import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Carrusel from "../components/Carrusel";
import FeaturedProducts from "../components/FeaturedProducts";
import FeaturedCategories from "../components/FeaturedCategories";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Home.css";

function Home() {
  const imgUrl = "http://localhost:3000/img/";
  const [searchList, setSearchList] = useState([]); // Estado local para almacenar la lista de búsqueda

  const handleSearchListUpdate = (newSearchList) => {
    // Maneja la actualización de searchList en el componente Home
    console.log("New Search List:", newSearchList);
    // Actualiza el estado local con la nueva lista de búsqueda
    setSearchList(newSearchList);
  };

  return (
    <>
      <NavbarComponent onSearchListUpdate={handleSearchListUpdate} />
      <Carrusel />
      
      {searchList.length !== 0 ? (
        
        <div className="container">
          <div className="row">
          <div className="col-12 d-flex flex-wrap">
                      {searchList.map((product, index) => (
                        <Card
                          key={index}
                          style={{ width: "15rem" }}
                          className="m-1 cardTodosMia"
                        >
                          <Link to={`/products/detail/${product.slug}`}>
                            {product.featured && (
                              <button
                                type="button"
                                className="btn btn-warning m-auto animate__animated animate__infinite infinite animate__swing fw-bold"
                                style={{
                                  position: "absolute",
                                  top: "0",
                                  left: "30%",
                                }}
                              >
                                En Oferta
                              </button>
                            )}
                            <Card.Img
                              variant="top"
                              src={`${imgUrl}${product.photo}`}
                              className="imgListCat"
                            />
                          </Link>
                          <Card.Body>
                            <Card.Title className="productDescription">
                              {product.name}
                            </Card.Title>
                            <Card.Text className="productDescription">
                              {product.productDescription}
                            </Card.Text>
                            <Card.Title className="productDescription">
                              U$S {product.price}
                            </Card.Title>
                            {/* <Button
                              onClick={() => handleBuyClick(product)}
                              variant=""
                              style={{
                                background: "#09072c",
                                color: "#ffffff",
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faShoppingCart}
                                style={{
                                  cursor: "pointer",
                                  marginRight: "5px",
                                }}
                              />
                              Comprar
                            </Button> */}
                          </Card.Body>
                        </Card>
                      ))}
                    </div>
          <div className="col-12">
              <div className="bannerTarjeta mt-2"> </div>
            </div>
          </div>
        </div>
      ):

       (
        <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <FeaturedCategories />
            </div>
            <div className="col-12">
              <FeaturedProducts />
            </div>
            <p className="text-center fw-bold pt-2 ivaText">
              * Todos los precios del sitio tiene IVA incluído
            </p>
            <div className="col-12">
              <div className="bannerTarjeta mt-2"> </div>
            </div>
          </div>
        </div>
      </div>
      )}
      
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Home;
