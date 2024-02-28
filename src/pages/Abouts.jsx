import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

import NavbarComponent from "../components/Navbar";
import Whatsapp from "../components/Whatsapp";
import FooterAbouts from "../components/FooterAbouts";
import "./Abouts.css";

function Abouts() {
  const [mostrarDescripcion1, setMostrarDescripcion1] = useState(false);
  const [mostrarDescripcion2, setMostrarDescripcion2] = useState(false);
  const [mostrarDescripcion3, setMostrarDescripcion3] = useState(false);

  const toggleDescripcion1 = () => {
    setMostrarDescripcion1(!mostrarDescripcion1);
  };

  const toggleDescripcion2 = () => {
    setMostrarDescripcion2(!mostrarDescripcion2);
  };

  const toggleDescripcion3 = () => {
    setMostrarDescripcion3(!mostrarDescripcion3);
  };

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
                <Card.Text className="textoCard">
                  El proyecto fue desarrollado en 6 semanas, durante enero y
                  febrero del 2024. El mismo se dividió en 3 sprints (Scrum) de
                  dos semanas de duración.
                  <br />
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="text-center custom-card">
              <Card.Body>
                <FontAwesomeIcon icon={faCode} size="4x" />
                <Card.Title>Tecnologías</Card.Title>
                <Card.Text className="textoCard">
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
                <Card.Text className="textoCard">
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
            <Card className="desarrolladores" onClick={toggleDescripcion1}>
              <Card.Img src="/public/gifCarrito/WhatsApp Image 2024-02-28 at 10.43.06.jpg" />
              <Card.Body>
                <Card.Title>Santiago Ourthe Cabalé</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="item">
                    Junior Full Stack Developer
                  </ListGroup.Item>
                  {mostrarDescripcion1 && (
                    <ListGroup.Item className="itemAltura">
                      Soy estudiante de Arquitectura con un profundo interés en
                      la tecnología. Aunque mi formación académica no se ha
                      centrado en el ámbito informático, siempre he sentido una
                      atracción hacia la programación y el análisis de datos.
                      Actualmente, estoy en proceso de convertirme en
                      desarrollador full stack, emocionado por contribuir y
                      seguir aprendiendo sobre el mundo tecnológico que se
                      encuentra en constante evolución.
                    </ListGroup.Item>
                  )}
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
                      className="black-icon tt"
                      icon={faGithub}
                      size="2x"
                    />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="desarrolladores" onClick={toggleDescripcion2}>
              <Card.Img src="/public/gifCarrito/WhatsApp Image 2024-02-28 at 12.52.32.jpg" />
              <Card.Body>
                <Card.Title>Gonzalo Viglioni</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="item">
                    Junior Full Stack Developer
                  </ListGroup.Item>
                  {mostrarDescripcion2 && (
                    <ListGroup.Item className="item">
                      A lo largo de mi carrera, he desempeñado el rol de técnico
                      en infraestructura durante varios años, pero siempre he
                      sentido una fuerte curiosidad por adentrarme en el
                      emocionante mundo del desarrollo. Actualmente, estoy
                      dedicando tiempo y esfuerzo significativo para ampliar mis
                      habilidades y convertirme en un desarrollador full stack
                      competente. Mis estudios y experiencia práctica me han
                      permitido adquirir conocimientos sólidos en diversas
                      tecnologías, entre ellas SQL, MongoDB, C#, HTML, CSS,
                      JavaScript, Node, React y Git. Mi objetivo principal es
                      realizar una transición exitosa hacia el ámbito de la
                      programación.
                    </ListGroup.Item>
                  )}
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
                      className="black-icon tt"
                      icon={faGithub}
                      size="2x"
                    />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="desarrolladores" onClick={toggleDescripcion3}>
              <Card.Img src="/public/gifCarrito/IMG_8876.jpg" />
              <Card.Body>
                <Card.Title>Mario Silveira</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="item">
                    Junior Full Stack Developer
                  </ListGroup.Item>
                  {mostrarDescripcion3 && (
                    <ListGroup.Item className="itemAltura">
                      Soy un Bachiller Tecnológico en Administración con
                      experiencia como Auxiliar Técnico en Administración.
                      Además, cuento con certificación como QA Funcional y
                      Diploma en Logística. Actualmente estoy en proceso de
                      convertirme en desarrollador full stack. Resido en
                      Montevideo y estoy entusiasmado por iniciar esta nueva
                      etapa en mi carrera profesional. Este cambio me está
                      permitiendo poner en práctica mi versatilidad y
                      habilidades para adaptarme a nuevos desafíos.
                    </ListGroup.Item>
                  )}
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
                      icon={faGithub}
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
