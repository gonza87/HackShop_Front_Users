
import Carrusel from './components/Carrusel';
import NavbarComponent from './components/Navbar';
import Product from './components/Product';
import Whatsapp from './components/Whatsapp';
import CarruselDestacados from './components/CarruselDestacados';
//import Carrito from './components/Carrito';
import './App.css'

function App() {
  

  return (
   <>
   <NavbarComponent/>
   
   <Carrusel/>
   
   <div className='main'>
      <div className='container'>
        
      <div className='row'>
        <div className='col-12'>
        <CarruselDestacados/>
        </div>
        <div className='col-12'>
          <div className='bannerTarjeta mt-4'> </div>
        </div>
      </div>
      <Whatsapp/>
    </div>
   </div>
   
   </>
   
  )
}

export default App
