
import Home from "./pages/Home";
import { Routes, Route, Link } from 'react-router-dom';
import Abouts from "./pages/Abouts";
import CategoryList from "./pages/CategoryList";

import Login from "./pages/Login";
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
      </Routes>
      
    </>
  );
}

export default App;
