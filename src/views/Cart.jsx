import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cart, increaseCount, decreaseCount, total } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">🍕 Tu carrito está vacío</p>
      ) : (
        cart.map((pizza) => (
          <div className="cart-item" key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} />
            <div className="cart-item-info">
              <p>{pizza.name}</p>
              <p>${pizza.price.toLocaleString()}</p>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => decreaseCount(pizza.id)}>-</button>
              <span>{pizza.count}</span>
              <button onClick={() => increaseCount(pizza.id)}>+</button>
            </div>
          </div>
        ))
      )}

      <p className="cart-total">
        Total: <span>${total.toLocaleString()}</span>
      </p>
    </div>
  );
}
