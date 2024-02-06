import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { configureStore, combineReducers  } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import carritoReducer from "./redux/carritoReducer";
import  userReducer from "./redux/userReducer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const rootReducer = combineReducers({
  carrito: carritoReducer,
  user: userReducer, // Agrega el nuevo slice aquí
  // Otros slices si los tienes
});

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
