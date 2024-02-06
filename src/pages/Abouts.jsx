import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBarsStaggered,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faInstagram,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import NavbarComponent from "../components/Navbar";
import Whatsapp from "../components/Whatsapp";
import Footer from "../components/Footer";
import "./about.css";

function Abouts() {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <div className="row " style={{ padding: "5px" }}>
          <div className="col-12">
            <img
              src="/public/Anuncio Video LinkedIn Comunicado de Prensa Corporativo Verde (2).gif"
              alt=""
              className="about-image"
            />
            <div className="overlay-text">
              <h3>
                Sobre este proyecto El presente sitio de e-commerce es un
                proyecto desarrollado por estudiantes del Coding Bootcamp de
                Hack Academy. El Bootcamp es un programa educativo
                extremadamente práctico de 3 meses y full-time, donde los
                estudiantes invierten más de 600 horas a aprender sobre Node.js,
                Express, React.js, SQL, MongoDB y Git.
              </h3>
            </div>
          </div>
        </div>
        <div className="container" style={{ paddingTop: "350px" }}>
          <div className="row mt-4">
            <div
              className="col-md-4 d-flex justify-content-start mb-4"
              style={{ padding: "5px" }}
            >
              <Card
                style={{ width: "27rem", height: "24rem" }}
                className="text-center custom-card"
              >
                <Card.Body>
                  <FontAwesomeIcon icon={faClock} />

                  <Card.Title>Duración </Card.Title>
                  <Card.Text>
                    El proyecto fue desarrollado en tan sólo 3 semanas, durante
                    noviembre de 2022. El mismo se dividió en sprints (Scrum) de
                    una semana de duración.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div
              className="col-md-4 d-flex justify-content-center mb-4"
              style={{ padding: "5px" }}
            >
              <Card
                style={{ width: "27rem", height: "24rem" }}
                className="text-center custom-card"
              >
                <Card.Body>
                  <FontAwesomeIcon icon={faCode} />
                  <Card.Title>Tecnologías</Card.Title>
                  <Card.Text>
                    El proyecto fue desarrollado en tan sólo 3 semanas, durante
                    noviembre de 2022. El mismo se dividió en sprints (Scrum) de
                    una semana de duración.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div
              className="col-md-4 d-flex justify-content-end mb-4"
              style={{ padding: "5px" }}
            >
              <Card
                style={{ width: "27rem", height: "24rem" }}
                className="text-center custom-card"
              >
                <Card.Body>
                  <FontAwesomeIcon icon={faBarsStaggered} />
                  <Card.Title>División de tareas</Card.Title>
                  <Card.Text>
                    El proyecto fue desarrollado en tan sólo 3 semanas, durante
                    noviembre de 2022. El mismo se dividió en sprints (Scrum) de
                    una semana de duración.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img src="/public/Oficina.jpg" style={{ height: "250px" }} />
              <Card.Body>
                <Card.Title>Santiago Ourthe Cabalé</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Junior Full Stack Developer</ListGroup.Item>
                <ListGroup.Item>
                  Ultricies massa malesuada viverra cras lobortis. Tempor orci
                  hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas
                  cras. Nisl dictum.
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <div className="icons">
                  <FontAwesomeIcon
                    className="black-icon"
                    icon={faSquareFacebook}
                    size="2x"
                  />
                  <a href="#">
                    <FontAwesomeIcon
                      className="black-icon"
                      icon={faInstagram}
                      size="2x"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      className="black-icon"
                      icon={faXTwitter}
                      size="2x"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      className="black-iconT"
                      icon={faTiktok}
                      size="2x"
                    />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img
                src="/public/601906fb4153a.jpeg"
                style={{ height: "250px" }}
              />
              <Card.Body>
                <Card.Title>Gonzalo Viglioni</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Junior Full Stack Developer</ListGroup.Item>
                <ListGroup.Item>
                  Ultricies massa malesuada viverra cras lobortis. Tempor orci
                  hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas
                  cras. Nisl dictum.
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <div className="icons">
                  <FontAwesomeIcon
                    className="black-icon"
                    icon={faSquareFacebook}
                    size="2x"
                  />
                  <a href="#">
                    <FontAwesomeIcon
                      className="black-icon"
                      icon={faInstagram}
                      size="2x"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      className="black-icon"
                      icon={faXTwitter}
                      size="2x"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      className="black-iconT"
                      icon={faTiktok}
                      size="2x"
                    />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img
                src="/public/oficina.webp"
                style={{ height: "250px" }}
              />
              <Card.Body>
                <Card.Title>Mario Silveira</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Junior Full Stack Developer</ListGroup.Item>
                <ListGroup.Item>
                  Ultricies massa malesuada viverra cras lobortis. Tempor orci
                  hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas
                  cras. Nisl dictum.
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <div className="icons">
                  <FontAwesomeIcon
                    className="black-icon"
                    icon={faSquareFacebook}
                    size="2x"
                  />
                  <a href="#">
                    <FontAwesomeIcon
                      className="black-icon"
                      icon={faInstagram}
                      size="2x"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      className="black-icon"
                      icon={faXTwitter}
                      size="2x"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      className="black-iconT"
                      icon={faTiktok}
                      size="2x"
                    />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Abouts;

