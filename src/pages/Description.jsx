import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import NavbarComponent from "../components/Navbar";
import AddToCart from "../components/AddToCart";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
//import NavbarAside from "../components/NavbarAside";

import "./description.css";

function Description() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  const imgUrl = "http://localhost:3000/img/";
  const apiUrl = `http://localhost:3000/products/detail/${slug}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(product);
  return (
    <>
      <NavbarComponent />
      {product && (
        <div className="container containerCategory">
          <div className="row">
            <div className="col-12">
              <h2>{product.category.categoryName}</h2>
              {/* <NavbarAside /> */}
            </div>
            <div className="col-8">
              <Card style={{ width: "50rem", height: "40rem", border:"none" }} className="m-1">
                <Card.Img
                  variant="top"
                  src={`${imgUrl}${product.photo}`}
                  className="imgListCat img-fluid"
                  style={{ width: "70%", height: "100%", objectFit: "cover" }}
                />
              </Card>
            </div>

            <div className="col-12 col-md-4 contenido">
              <div className="description">
                <h2>{product.name}</h2>
                <span className="price">
                  <h5 style={{ color: "#ff6200", fontSize: "1.2rem" }}>
                    ${product.price}
                  </h5>
                </span>

                <span>DISPONIBILIDAD: {product.stock} DISPONIBLES</span>
                <br />
                <span>SKU: BX8071512400</span>
                <br />
                <span>CATEGORÍAS: PROCESADORES, PROCESADORES INTEL</span>
                <br />
                <hr />
              </div>
              <div className="caracteristicas">
                {product.description}
                <div>
                  <hr />
                  <AddToCart />
                </div>
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

export default Description;
