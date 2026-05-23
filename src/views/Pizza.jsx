import { useEffect, useState } from "react";
import "./Pizza.css";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { useParams } from "react-router-dom";

function Pizza() {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getPizza = async () => {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await response.json();

      setPizza(data);
    };
    getPizza();
  }, []);


if (!pizza) {
  return <p className="pizza-loading">Cargando pizza...</p>;
}

  return (
    <div className="pizza">
      <img src={pizza.img} alt={pizza.name} className="pizza-img" />

      <h2 className="pizza-name">{pizza.name}</h2>

      <p className="pizza-desc">{pizza.desc}</p>

      <h3 className="pizza-ingredients-title">Ingredientes:</h3>

      <ul className="pizza-ingredients">
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>

      <h3 className="pizza-price">Precio: ${new Intl.NumberFormat("es-CL").format(pizza.price)}</h3>

      <button className="pizza-btn" onClick={() => addToCart({ name: pizza.name, price: pizza.price, img: pizza.img })}>
        Añadir al carrito
      </button>
    </div>
  );
}

export default Pizza;
