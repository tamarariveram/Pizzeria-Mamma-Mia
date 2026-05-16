import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <h2>Mi Perfil</h2>
      <p className="profile-email">📧 usuario@email.com</p>
      <button className="profile-btn">Cerrar sesión</button>
    </div>
  );
}
