import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Abouts from "./pages/Abouts";
import CategoryList from "./pages/CategoryList";
import Description from "./pages/Description";
import StoreProducts from "./pages/StoreProducts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/category/:categoryName" element={<CategoryList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/detail/:slug" element={<Description />} />

        <Route path="/store" element={<StoreProducts />} />
      </Routes>
    </>
  );
}

export default App;
