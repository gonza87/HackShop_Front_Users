import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function ProductCountSelector() {
  return (
    <Form inline>
      <Form.Label className="mr-2">Mostrar:</Form.Label>
      <Form.Control as="select" className="mr-2">
        <option value="12" selected>12</option>
        <option value="24">24</option>
        <option value="36">36</option>
      </Form.Control>
      
      
    </Form>
  );
}

export default ProductCountSelector;
