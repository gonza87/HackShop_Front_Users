import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Login.css';

function Login(){
    return(
        <>  
           <div className="container-fluid">
            <div className="row flex-column-reverse flex-md-row">
                <div className="col-md-6 loginIzquierda">
                    <p className='textHackshop'>Hack Shop</p>
                    <p>Bienvenido</p>
                    <div className='d-flex align-items-center justify-content-center'>
                        <Form className='formLogin mt-4'>
                            <Row>
                                <Col>
                                <Form.Label className='textCampoLogin'>Email Addres</Form.Label><span className='testRegistro'>No tenés cuenta? <a href="">Registraté acá</a></span>
                                
                                <Form.Control type="email" placeholder="Escribí tu email acá"/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col>
                                <Form.Label className='textCampoLogin mt-3'>Password</Form.Label>
                                <Form.Control type='password' placeholder="Contraseña"/>
                                </Col>
                                
                            </Row>
                            <Button type="submit"className='btnLogin mt-4'>Iniciar Sesión</Button>
                        </Form>
                        
                    </div>
                    
                </div>
                <div className="col-md-6 loginDerecha">
                   
                        <img src="/public/logo.png" alt="" className='logoLogin'/>
                    
                    
                </div>
            </div>
            </div> 
        </>
    )
}

export default Login;