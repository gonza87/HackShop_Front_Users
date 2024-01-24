
import Home from "./pages/Home";
import { Routes, Route, Link } from 'react-router-dom';
import Abouts from "./pages/Abouts";
import CategoryList from "./pages/CategoryList";
import Description from "./pages/Description";

import Login from "./pages/Login";
import Register from "./pages/Register";
import '@fortawesome/fontawesome-svg-core/styles.css';


import "./App.css";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/description" element={<Description />} />
      </Routes>
      
    </>
  );
}

export default App;
