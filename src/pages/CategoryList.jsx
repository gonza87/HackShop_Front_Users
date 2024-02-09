import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/carritoReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'; // Importa SweetAlert2 para mostrar notificaciones
import 'animate.css';
import './CategoryList.css';

function CategoryList() {
  const { categoryName } = useParams();
  const imgUrl = "http://localhost:3000/img/";
  const apiUrl = "http://localhost:3000/category";
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [selectedQuantities, setSelectedQuantities] = useState({});

  const handleDropdownSelect = async (eventKey) => {
    try {
      const response = await axios.get(`http://localhost:3000/category/search/${eventKey}/${categoryName}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
    }
  };

  useEffect(() => {
    axios
      .get(`${apiUrl}/${categoryName}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error.message);
      });
  }, []);
  console.log(products)

  const handleAddToCart = (product) => {
    const maxStock = product.stock;
    const productId = product.id; // Asumiendo que tu producto tiene un campo 'id'

    const currentQuantity = selectedQuantities[productId] || 0;

    if (currentQuantity < maxStock) {
      const updatedQuantities = {
        ...selectedQuantities,
        [productId]: currentQuantity + 1,
      };

      // Actualizar el estado de las cantidades seleccionadas
      setSelectedQuantities(updatedQuantities);

      // Verificar si la cantidad seleccionada no supera el stock disponible
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
        timer: 1500,
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

  return (
    <>
      <NavbarComponent />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 banner d-none d-lg-block d-flex flex-column align-items-center">
            <img
              className="imgBanner w-100"
              src="/public/gifBannerStoreProducts/Black Grey Aqua Grunge Gaming Mobile Video (1).gif"
              alt="Tu GIF"
            />
          </div>
          <div className="col-lg-10">
            <div className="container containerCategory">
              <div className="row">
                <div className="col-8">
                  <h2 className="textTodosProductos">{categoryName}</h2>
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
                        {product.featured && (
                          <button type="button" className="btn btn-warning m-auto animate__animated animate__infinite infinite animate__swing fw-bold" style={{ position: 'absolute', top: '0', left: '30%' }}>En Oferta</button>
                        )}
                        <Card.Img variant="top" src={`${imgUrl}${product.photo}`} className="imgListCat" />
                      </Link>
                      <Card.Body>
                        <Card.Title className="productDescription">{product.name}</Card.Title>
                        <Card.Text className="productDescription">{product.description}</Card.Text>
                        <Card.Title className="productDescription">${product.price}</Card.Title>
                        <Button onClick={() => handleAddToCart(product)} variant="" style={{ background: "#09072c", color: "#ffffff" }}>
                          <FontAwesomeIcon icon={faShoppingCart} style={{ cursor: "pointer", marginRight: "5px" }} />Comprar
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

export default CategoryList;








