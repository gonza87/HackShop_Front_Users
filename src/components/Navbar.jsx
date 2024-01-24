import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Carrito from './Carrito';
import 'animate.css';
import './nav.css';




function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className='mianav' fixed="top">
    <Container>
      <Navbar.Brand><Link to="/" ><img className='logo animate__animated animate__flip animate__slow' src="/public/logo.png" alt="logo" /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className='row container'>
          <div className='col-12'>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">Search</Button>{' '}
          </Form>
          
          </div>
          <div className='col-12'>
            <Nav className="me-auto d-flex justify-content-between">
             <h3 className='mt-1'>Categorias</h3>
             
            </Nav>
            
          </div>
          <div className='col-12'>
  <Nav>
          <Nav.Link href="#deets">GPU</Nav.Link>
          <Nav.Link href="#deets">CPU</Nav.Link>
          <Nav.Link href="#deets">MONITORES</Nav.Link>
          <Nav.Link href="#deets">PC ARMADAS</Nav.Link>
          <Nav.Link href="#deets">NOTEBOOKS</Nav.Link>
          <Nav.Link href="#deets">SILLAS GAMER</Nav.Link>
          <Nav.Link> <Link to="/about" className='search'>About</Link></Nav.Link>
          
          

          
        </Nav>
        
          </div>
        </div>
        
      
      </Navbar.Collapse>
      <Link to="/login"><Button variant="outline-light" className="ms-2">Ingresá</Button></Link>
      
      <Carrito/>
    </Container>
  </Navbar>
  );
}

export default NavbarComponent;
