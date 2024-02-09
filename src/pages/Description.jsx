import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import {addToCart} from "../redux/carritoReducer"
import NavbarComponent from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
//import AddToCart from "../components/AddToCart";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
//import NavbarAside from "../components/NavbarAside";

import "./description.css";

function Description() {
  
  const [selectedQuantitiesDestacados, setSelectedQuantitiesDestacados] = useState({});
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  const imgUrl = "http://localhost:3000/img/";
  const apiUrl = `http://localhost:3000/products/detail/${slug}`;


  const handleBuyClickDescription = (product) => {
    const maxStock = product.stock;
    const productId = product.id; // Asumiendo que tu producto tiene un campo 'id'
  
    const currentQuantity = selectedQuantitiesDestacados[productId] || 0;
  
    if (currentQuantity < maxStock) {
      const updatedQuantities = {
        ...selectedQuantitiesDestacados,
        [productId]: currentQuantity + 1,
      };
  
      // Actualizar el estado de las cantidades seleccionadas
      setSelectedQuantitiesDestacados(updatedQuantities);
  
      // Verificar si la cantidad seleccionada no supera el stock disponible
      dispatch(addToCart({ ...product, quantity: currentQuantity + 1 }));
      console.log("Producto agregado al carrito");
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Producto agregado exitosamente"
      });
    } else {
      console.log("No hay suficiente stock para la cantidad seleccionada");
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Stock no disponible"
      });
    }
  };



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
                  <Button onClick={() => handleBuyClickDescription(product)} variant="" style={{background: "#09072c", color: "#ffffff"}}>
                        <FontAwesomeIcon icon={faShoppingCart} style={{ cursor: "pointer", marginRight:"5px" }}
                        />Comprar
                      </Button>
                  {/* <AddToCart /> */}
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
