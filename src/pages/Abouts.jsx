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
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import NavbarComponent from "../components/Navbar";
import Whatsapp from "../components/Whatsapp";
import FooterAbouts from "../components/FooterAbouts";
import "./about.css";

function Abouts() {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img
              src="/public/Anuncio Video LinkedIn Comunicado de Prensa Corporativo Verde (2).gif"
              alt=""
              className="about-image img-fluid"
            />
            <div className="proyecto">
              <div className="overlay-text">
                <h1> Sobre este proyecto</h1>
                <h3>
                  El presente sitio de e-commerce es un proyecto desarrollado
                  por estudiantes del Curso Avanzado de Desarrollo Web Full
                  Stack de Hack Academy. El Curso Avanzado Full Stack es un
                  programa educativo extremadamente práctico de 8 meses y
                  part-time, donde los estudiantes invierten más de 350 horas a
                  aprender sobre Node.js, Express, React.js, SQL, MongoDB y Git.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <Card className="text-center custom-card">
              <Card.Body>
                <FontAwesomeIcon icon={faClock} size="4x" />
                <Card.Title>Duración</Card.Title>
                <Card.Text>
                  El proyecto fue desarrollado en 6 semanas, durante enero y
                  febrero del 2024. El mismo se dividió en 3 sprints (Scrum) de
                  dos semanas de duración.
                  <br /><br /><br />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="text-center custom-card">
              <Card.Body>
                <FontAwesomeIcon icon={faCode} size="4x" />
                <Card.Title>Tecnologías</Card.Title>
                <Card.Text>
                  Para el Front-End del sitio se desarrolló una aplicación en
                  React tanto para front de usuarios como para administradores
                  (usando Create-React-App) mientras que para el Back-End se
                  desarrolló una REST API hecha con Node.js, Express, SQL y
                  Git/GitHub.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="text-center custom-card">
              <Card.Body>
                <FontAwesomeIcon icon={faBarsStaggered} size="4x" />
                <Card.Title>División de tareas</Card.Title>
                <Card.Text>
                  Para la organización de tareas durante el proyecto se utilizó
                  Trello. Esto permitió que cada integrante del equipo estuviese
                  permanentemente al tanto del estado del proyecto así como de
                  las tareas que debía realizar.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <Card className="desarrolladores">
              <Card.Img src="/public/Oficina.jpg" />
              <Card.Body>
                <Card.Title>Santiago Ourthe Cabalé</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="item">
                    Junior Full Stack Developer
                  </ListGroup.Item>
                  <ListGroup.Item className="item">
                    Ultricies massa malesuada viverra cras lobortis. Tempor orci
                    hac ligula dapibus mauris sit ut eu. Eget turpis urna
                    maecenas cras. Nisl dictum.
                  </ListGroup.Item>
                </ListGroup>
                <div className="icons">
                  <a href="#">
                    <FontAwesomeIcon
                      className="black-icon"
                      icon={faSquareFacebook}
                      size="2x"
                    />
                  </a>
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
                      icon={faTwitter}
                      size="2x"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      className="black-icon"
                      icon={faTiktok}
                      size="2x"
                    />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="desarrolladores">
              <Card.Img src="/public/601906fb4153a.jpeg" />
              <Card.Body>
                <Card.Title>Gonzalo Viglioni</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="item">
                    Junior Full Stack Developer
                  </ListGroup.Item>
                  <ListGroup.Item className="item">
                    Ultricies massa malesuada viverra cras lobortis. Tempor orci
                    hac ligula dapibus mauris sit ut eu. Eget turpis urna
                    maecenas cras. Nisl dictum.
                  </ListGroup.Item>
                </ListGroup>
                <div className="icons">
                  <a href="#">
                    <FontAwesomeIcon
                      className="black-icon"
                      icon={faSquareFacebook}
                      size="2x"
                    />
                  </a>
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
                      icon={faTwitter}
                      size="2x"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      className="black-icon"
                      icon={faTiktok}
                      size="2x"
                    />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="desarrolladores">
              <Card.Img src="/public/oficina.webp" />
              <Card.Body>
                <Card.Title>Mario Silveira</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="item">
                    Junior Full Stack Developer
                  </ListGroup.Item>
                  <ListGroup.Item className="item">
                    Ultricies massa malesuada viverra cras lobortis. Tempor orci
                    hac ligula dapibus mauris sit ut eu. Eget turpis urna
                    maecenas cras. Nisl dictum.
                  </ListGroup.Item>
                </ListGroup>
                <div className="icons">
                  <a href="#">
                    <FontAwesomeIcon
                      className="black-icon"
                      icon={faSquareFacebook}
                      size="2x"
                    />
                  </a>
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
                      icon={faTwitter}
                      size="2x"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      className="black-icon"
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
      <FooterAbouts />
    </>
  );
}

export default Abouts;

