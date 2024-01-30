import { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
/* import { BsX } from 'react-icons/bs'; */
import { BsXCircle } from "react-icons/bs";

import "./navbarAside.css";

import Card from "react-bootstrap/Card";
function NavbarAside() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>CATEGORIAS</span>

      <Offcanvas
        style={{ backgroundColor: "#09072c" }}
        className="customAsideVar"
        show={show}
        onHide={handleClose}
        placement="start"
      >
        <Offcanvas.Header ><BsXCircle style={{ fontSize: '1.5rem', cursor: 'pointer', color:"#ffffff"}} onClick={handleClose} /></Offcanvas.Header>
        

        <Offcanvas.Body>
          <div className="row">
            <div className="col-12 lineaCategory">
              <Table responsive="sm">
                <thead>
                  <tr>
                    <td
                      style={{ backgroundColor: "#09072c", color: "#ffffff" }}
                    >
                      <Link to="" className="espacioTabla">
                        CPU
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ backgroundColor: "#09072c", color: "#ffffff" }}
                    >
                      <Link to="" className="espacioTabla">
                        GPU
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ backgroundColor: "#09072c", color: "#ffffff" }}
                    >
                      <Link to="" className="espacioTabla">
                        {" "}
                        PC ARMADAS
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ backgroundColor: "#09072c", color: "#ffffff" }}
                    >
                      <Link to="" className="espacioTabla">
                        SILLAS GAMER
                      </Link>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{ backgroundColor: "#09072c", color: "#ffffff" }}
                    >
                      <Link to="" className="espacioTabla">
                        {" "}
                        MONITORES
                      </Link>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td
                      style={{ backgroundColor: "#09072c", color: "#ffffff" }}
                    >
                      <Link to="" className="espacioTabla">
                        NOTEBOOKS
                      </Link>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td
                      style={{ backgroundColor: "#09072c", color: "#ffffff" }}
                    >
                      <Link to="" className="espacioTabla">
                        PERIFERICOS
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="row ">
              <div className="col-12 logos">
                <img src="/public/logosNavAside/klipartz.com.png" alt="" />
                <img src="/public/logosNavAside/pngegg (1).png" alt="" />
                <img src="/public/logosNavAside/pngegg (11).png" alt="" />
              </div>
              <div className="col-12 logos">
                <img src="/public/logosNavAside/pngegg (12).png" alt="" />
                <img src="/public/logosNavAside/pngegg (13).png" alt="" />
                <img src="/public/logosNavAside/pngegg (14).png" alt="" />
              </div>
              <div className="col-12 logos">
                <img src="/public/logosNavAside/pngegg (2).png" alt="" />
                <img src="/public/logosNavAside/pngegg (3).png" alt="" />
                <img src="/public/logosNavAside/pngegg (4).png" alt="" />
              </div>
              <div className="col-12 logos">
                <img src="/public/logosNavAside/pngegg (5).png" alt="" />
                <img src="/public/logosNavAside/pngegg (6).png" alt="" />
                <img src="/public/logosNavAside/pngegg (7).png" alt="" />
              </div>
              <div className="col-12 logos">
                <img src="/public/logosNavAside/pngegg (8).png" alt="" />
                <img src="/public/logosNavAside/pngegg (9).png" alt="" />
                <img src="/public/logosNavAside/pngegg.png" alt="" />
              </div>

              <div className="col-12 logos">
                <img src="/public/logosNavAside/pngwing.com (1).png" alt="" />
                <img src="/public/logosNavAside/pngwing.com (3).png" alt="" />
                <img src="/public/logosNavAside/pngwing.com.png" alt="" />
              </div>
            
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavbarAside;
