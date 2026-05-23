import { useEffect, useState, useContext } from "react";
import CardPizza from "../components/CardPizza";
import "./Catalogo.css";
import { PizzaContext } from "../context/PizzaContext.jsx";

function Catalogo() {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div className="catalogo">
      <h2 className="catalogo-title">🍕 Nuestro Catálogo</h2>
      <div className="catalogo-cards">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
