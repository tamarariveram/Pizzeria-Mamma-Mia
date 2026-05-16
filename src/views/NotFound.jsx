import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>🍕 ¡Ups! Esta página no existe.</p>
      <p>Parece que la pizza que buscas no está en el menú.</p>
      <Link to="/" className="not-found-btn">
        Volver al inicio
      </Link>
    </div>
  );
}
