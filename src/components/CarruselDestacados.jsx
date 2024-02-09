import Carousel from 'react-bootstrap/Carousel';
import {addToCart} from "../redux/carritoReducer"
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import 'animate.css';
import "./carrusel.css";
import './CarruselDestacados.css';


function CarruselDestacados(){
    const [selectedQuantitiesDestacados, setSelectedQuantitiesDestacados] = useState({});
    const dispatch = useDispatch();
    
    const imgUrl = "http://localhost:3000/img/";
    const apiUrl = "http://localhost:3000/products/destacado";
    const [productsDestacados, setProductsDestacados] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = 4;

    const handleBuyClickDestacados = (product) => {
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
            // Manejar la respuesta exitosa
            setProductsDestacados(response.data)
            console.log(productsDestacados)
            
          })
          .catch((error) => {
            // Manejar errores
            console.error("Error en la solicitud:", error.message);
          });
      }, []);
      
    const totalPages = Math.ceil(productsDestacados.length / itemsPerPage);

    const handlePageSelect = (selectedPage) => {
        setActivePage(selectedPage);
    };

    return ( 
            
        <>
        <div className='prodDestacados'><p>PRODUCTOS DESTACADOS</p></div>
        <div>
            <div className='row'>
            <div className='col-12' >
                <Carousel.Item interval={5000} className='d-flex justify-content-between flex-wrap'>
                {productsDestacados.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage).map((product, index) => (
                    <Card key={index} className='cardCarruselDestacados cardTodosMia' style={{ width: '14rem' }}>
                              <button type="button" className="btn btn-warning m-auto animate__animated 
                animate__infinite	infinite animate__swing fw-bold">En Oferta</button>
                        <Link to={`/products/detail/${product.slug}`}>
                    <Card.Img
                      variant="top"
                      src = {`${imgUrl}${product.photo}`}
                      className="imgDestacados"
                    />
                    </Link>
                        <Card.Body>
                  
                            <Card.Title className='productDescription'>{product.name}</Card.Title>
                            <Card.Text className='productDescription'>
                            {product.description}
                            </Card.Text>
                            <Card.Title className="productDescription">${product.price}</Card.Title>
                            <Button onClick={() => handleBuyClickDestacados(product)} variant="" style={{background: "#09072c", color: "#ffffff"}}>
                        <FontAwesomeIcon icon={faShoppingCart} style={{ cursor: "pointer", marginRight:"5px" }}
                        />Comprar
                      </Button>
                        </Card.Body>
                        
                    </Card>
                    ))}
                  
                   
                    
                    
                    
                </Carousel.Item > 
             
                
            </div>
</div>
            <div className="d-flex justify-content-center">
                    <Pagination>
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <Pagination.Item
                                key={index}
                                active={index + 1 === activePage}
                                onClick={() => handlePageSelect(index + 1)}
                                id='btnPaginacion'
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </div>
      </div>
        </>
    )
};

export default CarruselDestacados;