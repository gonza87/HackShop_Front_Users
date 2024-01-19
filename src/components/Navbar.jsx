import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './nav.css';




function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home"><img className='logo' src="/public/logo.png" alt="logo" /></Navbar.Brand>
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
            <Button variant="outline-success">Search</Button>
          </Form>
          
          </div>
          <div className='col-12'>
            <Nav className="me-auto d-flex justify-content-between">
             <h3 className='mt-1'>Categorias</h3>
             <h3>test</h3>
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

          
        </Nav>
        
          </div>
        </div>
        
      
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavbarComponent;
