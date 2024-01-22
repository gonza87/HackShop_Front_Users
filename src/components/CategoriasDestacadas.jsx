import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CategoriasDestacadas.css';

function CategoriasDestacadas()  {
  return (
<>

    <div className='catDestacadas'>
        <p>CATEGORIAS DESTACADAS</p>
    </div>
    <div className="d-flex justify-content-between flex-wrap">
        <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="catMonitores.jpg" />    
        </Card>
        <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="catGpu.jpg" />    
        </Card>
        <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="catNotebooks.jpg" />    
        </Card>
        <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="catPc.jpg" />    
        </Card>
        <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="catSillas.jpg" />    
        </Card>
    </div>
    
</>
   
    
  );
};

export default CategoriasDestacadas;
