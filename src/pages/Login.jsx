import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Login.css';

function Login(){
    return(
        <>  
           <div className="container-fluid">
            <div className="row">
                <div className="col-6 loginIzquierda">
                    <p>Hack Shop</p>
                    <p>Bienvenido</p>
                    <div className='d-flex justify-content-center'>
                        <Form>
                        <Row>
                            <Col>
                            <Form.Label>Email Addres</Form.Label>
                            <Form.Control type="email" placeholder="Escribí tu email acá" className='uno'/>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder="contraseña" />
                            </Col>
                            
                        </Row>
                    </Form>
                    </div>
                    
                </div>
                <div className="col-6 loginDerecha">
                   
                        <img src="/public/logo.png" alt="" className='logoLogin'/>
                    
                    
                </div>
            </div>
            </div> 
        </>
    )
}

export default Login;