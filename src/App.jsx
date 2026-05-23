import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext.jsx";
import PizzaProvider from "./context/PizzaContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./views/Home";
import Cart from "./views/Cart";
import Catalogo from "./views/Catalogo.jsx";
import Pizza from "./views/Pizza";
import LoginForm from "./views/LoginForm";
import RegisterForm from "./views/RegisterForm";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <PizzaProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </PizzaProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
