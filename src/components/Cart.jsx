import { pizzaCart } from "../data/pizzas.js";
import { useState } from "react";
import "./Cart.css";

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const modificarCantidad = (operacion, id) => {
    const productosActualizados = cart.map((pizza) => {
      if (pizza.id === id) {
        if (operacion === "suma") return { ...pizza, count: pizza.count + 1 };
        if (operacion === "resta") return { ...pizza, count: pizza.count - 1 };
      }
      return pizza;
    });
    setCart(productosActualizados.filter((pizza) => pizza.count > 0));
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>

      {cart.map((pizza) => (
        <div className="cart-item" key={pizza.id}>
          <img src={pizza.img} alt={pizza.name} />
          <div className="cart-item-info">
            <p>{pizza.name}</p>
            <p>${pizza.price.toLocaleString()}</p>
          </div>
          <div className="cart-item-actions">
            <button onClick={() => modificarCantidad("resta", pizza.id)}>
              -
            </button>
            <span>{pizza.count}</span>
            <button onClick={() => modificarCantidad("suma", pizza.id)}>
              +
            </button>
          </div>
        </div>
      ))}

      <p className="cart-total">
        Total: <span>${total.toLocaleString()}</span>
      </p>
    </div>
  );
}
