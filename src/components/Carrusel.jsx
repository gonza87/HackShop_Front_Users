import Carousel from "react-bootstrap/Carousel";
import "./carrusel.css";

function Carrusel() {
  return (
    <>
      <div className="msjCarrusel">
        <p>ELEVA TU JUEGO, POTENCIA TU EXPERIENCIA</p>
      </div>
      <div>
        <Carousel>
          <Carousel.Item interval={5000}>
            <img
              className="d-block imgCarrusel"
              src="/public/01.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block imgCarrusel"
              src="/public/02.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img
              className="d-block imgCarrusel"
              src="/public/03.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Carrusel;
