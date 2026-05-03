import { pizzaCart } from "../data/pizzas.js";
import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const modificarCantidad = (operacion, id) => {
    const productosActualizados = cart.map((pizza) => {
      if (pizza.id === id) {
        if (operacion === "suma") {
          return { ...pizza, count: pizza.count + 1 };
        }

        if (operacion === "resta") {
          return { ...pizza, count: pizza.count - 1 };
        }
      }

      return pizza;
    });

    const productosFiltrados = productosActualizados.filter(
      (pizza) => pizza.count > 0,
    );

    setCart(productosFiltrados);
  };

const total = cart.reduce((acc, pizza) => {
  return acc + pizza.price * pizza.count;
}, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <p>Total: ${total.toLocaleString()}</p>

      {cart.map((pizza) => (
        <div key={pizza.id}>
          <img src={pizza.img} alt={pizza.name} width="80" />
          <p>{pizza.name}</p>
          <p>${pizza.price.toLocaleString()}</p>
          <div>
            <button onClick={() => modificarCantidad("resta", pizza.id)}>
              -
            </button>

            <span> {pizza.count} </span>

            <button onClick={() => modificarCantidad("suma", pizza.id)}>
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
