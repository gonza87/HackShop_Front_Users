import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Carrito from './Carrito';
import NavbarAside from './NavbarAside';
import 'animate.css';
import './nav.css';

import { faBars } from '@fortawesome/free-solid-svg-icons';



function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className='mianav' fixed="top">
    <Container>
      <Navbar.Brand><Link to="/" ><img className='logo animate__animated animate__flip animate__slow' src="/public/logo.png" alt="logo" /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ borderColor: 'white' }}><FontAwesomeIcon icon={faBars} style={{ color: 'white' }} /> </Navbar.Toggle>
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
             
             <NavbarAside/>
            </Nav> 
            
          </div>
          
        </div>
        
      
      </Navbar.Collapse>
      <div className='d-flex align-items-center'>
        <Link to="/login" className='d-flex align-items-center' style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faUser} size='xl'  style={{color: "#ffffff",}}  /><Button variant="outline-light" className="ms-2" id='btnIngresa'>Ingresá</Button></Link>
      </div>
      
      
      <Carrito/>
    </Container>
  </Navbar>
  );
}

export default NavbarComponent;
