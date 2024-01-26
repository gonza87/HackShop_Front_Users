import { useState } from "react";
import Table from "react-bootstrap/Table";

import Offcanvas from "react-bootstrap/Offcanvas";

import './navbarAside.css';

import Card from "react-bootstrap/Card";
function NavbarAside() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <FontAwesomeIcon
        className="ms-2"
        icon={faShoppingCart}
        style={{ cursor: "pointer" }}
        onClick={handleShow}
      /> */}
      <button onClick={handleShow}>Categoria</button>

      <Offcanvas
        className="background custom-offcanvas"
        show={show}
        onHide={handleClose}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          
          <Card.Link href="#">
            <h5 className="verCarrito">CATEGORIAS</h5>
          </Card.Link>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>
          <div className="row">
            <div className="col-12 category">
              
              <Table  responsive="sm">
                <thead>
                  <tr>
                    <td style={{ backgroundColor: '#09072c', color:"#ffffff" }}>Table cell</td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: '#09072c', color:"#ffffff" }}>Table cell</td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: '#09072c', color:"#ffffff" }}>Table cell</td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: '#09072c', color:"#ffffff" }}>Table cell</td>
                  </tr>
                  
                </thead>
                <tbody>
                  <tr>
                   <td style={{ backgroundColor: '#09072c', color:"#ffffff" }}>Table cell</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default  NavbarAside;