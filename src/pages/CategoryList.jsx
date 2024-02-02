import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import 'animate.css';
import './CategoryList.css';





 function CategoryList() {
    {
      const { categoryName } = useParams();
      console.log(categoryName)
        const imgUrl = "http://localhost:3000/img/";
        const apiUrl = "http://localhost:3000/category";
        const [products, setProducts] = useState([]);
         const [hoveredIndex, setHoveredIndex] = useState(null);
      
         const handleDropdownSelect = async (eventKey) => {
          
           // Realizar la solicitud con Axios y actualizar el estado con la respuesta
           try {
             const response = await axios.get(`http://localhost:3000/category/search/${eventKey}/${categoryName}`);
           
             setProducts(response.data)
            
           } catch (error) {
             console.error('Error al realizar la solicitud:', error.message);
           }
         };
      
        useEffect(() => {
          
          //console.log(categoria)
         
          axios
            .get(`${apiUrl}/${categoryName}`)
            .then((response) => {
              // Manejar la respuesta exitosa
              
              setProducts(response.data)
              
            })
            .catch((error) => {
              // Manejar errores
              console.error("Error en la solicitud:", error.message);
            });
        }, []);
        
        
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
 }
  

//   return (
//     <>
//         <NavbarComponent/>
        
//         <div className="container containerCategory">
//             <div className="row">
               
                
                    
//                         <div className='col-8'><h2>Procesadores</h2></div>
//                         <div className='col-4 d-flex justify-content-end'>
//                             <DropdownButton
//                                 align="end"
//                                 title="Ordenar Por"
//                                 id="dropdown-menu-align-end"
//                                 variant="light"
//                                 >
//                             <Dropdown.Item eventKey="1">Destacado</Dropdown.Item>
//                             <Dropdown.Divider />
//                             <Dropdown.Item eventKey="2">Precio: Menor a mayor</Dropdown.Item>
//                             <Dropdown.Divider />
//                             <Dropdown.Item eventKey="3">Precio: Mayor a menor</Dropdown.Item>
                            
//                             </DropdownButton>
//                         </div>
                    
                    
//                         <div className='col-12 d-flex flex-wrap'>
//                         <Card style={{ width: '15rem' }} className='m-1'>
//                             <Card.Img variant="top" src="/public/procesadores/PROCESADOR-INTEL-I7-12700-1700.jpg" className='imgListCat' />
//                             <Card.Body>
//                                 <Card.Title>Card Title</Card.Title>
//                                 <Card.Text>
//                                 PROCESADOR INTEL I7 12700 1700
//                                 </Card.Text>
//                                 <Card.Title>$600</Card.Title>
//                                 <Button variant="primary">Go somewhere</Button>
//                             </Card.Body>
//                         </Card>
//                         <Card style={{ width: '15rem' }} className='m-1'>
//                             <Card.Img variant="top" src="/public/procesadores/PROCESADOR-INTEL-I7-12700-1700.jpg" className='imgListCat' />
//                             <Card.Body>
//                                 <Card.Title>Card Title</Card.Title>
//                                 <Card.Text>
//                                 PROCESADOR INTEL I7 12700 1700
//                                 </Card.Text>
//                                 <Card.Title>$600</Card.Title>
//                                 <Button variant="primary">Go somewhere</Button>
//                             </Card.Body>
//                         </Card>
//                         <Card style={{ width: '15rem' }} className='m-1'>
//                             <Card.Img variant="top" src="/public/procesadores/PROCESADOR-INTEL-I5-12400F-SVIDEO-12VA-1700.jpg" className='imgListCat' />
//                             <Card.Body>
//                                 <Card.Title>Card Title</Card.Title>
//                                 <Card.Text>
//                                 PROCESADOR INTEL I5 12400F S/VIDEO 12VA 1700 
//                                 </Card.Text>
//                                 <Card.Title>$300</Card.Title>
//                                 <Button variant="primary">Go somewhere</Button>
//                             </Card.Body>
//                         </Card>
//                         <Card style={{ width: '15rem' }} className='m-1'>
//                             <Card.Img variant="top" src="/public/procesadores/PROCESADOR-INTEL-I7-12700-1700.jpg" className='imgListCat' />
//                             <Card.Body>
//                                 <Card.Title>Card Title</Card.Title>
//                                 <Card.Text>
//                                 PROCESADOR INTEL I7 12700 1700
//                                 </Card.Text>
//                                 <Card.Title>$600</Card.Title>
//                                 <Button variant="primary">Go somewhere</Button>
//                             </Card.Body>
//                         </Card>
//                         <Card style={{ width: '15rem' }} className='m-1'>
//                             <Card.Img variant="top" src="/public/procesadores/PROCESADOR-INTEL-I5-12400F-SVIDEO-12VA-1700.jpg" className='imgListCat' />
//                             <Card.Body>
//                                 <Card.Title>Card Title</Card.Title>
//                                 <Card.Text>
//                                 PROCESADOR INTEL I5 12400F S/VIDEO 12VA 1700 
//                                 </Card.Text>
//                                 <Card.Title>$300</Card.Title>
//                                 <Button variant="primary">Go somewhere</Button>
//                             </Card.Body>
//                         </Card>
                    
//                         </div>
                    
                
//             </div>
//         </div>
//         <Whatsapp/>
//         <Footer/>
//     </>
//   );
// }

export default CategoryList;









