import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import "./Catalogo.css";

function Catalogo() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    };
    getPizzas();
  }, []);

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