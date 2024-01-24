import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import "./paragraphPerson.css";

function CardsPerson() {
  return (
    <div className="container">
      <div className="row mt-4">
        
        <div className="col-md-6 mb-4">
          <h5 className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
            debitis consequuntur, tempore accusamus excepturi omnis sint
            dignissimos ex nesciunt incidunt consectetur esse? Aut consectetur
            deserunt ipsum eaque, consequuntur culpa quia.
          </h5>
        </div>

        
        <div className="col-md-6 mb-4">
          <Card style={{ width: "100%" }}>
            <Card.Img src="/public/Oficina.jpg" style={{ height: "250px" }} />
            <Card.Body>
              <Card.Title>Santiago Ourthe Cabalé</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Junior Full Stack Developer</ListGroup.Item>
              <ListGroup.Item>
                Ultricies massa malesuada viverra cras lobortis. Tempor orci hac
                ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras.
                Nisl dictum.
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

        
        <div className="col-md-6 mb-4">
          <Card style={{ width: "100%" }}>
            <Card.Img src="/public/601906fb4153a.jpeg" style={{ height: "250px" }} />
            <Card.Body>
              <Card.Title>Gonzalo Viglioni</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Junior Full Stack Developer</ListGroup.Item>
              <ListGroup.Item>
                Ultricies massa malesuada viverra cras lobortis. Tempor orci hac
                ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras.
                Nisl dictum.
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

        
        <div className="col-md-6 mb-4">
          <Card style={{ width: "100%" }}>
            <Card.Img src="/public/oficina.webp" style={{ height: "250px" }} />
            <Card.Body>
              <Card.Title>Mario Silveira</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Junior Full Stack Developer</ListGroup.Item>
              <ListGroup.Item>
                Ultricies massa malesuada viverra cras lobortis. Tempor orci hac
                ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras.
                Nisl dictum.
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
  );
}

export default CardsPerson;
