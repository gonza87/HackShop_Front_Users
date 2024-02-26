import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./Whatsapp.css";

function Whatsapp() {
  const handleWhatsappClick = () => {
    const whatsappLink = `https://web.whatsapp.com/`;

    window.location.href = whatsappLink;
  };

  return (
    <FontAwesomeIcon
      icon={faWhatsapp}
      style={{ color: "#ffffff" }}
      onClick={handleWhatsappClick}
      className="whatsapp-icon"
    />
  );
}

export default Whatsapp;
