import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProductCard() {
  return (
    <div className="row mt-2">
      <div className="col-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/logo.png" />
          <Card.Body>
            <Card.Title>Nombre del Producto</Card.Title>
            <Card.Text>Descripción corta del producto.</Card.Text>
            <Button variant="primary">Ver Detalles</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/logo.png" />
          <Card.Body>
            <Card.Title>Nombre del Producto</Card.Title>
            <Card.Text>Descripción corta del producto.</Card.Text>
            <Button variant="primary">Ver Detalles</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/logo.png" />
          <Card.Body>
            <Card.Title>Nombre del Producto</Card.Title>
            <Card.Text>Descripción corta del producto.</Card.Text>
            <Button variant="primary">Ver Detalles</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/logo.png" />
          <Card.Body>
            <Card.Title>Nombre del Producto</Card.Title>
            <Card.Text>Descripción corta del producto.</Card.Text>
            <Button variant="primary">Ver Detalles</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ProductCard;
