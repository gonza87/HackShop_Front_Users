import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route, Link } from 'react-router-dom';
import Abouts from "./pages/Abouts";
import CategoryList from "./pages/CategoryList";
import Whatsapp from "./components/Whatsapp";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-svg-core/styles.css';

//import Carrito from './components/Carrito';
import "./App.css";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/category" element={<CategoryList />} />
      </Routes>
      <Whatsapp />
      <Footer/>
    </>
  );
}

export default App;
