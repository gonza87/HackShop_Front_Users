import { useState } from "react";
import { ListGroup, Button  } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Card from "react-bootstrap/Card";
function Carrito() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FontAwesomeIcon
        className="ms-2"
        icon={faShoppingCart}
        size='xl'
        style={{ cursor: "pointer" }}
        onClick={handleShow}
      />

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mi Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/public/procesadores/PROCESADOR-INTEL-I5-12400F-SVIDEO-12VA-1700.jpg" />
              <Card.Body>
                
                
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1 ITEM</ListGroup.Item>
                <ListGroup.Item>Intel Core i5 10400f 2.9GHz 12MB LGA1200 10th Gen</ListGroup.Item>
                <ListGroup.Item>2 × US$147.50</ListGroup.Item>
                <ListGroup.Item>SUBTOTAL: US$295.00</ListGroup.Item>
                <Card.Link href="#"><h4 className="verCarrito">Ver carrito</h4></Card.Link>
              </ListGroup>
              <Card.Body>
                <Button variant="primary">FINALIZAR COMPRA</Button>
                
              </Card.Body>
            </Card>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Carrito;