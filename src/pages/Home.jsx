

import Carrusel from "../components/Carrusel";
import CarruselDestacados from "../components/CarruselDestacados";
import CategoriasDestacadas from "../components/CategoriasDestacadas";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import './Home.css';


function Home() {
  

  return (
    <>
      <NavbarComponent/>
      <Carrusel/>
      <div className='main'>
        <div className='container'>  
          <div className='row'>
            <div className='col-12'>
            <CategoriasDestacadas/>
            </div>
            <div className='col-12'>
            <CarruselDestacados/>
            </div>
            <p className='text-center fw-bold pt-2 ivaText'>* Todos los precios del sitio tiene IVA incluído</p>
            <div className='col-12'>
              <div className='bannerTarjeta mt-2'> </div>
            </div>
          </div>
        </div>
      </div>
      <Whatsapp/>
      <Footer/>
    </>
  );
}

export default Home;









