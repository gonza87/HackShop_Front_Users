
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

import { BsXCircle } from "react-icons/bs";

import "./NavbarAside.css";

import Card from "react-bootstrap/Card";
function NavbarAside() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, []);

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
        <Offcanvas.Header>
          <BsXCircle
            style={{ fontSize: "1.5rem", cursor: "pointer", color: "#ffffff" }}
            onClick={handleClose}
          />
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="row">
            <div className="col-12 lineaCategory">
              <Table responsive="sm">
                <thead>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#09072c",
                        opacity: "50%",
                        color: "#ffffff",
                      }}
                    >
                      <NavLink
                        to="/category/CPU"
                        className="espacioTabla"
                        onClick={() => {
                          handleClose();
                          navigate("/category/CPU");
                        }}
                      >
                        CPU
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#09072c",
                        opacity: "50%",
                        color: "#ffffff",
                      }}
                    >
                      <NavLink
                        to="/category/GPU"
                        className="espacioTabla"
                        onClick={() => {
                          handleClose();
                          navigate("/category/GPU");
                        }}
                      >
                        GPU
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#09072c",
                        opacity: "50%",
                        color: "#ffffff",
                      }}
                    >
                      <NavLink
                        to="/category/PCS ARMADAS"
                        className="espacioTabla"
                        onClick={() => {
                          handleClose();
                          navigate("/category/PCS ARMADAS");
                        }}
                      >
                        PCS ARMADAS
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#09072c",
                        opacity: "50%",
                        color: "#ffffff",
                      }}
                    >
                      <NavLink
                        to="/category/SILLAS GAMER"
                        className="espacioTabla"
                        onClick={() => {
                          handleClose();
                          navigate("/category/SILLAS GAMER");
                        }}
                      >
                        SILLAS GAMER
                      </NavLink>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#09072c",
                        opacity: "50%",
                        color: "#ffffff",
                      }}
                    >
                      <NavLink
                        to="/category/MONITORES"
                        className="espacioTabla"
                        onClick={() => {
                          handleClose();
                          navigate("/category/MONITORES");
                        }}
                      >
                        MONITORES
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#09072c",
                        opacity: "50%",
                        color: "#ffffff",
                      }}
                    >
                      <NavLink
                        to="/category/NOTEBOOKS"
                        className="espacioTabla"
                        onClick={() => {
                          handleClose();
                          navigate("/category/NOTEBOOKS");
                        }}
                      >
                        NOTEBOOKS
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#09072c",
                        opacity: "50%",
                        color: "#ffffff",
                      }}
                    >
                      <NavLink
                        to="/category/PERIFERICOS"
                        className="espacioTabla"
                        onClick={() => {
                          handleClose();
                          navigate("/category/PERIFERICOS");
                        }}
                      >
                        PERIFERICOS
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-12 logos">
                <a
                  href="https://www.amd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/public/logosNavAside/klipartz.com.png"
                    alt="ryzen"
                  />
                </a>
                <a
                  href="https://www.coolermaster.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/public/logosNavAside/pngegg (5).png"
                    alt="cooler master"
                  />
                </a>
                <a
                  href="https://www.gigabyte.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/public/logosNavAside/pngegg (4).png"
                    alt="gigabyte"
                  />
                </a>
              </div>
              <div className="col-12 logos">
                <a
                  href="https://www.lg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/public/logosNavAside/pngegg (12).png" alt="lg" />
                </a>
                <a
                  href="https://www.razer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/public/logosNavAside/pngegg (13).png"
                    alt="razer"
                  />
                </a>
                <a
                  href="https://www.hyperxgaming.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/public/logosNavAside/pngegg (14).png"
                    alt="hyper"
                  />
                </a>
              </div>

              <div className="col-12 logos">
                <a
                  href="https://www.logitech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/public/logosNavAside/pngegg (8).png"
                    alt="logitech"
                  />
                </a>
                <a
                  href="https://www.asrock.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/public/logosNavAside/Asrock_logo_PNG1.png"
                    alt="asrock"
                  />
                </a>
                <a
                  href="https://www.nvidia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/public/logosNavAside/pngegg.png" alt="nvidia" />
                </a>
              </div>

              <div className="col-12 logos">
                <a
                  href="https://www.intel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/public/logosNavAside/pngwing.com (1).png"
                    alt="intel"
                  />
                </a>
                <a
                  href="https://www.amd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/public/logosNavAside/pngwing.com (3).png"
                    alt="amd"
                  />
                </a>
                <a
                  href="https://www.msi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/public/logosNavAside/nuevomsi.png" alt="msi" />
                </a>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavbarAside;