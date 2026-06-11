import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    const data = await login(email, password);

    if (data.token) {
      alert("Sesión iniciada con éxito");
      setEmail("");
      setPassword("");
      navigate("/");
    } else {
      alert("Error al iniciar sesión , verifica tus credenciales");
    }
  };

  return (
    <form className="loginForm" action="" onSubmit={(e) => handleSubmit(e)}>
      <h2>Iniciar sesión</h2>
      <label htmlFor="Email">Ingrese su correo electrónico</label>
      <br />
      <input
        type="email"
        placeholder="ejemplo@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="Contraseña">Ingrese su contraseña</label>
      <br />
      <input
        type="password"
        placeholder="*******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}
