import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./carrusel.css";
import './CarruselDestacados.css';

function CarruselDestacados(){
    return ( 
            
        <>
        <div className='prodDestacados'><p>PRODUCTOS DESTACADOS</p></div>
        <div>
            <Carousel >
                <Carousel.Item interval={5000} className='d-flex justify-content-between flex-wrap'>
                    <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src="/public/prodGeForceRTX 4080.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build 
                            </Card.Text>
                            <Card.Title>Price</Card.Title>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                        
                    </Card>
                  
                    <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src="/public/prodi5-12600K.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build 
                            </Card.Text>
                            <Card.Title>Price</Card.Title>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                        
                    </Card>
                    <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src="/public/prodi9-13900KF.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build 
                            </Card.Text>
                            <Card.Title>Price</Card.Title>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                        
                    </Card>
                    <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src="/public/prodi9-13900KF.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build 
                            </Card.Text>
                            <Card.Title>Price</Card.Title>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                        
                    </Card>
                  
                    
                    
                    
                    
                </Carousel.Item > 
             
                
            </Carousel>
      </div>
        </>
    )
};

export default CarruselDestacados;