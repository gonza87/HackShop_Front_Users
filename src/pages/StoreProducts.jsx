import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ProductCountSelector from "../components/ProductCountSelector";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import 'animate.css';
import "./storeProducts.css";

function StoreProducts() {
  const imgUrl = "http://localhost:3000/img/";
  const apiUrl = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { slug } = useParams();

  const handleDropdownSelect = async (eventKey) => {
    
    // Realizar la solicitud con Axios y actualizar el estado con la respuesta
    try {
      const response = await axios.get(`${apiUrl}/${eventKey}`);
     
      setProducts(response.data)
      
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
    }
  };

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        // Manejar la respuesta exitosa
        
        setProducts(response.data)
        
      })
      .catch((error) => {
        // Manejar errores
        console.error("Error en la solicitud:", error.message);
      });
  }, []);
  
  console.log(products)
  return (
    <>
    
      <NavbarComponent />

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 banner d-flex flex-column align-items-center"
            /* style={{
              paddingTop: "100px", // Ajusta el padding superior según tus necesidades
              paddingBottom: "20px", // Ajusta el padding inferior según tus necesidades
              maxHeight: "calc(100vh - 56px)", // Ajusta la altura máxima restando el tamaño de la barra de navegación (56px en este caso)
              position: "sticky",
              top: "56px", // Altura de la barra de navegación
            }} */
          >
            {/* Contenido fijo de la columna */}
            <img className="imgBanner"
              src="/public/gifBannerStoreProducts/Black Grey Aqua Grunge Gaming Mobile Video (1).gif"
              alt="Tu GIF"
             /*  width="80%"
              height="100%" */
            />
          </div>

          <div className="col-lg-9">
            <div className="container containerCategory">
              <div className="row">
                <div className="col-8">
                  <h2 className="textTodosProductos">Todos nuestros productos</h2>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <DropdownButton
                    align="end"
                    title="Ordenar Por"
                    id="dropdown-menu-align-end"
                    variant="light"
                    onSelect={handleDropdownSelect}
                  >
                    <Dropdown.Item eventKey="destacado">Destacado</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="menor">Precio: Menor a mayor</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="mayor">Precio: Mayor a menor</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="todos">Todos</Dropdown.Item>
                  </DropdownButton>
                  <div className="col-4 d-flex justify-content-end mt-2">
                    {/* <ProductCountSelector /> */}
                  </div>
                </div>

                <div className="col-12 d-flex flex-wrap">
                {products.map((product, index) => (

                  <Card key={index} style={{ width: "15rem" }} className="m-1 cardTodosMia">
                     <Link to={`/products/detail/${product.slug}`}>
                     {(product.featured)&&(<button type="button" className="btn btn-warning m-auto animate__animated animate__infinite infinite animate__swing fw-bold" style={{ position: 'absolute', top: '0', left: '30%' }}>En Oferta</button>)}
                    <Card.Img
                      variant="top"
                      src = {`${imgUrl}${product.photo}`}
                      className="imgListCat"
                    />
                    </Link>
                    <Card.Body>
                      <Card.Title className="productDescription">{product.name}</Card.Title>
                      <Card.Text className="productDescription">{product.description}</Card.Text>
                      <Card.Title className="productDescription">${product.price}</Card.Title>
                      <Button variant="" style={{background: "#09072c", color: "#ffffff"}}>
                        <FontAwesomeIcon icon={faShoppingCart} style={{ cursor: "pointer", marginRight:"5px" }}
                        />Comprar
                      </Button>
                    </Card.Body>
                  </Card>
                  ))}
              
                </div>
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

export default StoreProducts;
