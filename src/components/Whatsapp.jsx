import React from "react";


import './Whatsapp.css';

function Whatsapp()  {
    const handleWhatsappClick = () => {
        console.log("Click en whatsapp")
        // Aquí puedes agregar la lógica para redirigir al enlace de WhatsApp
        // Puedes utilizar window.location.href o React Router según tu configuración
      };
    
      return (
       
        <img className="whatsapp-icon" onClick={handleWhatsappClick} src="/public/whatsapp.png" alt="whatsapp" />
      );
    
};

export default Whatsapp;