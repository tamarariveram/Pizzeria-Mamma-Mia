import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <LoginForm />
      <br />
      {/* <RegisterForm /> */}
      <Footer />
    </>
  );
}

export default App;
