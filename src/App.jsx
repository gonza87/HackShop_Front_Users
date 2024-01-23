import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route, Link } from 'react-router-dom';
import Abouts from "./pages/Abouts";
import Whatsapp from "./components/Whatsapp";


//import Carrito from './components/Carrito';
import "./App.css";

function App() {
  return (
    <>
<NavbarComponent />
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Abouts />} />

      
      </Routes>
      <Whatsapp />
    </>
  );
}

export default App;
