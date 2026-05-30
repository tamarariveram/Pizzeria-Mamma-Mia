import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext.jsx";
import PizzaProvider from "./context/PizzaContext.jsx";
import UserProvider from "./context/UserContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
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
    <UserProvider>
      <PizzaProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/login"
                element={
                  <ProtectedRoute requireAuth={false}>
                    <LoginForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <ProtectedRoute requireAuth={false}>
                    <RegisterForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute requireAuth={true}>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </PizzaProvider>
    </UserProvider>
  );
}

export default App;
