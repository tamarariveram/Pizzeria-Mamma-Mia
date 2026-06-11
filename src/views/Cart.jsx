import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import "./Cart.css";

export default function Cart() {
  const { cart, increaseCount, decreaseCount, total } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const [success, setSuccess] = useState(false);

  const handleCheckout = async () => {
    const response = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cart }),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess(true);
    } else {
      alert("Error al procesar el pago: ");
    }
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>

      {success ? (
        <div className="cart-success">
          <p>🎉 ¡Compra realizada con éxito!</p>
          <p>Gracias por tu pedido 🍕</p>
        </div>
      ) : (
        <>
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
          <button
            className="cart-btn-pagar"
            disabled={!token}
            onClick={handleCheckout}
          >
            {token ? "Pagar" : "Debes iniciar sesión para pagar"}
          </button>
        </>
      )}
    </div>
  );
}
