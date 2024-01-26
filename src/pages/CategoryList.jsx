import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CategoryList.css';





function CategoryList() {
  

  return (
    <>
        <NavbarComponent/>
        
        <div className="container containerCategory">
            <div className="row">
               
                
                    
                        <div className='col-8'><h2>Procesadores</h2></div>
                        <div className='col-4 d-flex justify-content-end'>
                            <DropdownButton
                                align="end"
                                title="Ordenar Por"
                                id="dropdown-menu-align-end"
                                variant="light"
                                >
                            <Dropdown.Item eventKey="1">Destacado</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">Precio: Menor a mayor</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3">Precio: Mayor a menor</Dropdown.Item>
                            
                            </DropdownButton>
                        </div>
                    
                    
                        <div className='col-12 d-flex flex-wrap'>
                        <Card style={{ width: '15rem' }} className='m-1'>
                            <Card.Img variant="top" src="/public/procesadores/PROCESADOR-INTEL-I7-12700-1700.jpg" className='imgListCat' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                PROCESADOR INTEL I7 12700 1700
                                </Card.Text>
                                <Card.Title>$600</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '15rem' }} className='m-1'>
                            <Card.Img variant="top" src="/public/procesadores/PROCESADOR-INTEL-I7-12700-1700.jpg" className='imgListCat' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                PROCESADOR INTEL I7 12700 1700
                                </Card.Text>
                                <Card.Title>$600</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '15rem' }} className='m-1'>
                            <Card.Img variant="top" src="/public/procesadores/PROCESADOR-INTEL-I5-12400F-SVIDEO-12VA-1700.jpg" className='imgListCat' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                PROCESADOR INTEL I5 12400F S/VIDEO 12VA 1700 
                                </Card.Text>
                                <Card.Title>$300</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '15rem' }} className='m-1'>
                            <Card.Img variant="top" src="/public/procesadores/PROCESADOR-INTEL-I7-12700-1700.jpg" className='imgListCat' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                PROCESADOR INTEL I7 12700 1700
                                </Card.Text>
                                <Card.Title>$600</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '15rem' }} className='m-1'>
                            <Card.Img variant="top" src="/public/procesadores/PROCESADOR-INTEL-I5-12400F-SVIDEO-12VA-1700.jpg" className='imgListCat' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                PROCESADOR INTEL I5 12400F S/VIDEO 12VA 1700 
                                </Card.Text>
                                <Card.Title>$300</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    
                        </div>
                    
                
            </div>
        </div>
        <Whatsapp/>
        <Footer/>
    </>
  );
}

export default CategoryList;









