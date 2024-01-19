
import Carrusel from './components/Carrusel';
import NavbarComponent from './components/Navbar';
import Product from './components/Product';
import './App.css'

function App() {
  

  return (
   <>
   <NavbarComponent/>
   
   <Carrusel/>
   
   <div className='main'>
      <div className='container'>
        <Product/>
      <div className='row'>
        <div className='col-12'>
          <div className='bannerTarjeta mt-4'> </div>
        </div>
      </div>
    </div>
   </div>
   
   </>
   
  )
}

export default App
