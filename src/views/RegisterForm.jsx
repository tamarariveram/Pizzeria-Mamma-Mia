import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    } else if (password !== passwordConfirm) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const data = await register(email, password);

    if (data.token) {
      alert("Cuenta creada con éxito");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      navigate("/");
    } else {
      alert("Error al crear la cuenta, verifica tus datos");
    }
  };

  return (
    <form action="" className="registerForm" onSubmit={(e) => handleSubmit(e)}>
      <h2>Crear una cuenta</h2>

      <label htmlFor="email">Email</label>
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password">Contraseña</label>
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label htmlFor="passwordConfirm">Confirmar contraseña</label>
      <br />
      <input
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <br />
      <button type="submit">Registrarse</button>
    </form>
  );
}
