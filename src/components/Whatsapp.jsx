import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import './Whatsapp.css';

function Whatsapp()  {
    const handleWhatsappClick = () => {
        console.log("Click en whatsapp")
        // Aquí puedes agregar la lógica para redirigir al enlace de WhatsApp
        // Puedes utilizar window.location.href o React Router según tu configuración
        const whatsappLink = `https://web.whatsapp.com/`;

    // Redirige a la página de WhatsApp
    window.location.href = whatsappLink;
      };
    
      return (
        <FontAwesomeIcon icon={faWhatsapp } style={{ color: "#ffffff" }} onClick={handleWhatsappClick} className="whatsapp-icon" />
        // <img className="whatsapp-icon" onClick={handleWhatsappClick} src="/public/whatsapp.png" alt="whatsapp" />
      );
    
};

export default Whatsapp;