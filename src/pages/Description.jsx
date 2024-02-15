import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import { addToCart } from "../redux/carritoReducer";
import NavbarComponent from "../components/Navbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./description.css";

function Description() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedQuantitiesDestacados, setSelectedQuantitiesDestacados] =
    useState({});
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  const imgUrl = "http://localhost:3000/img/";
  const apiUrl = `http://localhost:3000/products/detail/${slug}`;

  const handleBuyClickDescription = (product) => {
    const maxStock = product.stock;
    const productId = product.id;
    const currentQuantity = selectedQuantitiesDestacados[productId] || 0;

    if (currentQuantity < maxStock) {
      const updatedQuantities = {
        ...selectedQuantitiesDestacados,
        [productId]: currentQuantity + 1,
      };
      setSelectedQuantitiesDestacados(updatedQuantities);
      dispatch(addToCart({ ...product, quantity: currentQuantity + 1 }));
      console.log("Producto agregado al carrito");
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Producto agregado exitosamente",
        customClass: {
          container: "my-custom-class",
        },
      });
    } else {
      console.log("No hay suficiente stock para la cantidad seleccionada");
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "Stock no disponible",
        customClass: {
          container: "my-custom-class",
        },
      });
    }
  };

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setProduct(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <NavbarComponent />
      {product && (
        <div className="container containerCategory">
          <div className="row">
            <div className="col-12">
              <h2>{product.category.categoryName}</h2>
            </div>
            {isLoading ? (
              <div className="col-8">
                <Skeleton width={560} height={640} />
              </div>
            ) : (
              <div className="col-8">
                <Card
                  style={{ width: "50rem", height: "40rem", border: "none" }}
                  className="m-1"
                >
                  <Card.Img
                    variant="top"
                    src={`${imgUrl}${product.photo}`}
                    className="imgListCat img-fluid"
                    style={{ width: "70%", height: "100%", objectFit: "cover" }}
                  />
                </Card>
              </div>
            )}
            <div className="col-12 col-md-4 contenido">
              {isLoading ? (
                <Skeleton count={1} width={200} height={30} />
              ) : (
                <div className="description">
                  <h2>{product.name}</h2>
                  <span className="price">
                    <h5 style={{ color: "#ff6200", fontSize: "1.2rem" }}>
                      ${product.price}
                    </h5>
                  </span>
                  <span>DISPONIBILIDAD: {product.stock} DISPONIBLES</span>
                  <br />
                  <hr />
                </div>
              )}
              {isLoading ? (
                <Skeleton count={4} width={300} />
              ) : (
                <div className="caracteristicas">
                  {product.description}
                  <div>
                    <hr />
                    <Button
                      onClick={() => handleBuyClickDescription(product)}
                      variant=""
                      style={{ background: "#09072c", color: "#ffffff" }}
                    >
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        style={{ cursor: "pointer", marginRight: "5px" }}
                      />
                      Comprar
                    </Button>
                  </div>
                </div>
              )}
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
