// AddToCart.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./addToCart.css"; // Asegúrate de importar tu hoja de estilos

const AddToCart = () => {
  const handleClick = () => {};

  return (
    <div className="addToCartContainer">
      <button className="btn" onClick={handleClick}>
        <FontAwesomeIcon
          icon={faShoppingCart}
          style={{ marginRight: "0.5rem" }}
        />
        Añadir al carrito
      </button>
    </div>
  );
};

export default AddToCart;