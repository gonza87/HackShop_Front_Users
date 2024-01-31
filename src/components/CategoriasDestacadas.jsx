import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  Link } from 'react-router-dom';

import './CategoriasDestacadas.css';

function CategoriasDestacadas()  {
  return (
<>

    <div className='catDestacadas'>
        <p>CATEGORIAS DESTACADAS</p>
    </div>
  <div className="d-flex justify-content-between flex-wrap">
        <Link to="/category/MONITORES">
            <Card className="cardCatDestacadas" style={{ width: '13rem' }}>
                <Card.Img variant="top" src="catMonitores.jpg" />    
            </Card>
        </Link>
        <Link to="/category/GPU">
            <Card className="cardCatDestacadas" style={{ width: '13rem' }}>
                <Card.Img variant="top" src="catGpu.jpg" />    
            </Card>
        </Link>
         <Link to="/category/NOTEBOOKS">
            <Card className="cardCatDestacadas" style={{ width: '13rem' }}>
            <Card.Img variant="top" src="catNotebooks.jpg" />    
        </Card>
         </Link>
         <Link to="/category/PCS ARMADAS">
        <Card className="cardCatDestacadas" style={{ width: '13rem' }}>
            <Card.Img variant="top" src="catPc.jpg" />    
        </Card>
        </Link>
        <Link to="/category/SILLAS GAMER">
        <Card className="cardCatDestacadas" style={{ width: '13rem' }}>
            <Card.Img variant="top" src="catSillas.jpg" />    
        </Card>
        </Link>
    </div>
    
</>
   
    
  );
};

export default CategoriasDestacadas;
