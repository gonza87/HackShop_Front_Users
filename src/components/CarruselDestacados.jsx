import Carousel from 'react-bootstrap/Carousel';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import 'animate.css';
import "./carrusel.css";
import './CarruselDestacados.css';


function CarruselDestacados(){
    const imgUrl = "http://localhost:3000/img/";
    const apiUrl = "http://localhost:3000/products/destacado";
    const [productsDestacados, setProductsDestacados] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = 4;

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
                              <button type="button" class="btn btn-warning m-auto animate__animated 
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
                            <Button variant="" style={{background: "#09072c", color: "#ffffff"}}>
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