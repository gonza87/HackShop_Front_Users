import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import CardsPerson from "../components/CardsPerson";
import CardsDescription from "../components/cardsDescription";
import "../components/abouts.css";

// Abouts.js (código previo)

function Abouts() {
  return (
    <>
        <NavbarComponent/>
        <div className="container">
          <img
            src="/public/Presentacion-Plan-BA-Gaming-5-www.culturageek.com_.ar-1.jpg"
            alt=""
            className="about-image"
          />
          <div className="overlay-text">
            <h3>
              Sobre este proyecto El presente sitio de e-commerce es un proyecto
              desarrollado por estudiantes del Coding Bootcamp de Hack Academy.
              El Bootcamp es un programa educativo extremadamente práctico de 3
              meses y full-time, donde los estudiantes invierten más de 600
              horas a aprender sobre Node.js, Express, React.js, SQL, MongoDB y
              Git.
            </h3>
          </div>
        </div>
        <CardsDescription />
        <CardsPerson />
        <Whatsapp/>
        <Footer/>
    </>
  );
}

export default Abouts;
