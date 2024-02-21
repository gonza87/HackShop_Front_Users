import Home from "./pages/Home";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Abouts from "./pages/Abouts";
import CategoryList from "./pages/CategoryList";
import ProductDescription from "./pages/ProductDescription";
import StoreProducts from "./pages/StoreProducts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import NotFound404 from './pages/pageError/NotFound404';
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./App.css";

const ProtectedRoute = ({ user, redirectPath = "/login" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/category/:categoryName" element={<CategoryList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/detail/:slug" element={<ProductDescription />} />
        <Route path="/store" element={<StoreProducts />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path='*' element={<NotFound404/>}/> 
      </Routes>
    </>
  );
}

export default App;
